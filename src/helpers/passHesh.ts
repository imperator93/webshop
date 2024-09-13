export const passHesh = (str: string) => {
	let encryptedPass = "";
	for (let i = 0; i < str.length; i++) {
		encryptedPass += (str[i].charCodeAt(0) + 10).toString() + "|";
	}
	return encryptedPass;
};
