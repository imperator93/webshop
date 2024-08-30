import { productArr } from "../test-inputs/productArr";
import "./sidebar.css";

export const SideBar = () => {
	return (
		<div className="sidebar-wrapper">
			<ul>
				{productArr.map((item) => (
					<li>{item.name}</li>
				))}
			</ul>
		</div>
	);
};
