import React from "react";
import Style from "./Board.style";
import Grid from "./board/Grid";
import pDataStructure from "../utils/playerData";
import { getNasaAPOD, urltoBGStyle } from "../utils/getNasaPic.js";
import PlayerInfo from "./board/Players";

const Board = ({ apod, setApod }) => {
	const [rows] = React.useState(6);
	const [columns] = React.useState(7);
	const [board, setBoard] = React.useState();

	const [playerIds] = React.useState([1, 2]);
	const [players, setPlayers] = React.useState();

	React.useEffect(() => {
		getNasaAPOD().then((data) => {
			setApod(urltoBGStyle(data));
		});

		let tempPlayers = {};
		playerIds.map((pId) => {
			tempPlayers[`p${pId}`] = new pDataStructure(pId);
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
				{playerIds.map((pId, i) => {
					return (
						<PlayerInfo
							key={i}
							index={i}
							pId={pId}
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
