import { Rating } from "../../components/util-components/Rating";
import "./product-page.css";

export const ProductPage = () => {
	return (
		<div className="product-page">
			<img className="product-page-image" />
			<div className="product-page-details">
				<h1 className="product-page-name">jaja</h1>
				<Rating rating={5} />
			</div>
		</div>
	);
};

export type Product = {
	image: string;
	name: string;
	price: string;
	rating: number;
	description: string;
	__id?: string | number;
	_v?: number;
};

export type Car = Product & {
	type: "car";
	model: string;
	year: number;
};
