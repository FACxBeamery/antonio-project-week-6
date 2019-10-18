import React from "react";
import Style from "./Grid.style";
import Row from "./Row.js";

const zeros = (dimensions) => {
	var array = [];

	for (var i = 0; i < dimensions[0]; ++i) {
		array.push(dimensions.length === 1 ? 0 : zeros(dimensions.slice(1)));
	}

	return array;
};

const Grid = ({ rows, columns, board, setBoard }) => {
	React.useEffect(() => {
		setBoard(zeros([rows, columns]));
	}, []);

	const { table, flex4 } = Style;

	return !board ? (
		<p>loading...</p>
	) : (
		<div style={flex4}>
			<table style={table}>
				<thead></thead>
				<tbody>
					{board.map((row, i) => (
						<Row key={i} cells={row} />
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Grid;
