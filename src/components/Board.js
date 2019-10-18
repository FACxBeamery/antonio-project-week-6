import React from "react";
import Style from "./Board.style";
import Grid from "./Board/Grid";
import pDataStructure from "../utils/playerData";
import { getNasaAPOD, urltoBGStyle } from "../utils/getNasaPic.js";
import PlayerInfo from "./Board/Players";

const playerIds = [1, 2];

const Board = ({ apod, setApod }) => {
	const [rows] = React.useState(6);
	const [columns] = React.useState(7);
	const [board, setBoard] = React.useState();

	const [players, setPlayers] = React.useState();

	React.useEffect(() => {
		getNasaAPOD().then((data) => {
			setApod(urltoBGStyle(data));
		});

		let tempPlayers = {};
		playerIds.map(
			(pId) => (tempPlayers[`p${pId}`] = new pDataStructure(pId))
		);
		setPlayers(tempPlayers);
	}, [setApod]);

	const { infoStyle, boardStyle } = Style;
	let boardApodStyle = { ...boardStyle, ...apod };

	const mapIdsToPlayerPanel = playerIds.map((pId, i) => (
		<PlayerInfo
			key={i}
			index={i}
			pId={pId}
			players={players}
			setPlayers={setPlayers}
		/>
	));

	const boardComponents = (
		<div style={boardApodStyle}>
			<div style={infoStyle}>{mapIdsToPlayerPanel}</div>
			<Grid
				rows={rows}
				columns={columns}
				board={board}
				setBoard={setBoard}
			/>
		</div>
	);

	return !apod || !players ? <h3>...Loading</h3> : boardComponents;
};

export default Board;
