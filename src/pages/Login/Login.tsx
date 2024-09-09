import { useState } from "react";
import { useDispatch } from "react-redux";
import { avatarArr } from "../../assets/avatarArr";

import { User } from "../../types/User";

import "./login.css";
import { setUser } from "../../redux/slices/userSlice";

export const Login = () => {
	const dispatch = useDispatch();

	const [register, setRegister] = useState<Record<string, boolean>>({
		userExists: false,
		registeringSuccessful: false,
	});
	//could have just written {_: bool} or just bool but this looks fancy
	const [login, setLogin] = useState<Pick<typeof register, "userExists">>({ userExists: false });

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
		const newUser: User = {
			username: ((event.target as HTMLFormElement)[0] as HTMLInputElement).value.toLowerCase(),
			password: ((event.target as HTMLFormElement)[1] as HTMLInputElement).value.toLowerCase(),
			avatar: findChecked(event),
		};
		console.log(newUser);
		setRegister({ ...register, userExists: false });

		fetch("http://localhost:3000/users", {
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

		const existingUserUsername = ((event.target as HTMLFormElement)[0] as HTMLInputElement).value;

		fetch(`http://localhost:3000/users/${existingUserUsername}`)
			.then((response) => (!response.ok ? console.log("bad request") : response.json()))
			.then((data) => {
				console.log(data.user);
				if (data.userInDatabase) {
					dispatch(setUser(data.user));
				} else setLogin({ ...login, userExists: true });
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

					<input pattern="\S(.*\S)?" minLength={3} maxLength={10} required type="text" />
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
					{login.userExists && <p style={{ color: "red" }}>user doesn't exist</p>}
				</div>
				<input pattern="\S(.*\S)?" required type="text" />
				<label>Username</label>

				<input pattern="\S(.*\S)?" required type="password" />
				<label>Password</label>

				<button className="form-register-login-button" type="submit">
					Login
				</button>
			</form>
		</div>
	);
};
