import { State } from "../../redux/store";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { TypeOfProductUtil } from "../../components/ProductComponent/TypeOfProductUtil";
import { Rating } from "../../components/util-components/Rating";
import { Comments } from "../../components/Comments/Comments";

import "./product-page.css";

export const ProductPage = () => {
	const products = useSelector((state: State) => state.products.products);

	const { productID } = useParams<string>();

	//for some reason the find method doesn't want to work I'm probably typing something wrong
	const item = products.filter((item) => item._id == productID);

	//NEED FIX HERE
	// useEffect(() => {
	// 	if (!item[0]) navigate("*");
	// }, [item, navigate]);

	if (item[0])
		return (
			<div className="product-page">
				<img src={item[0].image} className="product-page-image" />
				<div className="product-page-details">
					<h1 className="product-page-name">{item[0].name}</h1>
					<strong>Rating: </strong> <Rating rating={5} />
					<p>
						<strong>Description: </strong>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit dolor
						cupiditate explicabo, atque ex impedit mollitia doloremque placeat, sequi consectetur iusto, tenetur porro?
						Odio omnis possimus, animi corporis quam soluta.
					</p>
					<TypeOfProductUtil item={item[0]} />
					<h3>PRICE: {item[0].price}</h3>
					<Comments product={item[0]} />
				</div>
			</div>
		);
};
