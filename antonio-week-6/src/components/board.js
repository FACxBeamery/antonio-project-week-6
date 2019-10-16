import React from "react";
import Style from "./board.css.js";
import { getNasaAPOD, urltoBGStyle } from "../utils/getNasaPic.js";

const Board = ({ apod, setApod }) => {
	React.useEffect(() => {
		getNasaAPOD().then((data) => {
			console.log(data);
			setApod(urltoBGStyle(data));
		});
	}, []);

	let style = { ...Style, ...apod };

	console.log(style);

	return !apod ? <h3>...Loading</h3> : <div style={style}></div>;
};

export default Board;
