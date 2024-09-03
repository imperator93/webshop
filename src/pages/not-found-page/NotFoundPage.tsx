import { Link } from "react-router-dom";
import "./not-found-page.css";
export const NotFound = () => {
	return (
		<div className="not-found-page">
			<div
				style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
			>
				<h1 style={{ width: "100%", textAlign: "center" }}>
					NOTHING TO SEE HERE
				</h1>
				<Link className="back-home-button" to="/">
					Go Back To Home
				</Link>
			</div>
		</div>
	);
};
