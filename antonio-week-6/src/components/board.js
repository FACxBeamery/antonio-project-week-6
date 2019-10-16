import React from "react";
import Style from "./board.css.js";
import Grid from "./board-grid";
import { getNasaAPOD, urltoBGStyle } from "../utils/getNasaPic.js";
import PlayerInfo from "./board-players";

const Board = ({ apod, setApod }) => {
	const [rows] = React.useState(6);
	const [columns] = React.useState(7);
	const [board, setBoard] = React.useState();

	const [playerIds] = React.useState([1, 2]);

	const [p1Data, setP1Data] = React.useState({
		githubUser: ""
	});
	const [p2Data, setP2Data] = React.useState({
		githubUser: ""
	});

	const players = {
		p1: { data: p1Data, setData: setP1Data },
		p2: { data: p2Data, setData: setP2Data }
	};

	React.useEffect(() => {
		getNasaAPOD().then((data) => {
			setApod(urltoBGStyle(data));
		});
	}, []);

	const { infoStyle, boardStyle } = Style;
	let boardApodStyle = { ...boardStyle, ...apod };

	return !apod ? (
		<h3>...Loading</h3>
	) : (
		<div style={boardApodStyle}>
			<div style={infoStyle}>
				{playerIds.map((id, i) => {
					return (
						<PlayerInfo
							key={i}
							index={i}
							id={id}
							playerData={players["p" + id].data}
							setPlayerData={players["p" + id].setData}
						/>
					);
				})}
			</div>
			<Grid
				rows={rows}
				columns={columns}
				board={board}
				setBoard={setBoard}
			/>
		</div>
	);
};

export default Board;
