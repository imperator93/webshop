import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";
import { setProducts } from "../redux/slices/productsSlice";
//testInputs

import "./navbar.css";

export const Navbar = () => {
	const categories = ["Home", "Cars", "Computers", "Phones"];
	const dispatch = useDispatch();
	return (
		<div className="navbar-wrapper">
			<ul className="nav-list">
				{categories.map((item) => (
					<li key={Math.random()}>
						<Link
							onClick={() => {
								dispatch(setProducts(JSON.parse(sessionStorage.getItem("allProducts")!)));
							}}
							style={{ textDecoration: "none", color: "black" }}
							to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
						>
							{item}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
