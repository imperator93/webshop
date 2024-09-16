import { useDispatch, useSelector } from "react-redux";
import { setUser } from "../redux/slices/userSlice";
import { State } from "../redux/store";

import { Link } from "react-router-dom";

import { FaSearch } from "react-icons/fa";
import { SlLogin } from "react-icons/sl";

import { setProducts } from "../redux/slices/productsSlice";

import "./head.css";

export const Head = ({ handleSearch }: { handleSearch: (event: React.FormEvent<HTMLFormElement>) => void }) => {
	const user = useSelector((state: State) => state.user.user);
	const dispatch = useDispatch();
	return (
		<div className="head-wrapper">
			<Link
				onClick={() => dispatch(setProducts(JSON.parse(sessionStorage.getItem("allProducts")!)))}
				style={{ textDecoration: "none", color: "black" }}
				to="/"
			>
				<h1 className="title">Webshop</h1>
			</Link>
			<form onSubmit={(event) => handleSearch(event)} className="search-input-and-button">
				<input
					onFocus={() => dispatch(setProducts(JSON.parse(sessionStorage.getItem("allProducts")!)))}
					placeholder="search shop..."
					className="search-input"
				/>
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
					<button
						className="log-out-button"
						onClick={() => {
							sessionStorage.removeItem("user");
							dispatch(setUser(undefined));
						}}
					>
						LOG OUT
					</button>
				</>
			)}
		</div>
	);
};
