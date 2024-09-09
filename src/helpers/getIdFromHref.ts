export const getIdFromHref = (str: string) => {
	let word = "";
	for (let i = str.length - 1; str[i] != "/"; i--) {
		word += str[i];
	}
	return word.split("").reverse().join("");
};
