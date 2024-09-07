import { useParams, useNavigate } from "react-router-dom";
import { TypeOfProductUtil } from "../../components/ProductComponent/TypeOfProductUtil";
import { Rating } from "../../components/util-components/Rating";
import { ProductType } from "../../types/Product";
import "./product-page.css";
import { Comments } from "../../components/Comments/Comments";

export const ProductPage = ({ products }: { products: ProductType[] }) => {
	const { productID } = useParams<string>();
	const navigate = useNavigate();

	//for some reason the find method doesn't want to work I'm probably typing something wrong
	const item = products.filter((item) => item.__id == productID);

	if (!item[0]) navigate("*");

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
					<h3>
						PRICE: {item[0].price}
						<Comments product={item[0]} />
					</h3>
				</div>
			</div>
		);
};
