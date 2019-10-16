import React from "react";

const Disc = ({ value }) => {
	const valueToColour = {
		0: "white-disc",
		1: "red-disc",
		2: "yellow-disc"
	};

	return <div className={valueToColour[value]}></div>;
};

export default Disc;
