import { useDispatch, useSelector } from "react-redux";
import { State } from "../redux/store";

import { Link } from "react-router-dom";

import "./sidebar.css";
import { setProducts } from "../redux/slices/productsSlice";
import { productArr } from "../test-inputs/productArr";

export const SideBar = () => {
	const products = useSelector((state: State) => state.products.products);
	const dispatch = useDispatch();
	return (
		<div className="sidebar-wrapper">
			<ul className="sidebar-list">
				<h2>
					<u>List of all items</u>
				</h2>
				{products.map((item) => (
					<Link
						onClick={() => dispatch(setProducts(productArr))}
						className="sidebar-list-item"
						to={`/${item.type}s/${item._id}`}
						key={Math.random()}
					>
						{item.name}
					</Link>
				))}
			</ul>
		</div>
	);
};
