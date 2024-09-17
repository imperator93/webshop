import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { avatarArr } from "../../assets/avatarArr";
import { User } from "../../types/User";

import { setUser } from "../../redux/slices/userSlice";

import "./login.css";
import { passHesh } from "../../helpers/passHesh";
export const Login = () => {
	const dispatch = useDispatch();

	const navigate = useNavigate();

	const [register, setRegister] = useState<Record<string, boolean>>({
		userExists: false,
		registeringSuccessful: false,
	});

	const [login, setLogin] = useState<{ userExists: boolean; correctPassword: boolean }>({
		userExists: true,
		correctPassword: true,
	});

	//REGISTER
	const handleRegister = (event: React.FormEvent) => {
		event.preventDefault();
		//cannot iterate over event.target so I made my own function
		const findChecked = (event: React.FormEvent): string => {
			let word = "";
			for (let i = 2; i <= 5; i++) {
				if (((event.target as HTMLFormElement)[i] as HTMLInputElement).checked)
					word = ((event.target as HTMLFormElement)[i] as HTMLInputElement).id;
			}
			return word;
		};
		const username = ((event.target as HTMLFormElement)[0] as HTMLInputElement).value;
		const password = ((event.target as HTMLFormElement)[1] as HTMLInputElement).value;

		if (password.includes("/")) {
			alert("Character / is not allowed in the password");
			return;
		}

		const newUser: User = {
			username: username,
			password: password,
			avatar: findChecked(event),
		};
		setRegister({ ...register, userExists: false });

		fetch("https://webshop-backend-rgpw.onrender.com/users", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(newUser),
		})
			.then((response) => (!response.ok ? console.log("bad request") : response.json()))
			.then((data) => {
				if (data.message == "User already exists") setRegister({ ...register, userExists: true });
				else setRegister({ ...register, registeringSuccessful: true });
			});
	};

	//LOGIN
	const handleLogin = (event: React.FormEvent) => {
		event.preventDefault();
		login.correctPassword = true;
		const existingUserUsername = ((event.target as HTMLFormElement)[0] as HTMLInputElement).value;
		const userPassword = ((event.target as HTMLFormElement)[1] as HTMLInputElement).value;

		//yes everyone can see the encryption pass what can you do...maybe have a secret key? :=)
		const encryptedPassword = passHesh(userPassword);

		fetch(`https://webshop-backend-rgpw.onrender.com/users/login`, {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify({
				username: existingUserUsername,
				password: encryptedPassword,
			}),
		})
			.then((response) => (!response.ok ? console.log("bad request") : response.json()))
			.then((data) => {
				if (data.userInDatabase) {
					setLogin({ ...login, userExists: true });
					dispatch(setUser(data.user));
					navigate("/");

					const userToSessionStorage = JSON.stringify(data.user);
					sessionStorage.setItem("user", userToSessionStorage);
				} else if (data.message == "WRONG PASSWORD INTRUDER!!!") {
					setLogin({ userExists: true, correctPassword: false });
				} else {
					setLogin({ ...login, userExists: false });
				}
			});
	};
	return (
		<div className="login-wrapper">
			{!register.registeringSuccessful ? (
				<form onSubmit={(event) => handleRegister(event)} className="sign-up-form">
					<div style={{ textAlign: "center", marginBottom: "5px" }}>
						<h1>REGISTER</h1>
						<p>Join our webshop and start spending that money</p>
					</div>

					{register.userExists && <div style={{ color: "red" }}>User with this name already registered</div>}

					<input pattern="\S(.*\S)?" minLength={3} maxLength={12} required type="text" />
					<label>Username</label>

					<input pattern="\S(.*\S)?" minLength={5} maxLength={10} required type="password" />
					<label>Password</label>

					<div className="avatar-wrapper">
						<h2 className="avatar-title">CHOOSE YOUR AVATAR:</h2>
						<div>
							{avatarArr.map((item) => (
								<input
									style={{ background: `URL(${item})`, backgroundSize: "contain", backgroundRepeat: "no-repeat" }}
									className="avatar-input"
									required
									type="radio"
									name="avatar-input"
									key={item}
									id={item}
								/>
							))}
						</div>
					</div>

					<button className="form-register-login-button" type="submit">
						Register
					</button>
				</form>
			) : (
				<div className="sign-up-form">REGISTERING SUCCESSFUL</div>
			)}
			<form onSubmit={(event) => handleLogin(event)} className="login-form">
				<div style={{ textAlign: "center", marginBottom: "5px" }}>
					<h1>LOGIN</h1>
					<p>Welcome back money spender</p>
					{!login.userExists && <p style={{ color: "red" }}>user doesn't exist</p>}
				</div>
				<input pattern="\S(.*\S)?" required type="text" />
				<label>Username</label>
				{!login.correctPassword && <p style={{ color: "red" }}>WRONG PASSWORD INTRUDER!!!</p>}
				<input pattern="\S(.*\S)?" required type="password" />
				<label>Password</label>

				<button className="form-register-login-button" type="submit">
					Login
				</button>
			</form>
		</div>
	);
};
