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
	model: string;
	year: number;
};

export type Computer = Product & {
	cpu: string;
	gpu: string;
};

export type Phone = Car;
