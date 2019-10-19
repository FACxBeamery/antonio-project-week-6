const toggleTurn = (pId) => {
	const pIdIs1 = pId === 1;
	return pIdIs1 ? 2 : 1;
};

export { toggleTurn };
