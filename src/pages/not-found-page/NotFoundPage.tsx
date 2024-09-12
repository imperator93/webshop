import { Link } from "react-router-dom";
import "./not-found-page.css";
import { useDispatch } from "react-redux";
import { setProducts } from "../../redux/slices/productsSlice";
export const NotFound = () => {
	const dispatch = useDispatch();
	return (
		<div className="not-found-page">
			<div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
				<h1 style={{ width: "100%", textAlign: "center" }}>NOTHING TO SEE HERE</h1>
				<Link
					onClick={() => dispatch(setProducts(JSON.parse(sessionStorage.getItem("allProducts")!)))}
					className="back-home-button"
					to="/"
				>
					Go Back To Home
				</Link>
			</div>
		</div>
	);
};
