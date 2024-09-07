import { Routes, Route, useNavigate } from "react-router-dom";

import anotherBackground from "./assets/another-background.jpg";
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

import "./style.css";
import { NotFound } from "./pages/not-found-page/NotFoundPage";
import { ProductPage } from "./pages/product-page/ProductPage";

// test inputs
import { productArr } from "./test-inputs/productArr";
import { useEffect, useState } from "react";
import { ProductType } from "./types/Product";
import { User } from "./types/User";

function App() {
	const [products, setProducts] = useState<ProductType[]>([]);
	const [user, setUser] = useState<User>();

	useEffect(() => setProducts(productArr), []);

	//search (replace this with fetch later)
	const navigate = useNavigate();
	const handleSearch = (event?: React.FormEvent<HTMLFormElement>) => {
		event!.preventDefault();
		navigate("/");
		const updatedProducts = productArr.filter((item) =>
			item.name
				.toLowerCase()
				.includes(((event!.target as HTMLFormElement)[0] as HTMLInputElement).value.toLocaleLowerCase())
		);

		setProducts(updatedProducts);
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
					<Route path="cars/:productID" element={<ProductPage products={products} />} />

					<Route path="/computers" element={<ComputersPage products={products} />} />
					<Route path="computers/:productID" element={<ProductPage products={products} />} />

					<Route path="/phones" element={<PhonesPage products={products} />} />
					<Route path="phones/:productID" element={<ProductPage products={products} />} />

					{!user && <Route path="/login" element={<Login setUser={setUser} />} />}

					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
