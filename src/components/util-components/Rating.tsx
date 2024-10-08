import { CiStar } from "react-icons/ci";

import "./style.css";

export const Rating = ({ rating }: { rating: number }) => {
	return (
		<div style={{ display: "flex", gap: "2px" }}>
			{[...Array(rating)].map(() => (
				<div key={Math.random()} className="stars">
					<CiStar />
				</div>
			))}
		</div>
	);
};
