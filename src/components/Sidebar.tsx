import { useSelector } from "react-redux";
import { State } from "../redux/store";

import { Link } from "react-router-dom";

import "./sidebar.css";

export const SideBar = () => {
	const products = useSelector((state: State) => state.products.products);
	return (
		<div className="sidebar-wrapper">
			<ul className="sidebar-list">
				<h2>
					<u>List of all items</u>
				</h2>
				{products.map((item) => (
					<Link className="sidebar-list-item" to={`/${item.type}s/${item.__id}`} key={Math.random()}>
						{item.name}
					</Link>
				))}
			</ul>
		</div>
	);
};
