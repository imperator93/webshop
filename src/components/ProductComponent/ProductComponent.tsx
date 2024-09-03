import { Car, Computer, Phone } from "../../types/Product";
import { Rating } from "../util-components/Rating";
import "./product.css";
import React from "react";

export const ProductComponent: React.FC<{ item: Car | Computer | Phone }> = ({
	item,
}) => {
	return (
		<div className="product-wrapper">
			<img className="product-image" src={item.image} />
			<div className="details-wrapper">
				<h2 className="product-name">{item.name}</h2>
				<p className="description">
					<strong>Description: </strong>
					{item.description}
				</p>
				{(() => {
					switch (item.type) {
						case "car":
							return (
								<>
									<p>
										<strong>Model: </strong>
										{item.model}
									</p>
									<p>
										<strong>Year: </strong>
										{item.year}
									</p>
								</>
							);
						case "computer":
							return (
								<>
									<p>
										<strong>CPU: </strong>
										{item.cpu}
									</p>
									<p>
										<strong>GPU: </strong>
										{item.gpu}
									</p>
								</>
							);
						case "phone":
							return (
								<>
									<p>
										<strong>Type: </strong>
										{item.type}
									</p>
									<p>
										<strong>Year: </strong>
										{item.year}
									</p>
								</>
							);
						default:
							return null;
					}
				})()}

				{}
				<p>
					<strong>Price: </strong>
					{item.price}
				</p>
				<div style={{ display: "flex", alignItems: "center", gap: "5px" }}>
					Rating: <Rating rating={item.rating} /> /5
				</div>
			</div>
		</div>
	);
};
