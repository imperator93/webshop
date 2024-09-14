import { useDispatch } from "react-redux";
import { ProductType } from "../../types/Product";
import { Rating } from "../util-components/Rating";
import "./product.css";
import { TypeOfProductUtil } from "../util-components/TypeOfProductUtil";
import { Link } from "react-router-dom";
import { setProducts } from "../../redux/slices/productsSlice";

export const ProductComponent = ({ item }: { item: ProductType }) => {
	const dispatch = useDispatch();
	return (
		<Link
			onClick={() => {
				dispatch(setProducts(JSON.parse(sessionStorage.getItem("allProducts")!)));
			}}
			to={`/${item.type}s/${item._id}`}
			className="product-wrapper"
		>
			<img className="product-image" src={item.image} />
			<div className="details-wrapper">
				<h2 className="product-name">{item.name}</h2>
				<p>
					<strong>Description: </strong>
					{item.description}
				</p>
				<TypeOfProductUtil item={item} />
				<p>
					<strong>Price: </strong>
					{item.price}
				</p>
				<div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
					Rating: <Rating rating={item.rating} /> /5
				</div>
			</div>
		</Link>
	);
};
