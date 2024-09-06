import { FaSearch } from "react-icons/fa";
import { SlLogin } from "react-icons/sl";
import "./head.css";
import { Link } from "react-router-dom";

export const Head = ({ handleSearch }: { handleSearch: (event: React.FormEvent<HTMLFormElement>) => void }) => {
	return (
		<div className="head-wrapper">
			<Link style={{ textDecoration: "none", color: "black" }} to="/">
				<h1 className="title">Webshop</h1>
			</Link>
			<form onSubmit={(event) => handleSearch(event)} className="search-input-and-button">
				<input placeholder="search shop..." className="search-input" />
				<button type="submit" className="search-button">
					<FaSearch />
				</button>
			</form>

			<button className="register-login-button">
				<Link style={{ textDecoration: "none", color: "white" }} to="/login">
					LOGIN/REGISTER <SlLogin />
				</Link>
			</button>
		</div>
	);
};
