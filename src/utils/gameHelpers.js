const toggleTurn = (pId) => {
	const pIdIs1 = pId === 1;
	return pIdIs1 ? 2 : 1;
};

const checkWin = (board, discPos) => {
	let [row, col] = discPos;
	let pId = board[row][col];

	let winningCombos = [
		// Horiztonal win
		[[row, col], [row, col + 1], [row, col + 2], [row, col + 3]],
		[[row, col - 1], [row, col], [row, col + 1], [row, col + 2]],
		[[row, col - 2], [row, col - 1], [row, col], [row, col + 1]],
		[[row, col - 3], [row, col + 2], [row, col - 1], [row, col]],
		// Vertical win
		[[row, col], [row + 1, col], [row + 2, col], [row + 3, col]],
		// Diagonal wins
		[
			[row, col],
			[row - 1, col - 1],
			[row - 2, col - 2],
			[row - 3, col - 3]
		],
		[
			[row + 1, col + 1],
			[row, col],
			[row - 1, col - 1],
			[row - 2, col - 2]
		],
		[
			[row + 2, col + 2],
			[row + 1, col + 1],
			[row, col],
			[row - 1, col - 1]
		],
		[
			[row + 3, col + 3],
			[row + 2, col + 2],
			[row + 1, col + 1],
			[row, col]
		],
		//other diags
		[
			[row, col],
			[row + 1, col - 1],
			[row + 2, col - 2],
			[row + 3, col - 3]
		],
		[
			[row - 1, col + 1],
			[row, col],
			[row + 1, col - 1],
			[row + 2, col - 2]
		],
		[
			[row - 2, col + 2],
			[row - 1, col + 1],
			[row, col],
			[row + 1, col - 1]
		],
		[[row - 3, col + 3], [row - 2, col + 2], [row - 1, col + 1], [row, col]]
	];

	let win = winningCombos.some((combo) => {
		let match = true;
		combo.forEach((disc) => {
			let [discRow, discCol] = disc;
			try {
				if (board[discRow][discCol] !== pId) match = false;
			} catch (err) {
				match = false;
			}
		});
		return match;
	});

	return win;
};

export { toggleTurn, checkWin };
