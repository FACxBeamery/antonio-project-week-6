import React from "react";
import Style from "./Disc.style";
import cssStyle from "./Disc.module.css";

const Disc = ({ value }) => {
	const { whiteDisc, redDisc, yellowDisc } = { ...Style };
	const valueToColour = {
		0: whiteDisc,
		1: redDisc,
		2: yellowDisc
	};

	return <div className={cssStyle.moon} style={valueToColour[value]}></div>;
};

export default Disc;
