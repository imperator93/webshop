import * as PRODUCTS from "./Product";

export const isCar = (item: PRODUCTS.Product): item is PRODUCTS.Car => {
	return (item as PRODUCTS.Car).type == "car";
};

export const isComputer = (
	item: PRODUCTS.Product
): item is PRODUCTS.Computer => {
	return (item as PRODUCTS.Computer).type == "computer";
};

export const isPhone = (item: PRODUCTS.Product): item is PRODUCTS.Phone => {
	return (item as PRODUCTS.Phone).type == "phone";
};
