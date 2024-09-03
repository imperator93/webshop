import { ProductComponent } from "../components/ProductComponent/ProductComponent";
import { productArr } from "../test-inputs/productArr";
import * as typeGuards from "../types/typeGuards";
import "./page.css";

export const PhonesPage = () => {
	return (
		<div className="page">
			{/* typscript lacking functionality here cannot compare item by type like with classes e.g. (item instance of Class) */}
			{productArr.filter(typeGuards.isPhone).map((item) => (
				<ProductComponent item={item} />
			))}
		</div>
	);
};
