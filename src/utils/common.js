const checkResponse = (response) => {
	if (response.status !== 200) {
		console.log(`Error with the request! ${response.status}`);
		return;
	}
	return response.json();
};

export { checkResponse };
