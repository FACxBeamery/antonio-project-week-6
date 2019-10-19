import React from "react";
import Style from "./Board.style";
import Grid from "./Board/Grid";
import pDataStructure from "../utils/playerData";
import { getNasaAPOD, urltoBGStyle } from "../utils/getNasaPic.js";
import PlayerInfo from "./Board/Players";
import GridController from "./Board/GridController";

const playerIds = [1, 2];

const Board = ({ readyToStartGame, setReadyToStartGame, apod, setApod }) => {
	const [players, setPlayers] = React.useState();
	const [playersTurn, setPlayersTurn] = React.useState(0);
	const [startGame, setStartGame] = React.useState(false);

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

	React.useEffect(() => {
		if (players)
			setReadyToStartGame(
				players.p1.confirmed && players.p2.confirmed ? true : false
			);
	});

	const { infoStyle, flex5, boardStyle } = Style;
	let boardApodStyle = { ...boardStyle, ...apod };

	const mapIdsToPlayerPanel = playerIds.map((pId, i) => (
		<PlayerInfo
			key={i}
			index={i}
			pId={pId}
			players={players}
			setPlayers={setPlayers}
			myTurn={
				playersTurn === 0
					? undefined
					: pId === playersTurn
					? true
					: false
			}
		/>
	));

	const boardComponents = (
		<div style={boardApodStyle}>
			<div style={infoStyle}>{mapIdsToPlayerPanel}</div>
			<div style={flex5}>
				<GridController
					readyToStartGame={readyToStartGame}
					startGame={startGame}
					setStartGame={setStartGame}
					players={players}
					setPlayers={setPlayers}
					playersTurn={playersTurn}
					setPlayersTurn={setPlayersTurn}
				/>
			</div>
		</div>
	);

	return !apod || !players ? <h3>...Loading</h3> : boardComponents;
};

export default Board;
