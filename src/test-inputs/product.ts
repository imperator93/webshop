import { Car, Computer, Phone } from "../types/Product";

const mazda3: Car = {
	type: "car",
	image: "https://i.imgur.com/gy9X93R.jpeg",
	name: "Mazda 3",
	description: "The worst fucking car in the world",
	year: 2009,
	price: "3.999,99 $",
	model: "3 re-design",
	rating: 1,
	comments: [],
	__id: 12345,
};

const audiA6: Car = {
	type: "car",
	image: "https://i.imgur.com/Bu2G9zP.jpeg",
	name: "Audi A6",
	description: "Pretty good, not worth the price",
	year: 2019,
	price: "31.499,99 $",
	model: "A6",
	rating: 5,
	comments: [],
	__id: 123456,
};

const alfaRomeoStelvio: Car = {
	type: "car",
	image: "https://i.imgur.com/JrGFyaX.jpeg",
	name: "Alfa Romeo Stelvio",
	description: "Don't like it really",
	year: 2018,
	price: "22.999,99 $",
	model: "Stelvio",
	rating: 4,
	comments: [],
	__id: 1234567,
};

const astonMartinDB: Car = {
	type: "car",
	image: "https://i.imgur.com/i5JjNLl.jpeg",
	name: "Aston Martin DB",
	description: "Looks nice but its for the rich fucks",
	year: 2020,
	price: "209.999,99 $",
	model: "DB",
	rating: 4,
	comments: [],
	__id: 12345678,
};

const lenovoLegion: Computer = {
	type: "computer",
	image: "https://i.imgur.com/IUY0vCR.jpeg",
	name: "Lenovo Legion 5",
	description: "Very nice laptop bla bla bla bla",
	price: "1.299,99 $",
	rating: 3,
	cpu: "I5 12400",
	gpu: "nVidia 4060 8gb",
	comments: [],
	__id: 123456789,
};

const samsungGalaxyA15: Phone = {
	type: "phone",
	image: "https://i.imgur.com/BzwqFPM.jpeg",
	name: "Samsung Galaxy A15",
	description: "Mobitel ko mobitel ništa posebno",
	price: "171,99 $",
	rating: 4,
	model: "A 15",
	year: 2023,
	comments: [],
	__id: 12345678910,
};

export { mazda3, audiA6, alfaRomeoStelvio, astonMartinDB, lenovoLegion, samsungGalaxyA15 };
