import "./login.css";

export const Login = () => {
	return (
		<div className="login-wrapper">
			<form className="sign-up-form">
				<div style={{ textAlign: "center", marginBottom: "5px" }}>
					<h1>REGISTER</h1>
					<p>Join our webshop and start spending that money</p>
				</div>

				<input pattern="\S(.*\S)?" required type="text" />
				<label>Username</label>

				<input
					pattern="\S(.*\S)?"
					required
					placeholder="@something.something"
					type="email"
				/>
				<label>E-mail</label>

				<input pattern="\S(.*\S)?" required type="password" />
				<label>Password</label>

				<button className="form-register-login-button" type="submit">
					Register
				</button>
			</form>
			<form className="login-form">
				<div style={{ textAlign: "center", marginBottom: "5px" }}>
					<h1>LOGIN</h1>
					<p>Welcome back money spender</p>
				</div>
				<input pattern="\S(.*\S)?" required type="text" />
				<label>Username</label>

				<input
					pattern="\S(.*\S)?"
					required
					placeholder="@something.something"
					type="email"
				/>
				<label>E-mail</label>

				<input pattern="\S(.*\S)?" required type="password" />
				<label>Password</label>

				<button className="form-register-login-button" type="submit">
					Login
				</button>
			</form>
		</div>
	);
};
