import React from "react";
import "./App.css";
import Container from "./components/Container";
import CardList from "./components/CardList";

function App() {
	return (
		<div className="app-app">
			<Container title="All Album">
				<CardList>
					{new Array(50).fill(0).map((_, id) => (
						<div key={id}>ABC</div>
					))}
				</CardList>
			</Container>
		</div>
	);
}

export default App;
