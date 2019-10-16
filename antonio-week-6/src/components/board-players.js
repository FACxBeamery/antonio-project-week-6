import React from "react";
import Style from "./board-players.css";

const PlayerInfo = ({ id, index, playerData, setPlayerData }) => {
	const handleSubmit = (event) => {
		setPlayerData({ githubUser: event.target.value });
	};

	return (
		<div style={Style}>
			<h3>Player {id}</h3>
			<form>
				<input value={playerData.githubUser} onChange={handleSubmit} />
			</form>
		</div>
	);
};

export default PlayerInfo;
