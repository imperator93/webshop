import { Link } from "react-router-dom";
import { productArr } from "../test-inputs/productArr";
import "./sidebar.css";

export const SideBar = () => {
	return (
		<div className="sidebar-wrapper">
			<ul className="sidebar-list">
				<h2>
					<u>List of all items</u>
				</h2>
				{productArr.map((item) => (
					<Link className="sidebar-list-item" to={`/${item.type}s/${item.__id}`} key={Math.random()}>
						{item.name}
					</Link>
				))}
			</ul>
		</div>
	);
};
