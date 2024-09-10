import { ProductComponent } from "../components/ProductComponent/ProductComponent";
import { ProductType } from "../types/Product";
import "./page.css";

export const PhonesPage = ({ products }: { products: ProductType[] }) => {
	return (
		<div className="page">
			{/* typscript lacking functionality here cannot compare item by type like with classes e.g. (item instanceof Class) */}
			{products
				.filter((item) => item.type === "phone")
				.map((item) => (
					<ProductComponent key={item._id} item={item} />
				))}
		</div>
	);
};
