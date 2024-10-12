import { useSelector } from "react-redux";
import "./userCart.css";
import { State } from "../../redux/store";
import { ProductComponent } from "../../components/ProductComponent/ProductComponent";

export const UserCart = () => {
	const { user } = useSelector((state: State) => state.user);

	return (
		<div className="user-cart-container">
			<h1>{user!.username}</h1>
			<span>wants to buy:</span>
			<ul>
				{user?.cart &&
					user?.cart.map((item) => (
						<li className="user-cart-list" key={item.product._id}>
							<>
								<ProductComponent item={item.product} />
							</>
							<div>X{item.count}</div>
							<button>Remove ALL</button>
							<button>Remove One</button>
						</li>
					))}
			</ul>
		</div>
	);
};
