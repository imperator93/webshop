import { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
//components
import { Navbar } from "./components/Navbar";
import { Head } from "./components/Head";
import { SideBar } from "./components/Sidebar";

//pages
import { HomePage } from "./pages/HomePage";
import { CarsPage } from "./pages/CarsPage";
import { ComputersPage } from "./pages/ComputersPage";
import { PhonesPage } from "./pages/PhonesPage";
import { Login } from "./pages/Login/Login";
import { ProductPage } from "./pages/product-page/ProductPage";
import { NotFound } from "./pages/not-found-page/NotFoundPage";

// test inputs
import { productArr } from "./test-inputs/productArr";

//types
import { State } from "./redux/store";

import anotherBackground from "./assets/another-background.jpg";
import "./style.css";
import { setProducts } from "./redux/slices/productsSlice";

function App() {
	const user = useSelector((state: State) => state.user.user);
	const products = useSelector((state: State) => state.products.products);
	const dispatch = useDispatch();

	//search (replace this with fetch later)
	useEffect(() => {
		dispatch(setProducts(productArr));
	}, [dispatch]);

	const navigate = useNavigate();

	const handleSearch = (event?: React.FormEvent<HTMLFormElement>) => {
		event!.preventDefault();
		let inputValue = ((event!.target as HTMLFormElement)[0] as HTMLInputElement).value;
		navigate("/");
		const updatedProducts = productArr.filter((item) => item.name.toLowerCase().includes(inputValue.toLowerCase()));
		if (updatedProducts.length == 0) navigate("*");

		dispatch(setProducts(updatedProducts));

		inputValue = "";
	};

	return (
		<div
			className="app"
			style={{
				height: "100vh",
				background: `URL(${anotherBackground})`,
				//not working for some reason
				backgroundRepeat: "repeat-y",
			}}
		>
			<div className="head-navbar-wrapper">
				<Head handleSearch={handleSearch} />
				<Navbar />
			</div>

			<div className="main">
				<SideBar />

				<Routes>
					<Route path="/" element={<HomePage products={products} />} />

					<Route path="/cars" element={<CarsPage products={products} />} />
					<Route path="cars/:productID" element={<ProductPage />} />

					<Route path="/computers" element={<ComputersPage products={products} />} />
					<Route path="computers/:productID" element={<ProductPage />} />

					<Route path="/phones" element={<PhonesPage products={products} />} />
					<Route path="phones/:productID" element={<ProductPage />} />

					{!user && <Route path="/login" element={<Login />} />}

					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
