import { Link } from "react-router-dom";

import "./navbar.css";

export const Navbar = () => {
	const categories = ["Home", "Cars", "Computers", "Phones"];
	return (
		<div className="navbar-wrapper">
			<ul className="nav-list">
				{categories.map((item) => (
					<li key={Math.random()}>
						<Link
							style={{ textDecoration: "none", color: "black" }}
							to={item === "Home" ? "/" : `/${item.toLocaleLowerCase()}`}
						>
							{item}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};
