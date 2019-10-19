import React from "react";
import Grid from "./Grid";

const GridController = ({
	readyToStartGame,
	startGame,
	setStartGame,
	players,
	setPlayers,
	playersTurn,
	setPlayersTurn
}) => {
	const [rows] = React.useState(6);
	const [columns] = React.useState(7);
	const [board, setBoard] = React.useState();

	React.useEffect(() => {
		setStartGame(false);
		setPlayersTurn(0);
	}, [
		players.p1.confirmed,
		players.p2.confirmed,
		setStartGame,
		setPlayersTurn
	]);

	React.useEffect(() => {
		if (startGame && !playersTurn)
			setPlayersTurn(Math.floor(Math.random() * 2) + 1);
	}, [startGame, playersTurn, setPlayersTurn]);

	const waitToBegin = <h1>Select your players</h1>;

	const createGrid = (
		<Grid
			rows={rows}
			columns={columns}
			board={board}
			setBoard={setBoard}
			playersTurn={playersTurn}
			setPlayersTurn={setPlayersTurn}
		/>
	);

	const handleClick = (e) => {
		setStartGame(true);
	};

	const beginButton = (
		<button id="readyToStartGame" type="click" onClick={handleClick}>
			Start Game!!
		</button>
	);

	console.log(`its player ${playersTurn}'s turn`);

	return !readyToStartGame
		? waitToBegin
		: !startGame
		? beginButton
		: createGrid;
};

export default GridController;
