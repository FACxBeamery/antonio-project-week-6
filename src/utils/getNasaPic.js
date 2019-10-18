import { nasa_key } from "../token.js";
import { checkResponse } from "./common.js";

const urltoBGStyle = ({ url }) => ({ backgroundImage: `url(${url})` });

const getNasaAPOD = () => {
	return fetch("https://api.nasa.gov/planetary/apod?api_key=" + nasa_key)
		.then(checkResponse)
		.catch((err) => {
			throw new Error(`fetch getNasaAPOD failed ${err}`);
		});
};

export { getNasaAPOD, urltoBGStyle };
