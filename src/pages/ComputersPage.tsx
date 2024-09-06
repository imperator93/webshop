import { ProductComponent } from "../components/ProductComponent/ProductComponent";
import { ProductType } from "../types/Product";
import "./page.css";

export const ComputersPage = ({ products }: { products: ProductType[] }) => {
	return (
		<div className="page">
			{/* typscript lacking functionality here cannot compare item by type like with classes e.g. (item instanceof Class) */}
			{products
				.filter((item) => item.type === "computer")
				.map((item) => (
					<ProductComponent key={Math.random()} item={item} />
				))}
		</div>
	);
};
