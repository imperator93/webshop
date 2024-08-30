import anotherBackground from "./assets/another-background.jpg";

import { Navbar } from "./components/Navbar";
import { Head } from "./components/Head";
import { SideBar } from "./components/Sidebar";

import { Home } from "./pages/Home";

import "./style.css";

function App() {
	return (
		<div
			className="app"
			style={{
				background: `URL(${anotherBackground})`,
			}}
		>
			<Head />
			<Navbar />
			<div className="main">
				<SideBar />
				<Home />
			</div>
		</div>
	);
}

export default App;
