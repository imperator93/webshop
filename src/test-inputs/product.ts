import mazdaPic from "./../assets/cars/mazda-3.jpg";
import audiPic from "./../assets/cars/audi-a6.jpg";
import alfaRomeoPic from "./../assets/cars/alfa-romeo-stelvio.jpg";
import astonMartinPic from "./../assets/cars/aston-martin-db.jpg";

import { Car } from "../types/Product";

const mazda3: Car = {
	image: mazdaPic,
	name: "Mazda 3",
	description: "The worst fucking car in the world",
	year: 2009,
	price: "3.999,99 $",
	model: "3 re-design",
	rating: 1,
};

const audiA6: Car = {
	image: audiPic,
	name: "Audi A6",
	description: "Pretty good, not worth the price",
	year: 2019,
	price: "31.499,99 $",
	model: "A6",
	rating: 5,
};

const alfaRomeoStelvio: Car = {
	image: alfaRomeoPic,
	name: "Alfa Romeo Stelvio",
	description: "Don't like it really",
	year: 2018,
	price: "22.999,99 $",
	model: "Stelvio",
	rating: 4,
};

const astonMartinDB: Car = {
	image: astonMartinPic,
	name: "Aston Martin DB",
	description: "Looks nice but its for the rich fucks",
	year: 2020,
	price: "209.999,99 $",
	model: "DB",
	rating: 4,
};
export { mazda3, audiA6, alfaRomeoStelvio, astonMartinDB };
