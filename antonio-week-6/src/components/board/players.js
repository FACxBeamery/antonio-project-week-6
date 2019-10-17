import React from "react";
import Style from "./players.css";
import { getGithubData } from "../../utils/getGithubData.js";

const PlayerInfo = ({ id, index, players, setPlayers }) => {
	const p = `p${id}`;
	const playerData = players[p];

	const handleChange = (event) => {
		setPlayers({
			...players,
			[p]: { ...playerData, githubUser: event.target.value }
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		document.getElementById(`p${id}_fieldset`).disabled = true;

		let user = document.getElementById(`p${id}_user`).value;

		getGithubData(user).then((data) =>
			setPlayers({
				...players,
				[p]: {
					...playerData,
					avatar_url: data.avatar_url,
					name: data.name
				}
			})
		);
	};

	return (
		<div style={Style}>
			<h3>Player {id}</h3>
			<form>
				<fieldset id={`p${id}_fieldset`} style={Style.fieldset}>
					<input
						id={`p${id}_user`}
						value={playerData.githubUser}
						onSubmit={handleSubmit}
						onChange={handleChange}
						placeholder="Enter GitHub Username"
					/>
					<button onClick={handleSubmit}>Find</button>
				</fieldset>
			</form>
		</div>
	);
};

export default PlayerInfo;
