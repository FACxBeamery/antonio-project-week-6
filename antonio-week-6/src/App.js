import React from "react";
import "./App.css";
import Board from "./components/board";

function App() {
	const [apod, setApod] = React.useState();

	return (
		<div className="App">
			<Board apod={apod} setApod={setApod} />
		</div>
	);
}

export default App;
