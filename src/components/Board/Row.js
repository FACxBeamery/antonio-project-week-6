import React from "react";
import Style from "./Row.style";
import Disc from "../Disc.js";

const Row = ({ cells }) => {
	const { cellStyle } = Style;

	const mapCellsToTD = cells.map((cell, i) => (
		<td key={i}>
			<div style={cellStyle}>
				<Disc value={cell} />
			</div>
		</td>
	));

	return <tr>{mapCellsToTD}</tr>;
};

export default Row;
