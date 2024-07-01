import "./App.css";
import Container from "./components/Container";
import CardList from "./components/CardList";
import Albums from "./components/Albums";

function App() {
	return (
		<div className="app-app">
			<Container title="Albums">
				<CardList>
					<Albums />
				</CardList>
			</Container>
		</div>
	);
}

export default App;
