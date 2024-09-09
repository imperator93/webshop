import { FaSearch } from "react-icons/fa";
import { SlLogin } from "react-icons/sl";
import "./head.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/store";
import { setUser } from "../redux/slices/userSlice";

export const Head = ({ handleSearch }: { handleSearch: (event: React.FormEvent<HTMLFormElement>) => void }) => {
	const user = useSelector((state: State) => state.user.user);
	const dispatch = useDispatch();

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

			{!user ? (
				<button className="register-login-button">
					<Link style={{ textDecoration: "none", color: "white" }} to="/login">
						LOGIN/REGISTER <SlLogin />
					</Link>
				</button>
			) : (
				<>
					<h3 style={{ fontWeight: "100", backdropFilter: "blur(5px)" }}>
						Currently logged in as: <strong>{user.username}</strong>
					</h3>
					<button onClick={() => dispatch(setUser(undefined))}>LOG OUT</button>
				</>
			)}
		</div>
	);
};
