import { State } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { addProductToCart, incrementExistingItemCount } from "../../redux/slices/userSlice";

import { TypeOfProductUtil } from "../../components/util-components/TypeOfProductUtil";
import { Rating } from "../../components/util-components/Rating";
import { Comments } from "../../components/Comments/Comments";

import { WEBSHOP_URL } from "../../constants/WEBSHOP_URL";

import "./product-page.css";

export const ProductPage = () => {
	const products = useSelector((state: State) => state.products.products);
	const { user } = useSelector((state: State) => state.user);
	const [itemQuantity, setItemQuantity] = useState(0);
	const dispatch = useDispatch();

	const { productID } = useParams<string>();

	const item = products.find((item) => item._id == productID);

	//NEED FIX HERE
	// useEffect(() => {
	// 	if (!item[0]) navigate("*");
	// }, [item, navigate]);

	const handleAddToCartAccept = () => {
		const itemAlreadyInCart = user!.cart.find((thing) => thing.product._id == item?._id);
		if (itemAlreadyInCart) {
			dispatch(incrementExistingItemCount({ itemId: itemAlreadyInCart.product._id, count: itemQuantity }));
			fetch(`${WEBSHOP_URL}/users/${user?._id}/user-cart`, {
				method: "PUT",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({ count: itemQuantity }),
			})
				.then((response) => response.json())
				.then((data) => {
					sessionStorage.removeItem("user");
					sessionStorage.setItem("user", JSON.stringify(user));

					console.log(data);
				});
		} else {
			dispatch(addProductToCart({ product: item!, count: itemQuantity }));

			fetch(WEBSHOP_URL + `/users/${user?._id}/user-cart`, {
				method: "POST",
				headers: {
					"content-type": "application/json",
				},
				body: JSON.stringify({ product: item, count: itemQuantity }),
			})
				.then((response) => response.json())
				.then((data) => {
					sessionStorage.removeItem("user");
					sessionStorage.setItem("user", JSON.stringify(user));
					console.log(data);
				});
		}
	};
	if (item)
		return (
			<div className="product-page">
				<img src={item.image} className="product-page-image" />
				<div className="product-page-details">
					<h1 className="product-page-name">{item.name}</h1>
					<strong>Rating: </strong> <Rating rating={5} />
					<p>
						<strong>Description: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolor
						cupiditate explicabo, atque ex impedit mollitia doloremque placeat, sequi consectetur iusto, tenetur porro?
						Odio omnis possimus, animi corporis quam soluta.
					</p>
					<TypeOfProductUtil item={item} />
					<h3>PRICE: {item.price}</h3>
					{user != null && (
						<div className="buy-wrapper">
							<p>Add to cart: </p>
							<button
								onMouseDown={() => {}}
								onClick={() => {
									if (itemQuantity != 0) setItemQuantity((prev) => prev - 1);
								}}
								className="add-remove-item-to-cart-button"
							>
								-
							</button>

							{itemQuantity}
							<button onClick={() => setItemQuantity((prev) => prev + 1)} className="add-remove-item-to-cart-button">
								+
							</button>
							<button disabled={itemQuantity == 0} onClick={() => handleAddToCartAccept()}>
								ACCEPT
							</button>
						</div>
					)}
					<Comments product={item} />
				</div>
			</div>
		);
};
