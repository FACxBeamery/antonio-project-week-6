import React from "react";
import CheckIcon from "@material-ui/icons/Check";
import RemoveIcon from "@material-ui/icons/Remove";
import ClearIcon from "@material-ui/icons/Clear";
import SearchIcon from "@material-ui/icons/Search";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import CircularProgress from "@material-ui/core/CircularProgress";

import Style from "./Players.module.css";
import pDataStructure from "../../utils/playerData";
import { getGithubData } from "../../utils/getGithubData.js";

const PlayerInfo = ({ pId, index, players, setPlayers }) => {
	const p = `p${pId}`;
	const playerData = players[p];

	let button = document.getElementById(`${p}_button`);
	let userInput = document.getElementById(`${p}_user`);
	let progress = document.getElementById(`${p}_progress`);

	if (button) {
		playerData.githubUser === ""
			? (button.disabled = true)
			: (button.disabled = false);

		button.disabled
			? (button.style.cursor = "default")
			: (button.style.cursor = "pointer");
	}

	const toggleSearch = () => {
		button.style.display !== "none"
			? (button.style.display = "none")
			: (button.style.display = "inline");

		userInput.disabled !== true
			? (userInput.disabled = true)
			: (userInput.disabled = false);

		progress.classList.contains(Style.progressWrapper)
			? progress.classList.remove(Style.progressWrapper)
			: progress.classList.add(Style.progressWrapper);
	};

	const handleChange = (event) => {
		setPlayers({
			...players,
			[p]: { ...playerData, githubUser: event.target.value }
		});
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		toggleSearch();

		const pUserMap = {
			p1: "p2",
			p2: "p1"
		};

		let user = document.getElementById(`${p}_user`).value;

		if (user === players[pUserMap[p]].githubUser) {
			setPlayers({
				...players,
				[p]: {
					...playerData,
					confirmed: false,
					sameUser: true
				}
			});
			toggleSearch();
			return;
		}

		getGithubData(user).then((data) => {
			data
				? setPlayers({
						...players,
						[p]: {
							...playerData,
							uId: data.id,
							avatar_url: data.avatar_url,
							name: data.name,
							confirmed: true
						}
				  })
				: toggleSearch();

			if (!data) {
				setPlayers({
					...players,
					[p]: {
						...playerData,
						confirmed: false
					}
				});
			}
		});
	};

	const handleClear = () => {
		setPlayers({
			...players,
			[p]: new pDataStructure(pId)
		});
		userInput.disabled = false;
		button.disabled = false;
	};

	const searchBtn = (
		<>
			<button
				id={`${p}_button`}
				className={Style.button}
				type="click"
				onClick={playerData.githubUser === "" ? null : handleSubmit}
				disabled={button && button.disabled ? true : false}
			>
				<SearchIcon />
			</button>

			<span id={`${p}_progress`} className={Style.progressWrapper}>
				<CircularProgress className={Style.progress} />
			</span>
		</>
	);

	const clearBtn = (
		<button
			id={`p${pId}_button`}
			className={`${Style.button} ${Style.button_reset}`}
			type="click"
			onClick={handleClear}
		>
			<span className={Style.highlightOff}>
				<HighlightOffIcon />
			</span>
		</button>
	);

	const playerCheck = (
		<span className={`${Style.playerStatusIcons} ${Style.check}`}>
			<CheckIcon />
		</span>
	);
	const playerWait = (
		<span className={`${Style.playerStatusIcons} ${Style.wait}`}>
			<RemoveIcon />
		</span>
	);
	const playerNotFound = (
		<span className={`${Style.playerStatusIcons} ${Style.notFound}`}>
			<ClearIcon />
		</span>
	);

	const waitMsg = <h3>Waiting for player...</h3>;

	const errorMsg = (
		<>
			{playerData.sameUser ? (
				<h3>User already added</h3>
			) : (
				<h3>Could not find player...</h3>
			)}
			<p>Try again</p>
		</>
	);

	const profilePic = (
		<img
			alt={`Player ${pId}'s GitHub profile`}
			src={playerData.avatar_url}
		></img>
	);

	return (
		<div className={Style.playerForm}>
			<div className={Style.ppArea}>
				{playerData.avatar_url
					? profilePic
					: playerData.confirmed === false
					? errorMsg
					: waitMsg}
			</div>
			<div className={Style.formArea}>
				<div className={Style.heading}>
					<h3>Player {pId}</h3>
					{playerData.confirmed
						? playerCheck
						: playerData.confirmed === undefined
						? playerWait
						: playerNotFound}
				</div>
				<form onSubmit={(e) => e.preventDefault()}>
					<fieldset
						id={`p${pId}_fieldset`}
						className={Style.fieldset}
					>
						<input
							id={`p${pId}_user`}
							value={playerData.githubUser}
							onSubmit={handleSubmit}
							onChange={handleChange}
							placeholder="Enter GitHub Username"
						/>
						{playerData.confirmed ? clearBtn : searchBtn}
					</fieldset>
				</form>
			</div>
		</div>
	);
};

export default PlayerInfo;
