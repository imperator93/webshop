import { ProductComponent } from "../components/ProductComponent/ProductComponent";
import { ProductType } from "../types/Product";

import "./page.css";

export const HomePage = ({ products }: { products: ProductType[] }) => {
	return (
		<div className="page">
			{/* typscript lacking functionality here cannot compare item by type like with classes e.g. (item instance of Class) */}
			{products.map((item) => (
				<ProductComponent key={Math.random()} item={item} />
			))}
		</div>
	);
};
