import React from "react";
import Style from "./board-grid.css";
import Disc from "./disc.js";

const Row = ({ cells }) => {
	const { cellStyle } = Style;

	return (
		<tr>
			{cells.map((cell, i) => (
				<td key={i}>
					<div style={cellStyle}>
						<Disc value={cell} />
					</div>
				</td>
			))}
		</tr>
	);
};

export default Row;
