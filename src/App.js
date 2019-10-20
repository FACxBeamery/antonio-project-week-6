import React from "react";
import "./App.css";
import Board from "./components/Board";

function App() {
	const [apod, setApod] = React.useState();
	const [readyToStartGame, setReadyToStartGame] = React.useState(false);

	return (
		<div className="App">
			<Board
				apod={apod}
				setApod={setApod}
				readyToStartGame={readyToStartGame}
				setReadyToStartGame={setReadyToStartGame}
			/>
		</div>
	);
}

export default App;
