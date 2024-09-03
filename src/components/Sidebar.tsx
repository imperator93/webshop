import { productArr } from "../test-inputs/productArr";
import "./sidebar.css";

export const SideBar = () => {
	return (
		<div className="sidebar-wrapper">
			<ul>
				<h2>
					<u>List of items</u>
				</h2>
				{productArr.map((item) => (
					<li key={Math.random()}>{item.name}</li>
				))}
			</ul>
		</div>
	);
};
