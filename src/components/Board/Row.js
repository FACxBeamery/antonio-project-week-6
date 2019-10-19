import React from "react";
import Style from "./Row.style";
import Disc from "../Disc.js";

import { toggleTurn } from "../../utils/gameHelpers";

const Row = ({ cells, playersTurn, setPlayersTurn, board, setBoard }) => {
	const { cellStyle } = Style;

	const placeDisc = (colid) => {
		let lowestRow;
		let colFull = false;

		board.some((row, i) => {
			lowestRow = !row[colid] ? i : lowestRow;

			if (lowestRow === undefined) {
				colFull = true;
				return true;
			}

			if (row[colid]) return true;
			return false;
		});

		if (!colFull) {
			let tempBoard = board;
			tempBoard[lowestRow][colid] = playersTurn;

			setBoard(tempBoard);
			return true;
		} else {
			return false;
		}
	};

	const handleClick = (colid) => {
		let isSuccess = placeDisc(colid);

		if (isSuccess) setPlayersTurn(toggleTurn(playersTurn));
	};

	const mapCellsToTD = cells.map((cell, i) => (
		<td key={i} onClick={() => handleClick(i)}>
			<div style={cellStyle}>
				<Disc value={cell} />
			</div>
		</td>
	));

	return <tr>{mapCellsToTD}</tr>;
};

export default Row;
