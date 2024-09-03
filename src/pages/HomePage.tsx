import { ProductComponent } from "../components/ProductComponent/ProductComponent";
import { productArr } from "../test-inputs/productArr";

import "./page.css";

export const HomePage = () => {
	return (
		<div className="page">
			{/* typscript lacking functionality here cannot compare item by type like with classes e.g. (item instance of Class) */}
			{productArr.map((item) => (
				<ProductComponent key={Math.random()} item={item} />
			))}
		</div>
	);
};
