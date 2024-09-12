export const getDate = () => {
	const time = new Date(Date.now());
	const date = `${time.getHours()}:${time.getMinutes()} on ${time.getDate()} ${time.getFullYear()}`;
	return date;
};
