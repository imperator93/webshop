import "./navbar.css";

export const Navbar = () => {
	const categories = ["All", "Cars", "Computers", "Phones"];
	return (
		<div className="navbar-wrapper">
			<ul className="nav-list">
				{categories.map((item) => (
					<li key={Math.random()}>{item}</li>
				))}
			</ul>
		</div>
	);
};
