import { nasa_key } from "../token.js";

const urltoBGStyle = ({ url }) => ({ backgroundImage: `url(${url})` });

const checkResponse = (response) => {
	if (response.status !== 200) {
		console.log(`Error with the request! ${response.status}`);
		return;
	}
	return response.json();
};

const getNasaAPOD = () => {
	return fetch("https://api.nasa.gov/planetary/apod?api_key=" + nasa_key)
		.then(checkResponse)
		.catch((err) => {
			throw new Error(`fetch getNasaAPOD failed ${err}`);
		});
};

export { getNasaAPOD, urltoBGStyle };
