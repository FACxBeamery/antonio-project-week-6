import React from "react";
import Style from "./Disc.style";

const Disc = ({ value }) => {
	const { whiteDisc, redDisc, yellowDisc } = { ...Style };
	const valueToColour = {
		0: whiteDisc,
		1: redDisc,
		2: yellowDisc
	};

	return <div style={valueToColour[value]}></div>;
};

export default Disc;
