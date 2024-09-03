import { ProductComponent } from "../components/ProductComponent/ProductComponent";
import { productArr } from "../test-inputs/productArr";
import * as typeGuards from "../types/typeGuards";
import "./page.css";

export const ComputersPage = () => {
	return (
		<div className="page">
			{/* typscript lacking functionality here cannot compare item by type like with classes e.g. (item instance of Class) */}
			{productArr.filter(typeGuards.isComputer).map((item) => (
				<ProductComponent key={Math.random()} item={item} />
			))}
		</div>
	);
};
