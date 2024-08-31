import { Routes, Route } from "react-router-dom";

import anotherBackground from "./assets/another-background.jpg";

import { Navbar } from "./components/Navbar";
import { Head } from "./components/Head";
import { SideBar } from "./components/Sidebar";

import { Home } from "./pages/Home";
import { Login } from "./components/Login/Login";

import "./style.css";

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
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
