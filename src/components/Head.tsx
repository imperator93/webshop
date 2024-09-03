import { FaSearch } from "react-icons/fa";
import { SlLogin } from "react-icons/sl";
import "./head.css";
import { Link } from "react-router-dom";

export const Head = () => {
	return (
		<div className="head-wrapper">
			<Link style={{ textDecoration: "none", color: "black" }} to="/">
				<h1 className="title">Webshop</h1>
			</Link>
			<div className="search-input-and-button">
				<input placeholder="search shop..." className="search-input" />
				<button className="search-button">
					<FaSearch />
				</button>
			</div>

			<button className="register-login-button">
				<Link style={{ textDecoration: "none", color: "white" }} to="/login">
					LOGIN/REGISTER <SlLogin />
				</Link>
			</button>
		</div>
	);
};
