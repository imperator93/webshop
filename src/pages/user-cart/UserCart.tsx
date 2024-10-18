import { useDispatch, useSelector } from "react-redux";
import { deleteAllProductsOfType, removeOneProductOfType } from "../../redux/slices/userSlice";
import { State } from "../../redux/store";

import { ProductComponent } from "../../components/ProductComponent/ProductComponent";

import { getPrice } from "../../helpers/getPrice";

import "./userCart.css";

export const UserCart = () => {
	const { user } = useSelector((state: State) => state.user);
	const dispatch = useDispatch();
	const handleDeleteFromCart = (event: React.BaseSyntheticEvent) => {
		if (event.target.innerText == "Remove ALL") dispatch(deleteAllProductsOfType({ id: event.target.id }));
		else {
			dispatch(removeOneProductOfType({ id: event.target.id }));
		}
	};

	return (
		<div className="user-cart-container">
			<h1>{user!.username}</h1>
			<span>wants to buy:</span>
			<ul>
				{user?.cart.length != 0 &&
					user?.cart.map((item) => (
						<li className="user-cart-list" key={item.product._id}>
							<ProductComponent item={item.product} />

							<h3>X{item.count}</h3>
							<span>
								<strong>TOTAL PRICE:</strong> {getPrice(item.product?.price, 44)}
							</span>
							<button id={item.product._id} onClick={(event) => handleDeleteFromCart(event)}>
								Remove ALL
							</button>
							<button id={item.product._id} onClick={(event) => handleDeleteFromCart(event)}>
								Remove One
							</button>
						</li>
					))}
			</ul>
		</div>
	);
};
