import { Routes, Route } from "react-router-dom";

import anotherBackground from "./assets/another-background.jpg";
//components
import { Navbar } from "./components/Navbar";
import { Head } from "./components/Head";
import { SideBar } from "./components/Sidebar";

//pages
import { HomePage } from "./pages/HomePage";
import { Login } from "./pages/Login/Login";
import { CarsPage } from "./pages/CarsPage";
import { ComputersPage } from "./pages/ComputersPage";
import { PhonesPage } from "./pages/PhonesPage";

import "./style.css";
import { NotFound } from "./pages/not-found-page/NotFoundPage";
import { ProductPage } from "./pages/product-page/ProductPage";

function App() {
	return (
		<div
			className="app"
			style={{
				background: `URL(${anotherBackground})`,
				//not working for some reason
				backgroundRepeat: "repeat-y",
			}}
		>
			<div className="head-navbar-wrapper">
				<Head />
				<Navbar />
			</div>

			<div className="main">
				<SideBar />
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/login" element={<Login />} />

					<Route path="/cars" element={<CarsPage />} />
					<Route path="/cars/test" element={<ProductPage />} />

					<Route path="/computers" element={<ComputersPage />} />

					<Route path="/phones" element={<PhonesPage />} />

					<Route path="/login" element={<Login />} />

					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
