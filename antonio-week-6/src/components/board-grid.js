import React from "react";
import Style from "./board-grid.css";
import Row from "./board-row.js";

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

	const { table } = Style;

	if (!board) return <p>loading...</p>;

	return (
		<div style={{ flex: 4 }}>
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
