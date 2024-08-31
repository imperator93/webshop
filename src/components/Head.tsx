import { FaSearch } from "react-icons/fa";
import { SlLogin } from "react-icons/sl";
import "./head.css";

export const Head = () => {
	return (
		<div className="head-wrapper">
			<h1 className="title">Webshop</h1>
			<div className="search-input-and-button">
				<input className="search-input" />
				<button className="search-button">
					<FaSearch />
				</button>
			</div>

			<button className="register-login-button">
				LOGIN/REGISTER <SlLogin />
			</button>
		</div>
	);
};
