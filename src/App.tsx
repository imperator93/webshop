import { useEffect, useState } from "react";
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

//types
import { State } from "./redux/store";
// helpers

import "./style.css";
import { setProducts } from "./redux/slices/productsSlice";
import { ProductType } from "./types/Product";
import { setUser } from "./redux/slices/userSlice";
import { Millionaire } from "./millionaire/Millionaire";
import { WEBSHOP_URL } from "./constants/WEBSHOP_URL";
import { ServerOfflinePage } from "./pages/serverOfflinePage/ServerOfflinePage";
import { UserCart } from "./pages/user-cart/UserCart";

function App() {
	const user = useSelector((state: State) => state.user.user);
	const products = useSelector((state: State) => state.products.products);

	const [serverResponse, setServerResponse] = useState(false);

	useEffect(() => {
		fetch(`${WEBSHOP_URL}`)
			.then((response) => response.json())
			.then((data) => {
				if (data.flag) setServerResponse(true);
			});
	}, []);

	const dispatch = useDispatch();

	//search (replace this with fetch later)
	useEffect(() => {
		fetch(`${WEBSHOP_URL}/products`)
			.then((response) => response.json())
			.then((data) => {
				dispatch(setProducts(data.allProducts));
				sessionStorage.setItem(`${data.message}`, JSON.stringify(data.allProducts));
			})
			.catch((err) => console.log(err));
	}, [dispatch]);

	//log in user in session when reloading page
	useEffect(() => {
		const userFromSessionStorage = sessionStorage.getItem("user");
		if (userFromSessionStorage) dispatch(setUser(JSON.parse(userFromSessionStorage)));
	}, [dispatch]);

	const navigate = useNavigate();

	const handleSearch = (event?: React.FormEvent<HTMLFormElement>) => {
		event!.preventDefault();
		let inputValue = ((event!.target as HTMLFormElement)[0] as HTMLInputElement).value;
		navigate("/");
		const updatedProducts = (JSON.parse(sessionStorage.getItem("allProducts")!) as ProductType[]).filter((item) =>
			item.name.toLowerCase().includes(inputValue.toLowerCase())
		);
		if (updatedProducts.length == 0) navigate("*");

		dispatch(setProducts(updatedProducts));

		inputValue = "";
	};

	if (!serverResponse) return <ServerOfflinePage />;
	return (
		<div
			className="app"
			style={{
				height: "100vh",
				background: `URL(https://imgur.com/jHpVKMM.jpeg)`,
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

					{user && <Route path="/user-cart" element={<UserCart />} />}

					<Route path="/millionaire" element={<Millionaire />} />

					{!user && <Route path="/login" element={<Login />} />}

					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
