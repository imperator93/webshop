import { ProductComponent } from "../components/ProductComponent";
import { productArr } from "../test-inputs/productArr";
import "./home.css";

export const Home = () => {
	return (
		<div className="home">
			{productArr.map((item) => (
				<ProductComponent item={item} />
			))}
		</div>
	);
};
