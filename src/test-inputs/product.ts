import mazdaPic from "./../assets/cars/mazda-3.jpg";
import audiPic from "./../assets/cars/audi-a6.jpg";
import alfaRomeoPic from "./../assets/cars/alfa-romeo-stelvio.jpg";
import astonMartinPic from "./../assets/cars/aston-martin-db.jpg";
import lenovoLegion5 from "./../assets/computers/lenovo-legion-5.jpg";
import samsungGalaxyA15Pic from "./../assets/phones/samsung-galaxy-A15.jpg";

import { Car, Computer, Phone } from "../types/Product";

const mazda3: Car = {
	type: "car",
	image: mazdaPic,
	name: "Mazda 3",
	description: "The worst fucking car in the world",
	year: 2009,
	price: "3.999,99 $",
	model: "3 re-design",
	rating: 1,
};

const audiA6: Car = {
	type: "car",
	image: audiPic,
	name: "Audi A6",
	description: "Pretty good, not worth the price",
	year: 2019,
	price: "31.499,99 $",
	model: "A6",
	rating: 5,
};

const alfaRomeoStelvio: Car = {
	type: "car",
	image: alfaRomeoPic,
	name: "Alfa Romeo Stelvio",
	description: "Don't like it really",
	year: 2018,
	price: "22.999,99 $",
	model: "Stelvio",
	rating: 4,
};

const astonMartinDB: Car = {
	type: "car",
	image: astonMartinPic,
	name: "Aston Martin DB",
	description: "Looks nice but its for the rich fucks",
	year: 2020,
	price: "209.999,99 $",
	model: "DB",
	rating: 4,
};

const lenovoLegion: Computer = {
	type: "computer",
	image: lenovoLegion5,
	name: "Lenovo Legion 5",
	description: "Very nice laptop bla bla bla bla",
	price: "1.299,99 $",
	rating: 3,
	cpu: "I5 12400",
	gpu: "nVidia 4060 8gb",
};

const samsungGalaxyA15: Phone = {
	type: "phone",
	image: samsungGalaxyA15Pic,
	name: "Samsung Galaxy A15",
	description: "Mobitel ko mobitel ništa posebno",
	price: "171,99 $",
	rating: 4,
	model: "A 15",
	year: 2023,
};

export {
	mazda3,
	audiA6,
	alfaRomeoStelvio,
	astonMartinDB,
	lenovoLegion,
	samsungGalaxyA15,
};
