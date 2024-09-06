import { Car, Computer, Phone } from "../../types/Product";

export const TypeOfProductUtil = ({ item }: { item: Car | Computer | Phone }) => {
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
						<strong>Model: </strong>
						{item.model}
					</p>
					<p>
						<strong>Year: </strong>
						{item.year}
					</p>
				</>
			);
		default:
			return <></>;
	}
};
