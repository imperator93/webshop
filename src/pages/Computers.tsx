import { ProductComponent } from "../components/ProductComponent";
import { productArr } from "../test-inputs/productArr";
export const Coputers = () => {
	return (
		<div className="home">
			{productArr.map((item) => (
				<ProductComponent item={item} />
			))}
		</div>
	);
};
