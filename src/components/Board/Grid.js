import React from "react";
import Style from "./Grid.style";
import Row from "./Row.js";

const create2dZeros = (dimensions) => {
	const onlyOne = dimensions.length === 1;

	var array = [];

	for (var i = 0; i < dimensions[0]; ++i) {
		array.push(onlyOne ? 0 : create2dZeros(dimensions.slice(1)));
	}

	return array;
};

const Grid = ({
	rows,
	columns,
	board,
	setBoard,
	setStartGame,
	playersTurn,
	setPlayersTurn,
	setWinnerId
}) => {
	React.useEffect(() => {
		setBoard(create2dZeros([rows, columns]));
	}, [columns, rows, setBoard]);

	const { table } = Style;

	return !board ? (
		<p>loading...</p>
	) : (
		<table style={table}>
			<thead></thead>
			<tbody>
				{board.map((row, i) => (
					<Row
						key={i}
						cells={row}
						playersTurn={playersTurn}
						setPlayersTurn={setPlayersTurn}
						board={board}
						setBoard={setBoard}
						setStartGame={setStartGame}
						setWinnerId={setWinnerId}
					/>
				))}
			</tbody>
		</table>
	);
};

export default Grid;
