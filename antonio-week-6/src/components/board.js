import React from "react";
import Style from "./board.css.js";
import Grid from "./board/grid";
import { getNasaAPOD, urltoBGStyle } from "../utils/getNasaPic.js";
import PlayerInfo from "./board/players";

const Board = ({ apod, setApod }) => {
	const [rows] = React.useState(6);
	const [columns] = React.useState(7);
	const [board, setBoard] = React.useState();

	function pDataStructure(id) {
		this.id = id;
		this.githubUser = "";
		this.score = 0;
	}

	const [playerIds] = React.useState([1, 2]);
	const [players, setPlayers] = React.useState();

	React.useEffect(() => {
		getNasaAPOD().then((data) => {
			setApod(urltoBGStyle(data));
		});

		let tempPlayers = {};
		playerIds.map((id) => {
			tempPlayers[`p${id}`] = new pDataStructure(id);
		});
		setPlayers(tempPlayers);
	}, []);

	const { infoStyle, boardStyle } = Style;
	let boardApodStyle = { ...boardStyle, ...apod };

	return !apod || !players ? (
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
							players={players}
							setPlayers={setPlayers}
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
