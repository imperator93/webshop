import { Car, Product } from "../types/Product";
import { Rating } from "./util-components/Rating";
import "./product.css";

export const ProductComponent = ({ item }: { item: Product & Car }) => {
	return (
		<div className="product-wrapper">
			<img className="product-image" src={item.image} />
			<div className="details-wrapper">
				<h2 className="product-name">{item.name}</h2>
				<p className="description">
					<strong>Description: </strong>
					{item.description}
				</p>
				<p className="model">
					<strong>Model: </strong>
					{item.model}
				</p>
				<p>
					<strong>Year: </strong>
					{item.year}
				</p>
				<p>
					<strong>Price: </strong>
					{item.price}
				</p>
				<div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
					Rating: <Rating rating={item.rating} /> /5
				</div>
			</div>
		</div>
	);
};
