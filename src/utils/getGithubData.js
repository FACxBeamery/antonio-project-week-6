import { github_key } from "../token.js";
import { checkResponse } from "./common.js";

const getGithubData = (username) => {
	return fetch(
		`https://api.github.com/users/${username}?access_token=${github_key}`
	)
		.then(checkResponse)
		.catch((err) => {
			throw new Error(`fetch getUserData failed ${err}`);
		});
};

export { getGithubData };
