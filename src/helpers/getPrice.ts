export const getPrice = (str: string, count: number) => {
	let word = "";
	let num = 0;
	for (let i = 0; i < str.length; i++) {
		if (!isNaN(parseInt(str[i]))) word += str[i];
		if (i == str.length - 5) word += ".";
	}
	num = parseFloat(word) * count;
	word = `${num}`;
	let correctedWord = "";
	for (let i = 0, j; i < word.length; i++) {
		correctedWord += word[i];
		if (word[i] == ".") {
			j = i + 2;
			word.slice(j, word.length - 1);
		}
		if (i == j) break;
	}

	return correctedWord + " $";
};
