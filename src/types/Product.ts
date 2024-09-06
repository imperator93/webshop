export type Product = {
	image: string;
	name: string;
	price: string;
	rating: number;
	description: string;
	__id?: string | number;
	_v?: number;
};

export type Car = Product & {
	type: "car";
	model: string;
	year: number;
};

export type Computer = Product & {
	type: "computer";
	cpu: string;
	gpu: string;
};

export type Phone = Omit<Car, "type"> & {
	type: "phone";
};

export type ProductType = Car | Computer | Phone;
