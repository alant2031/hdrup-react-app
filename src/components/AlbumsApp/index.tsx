import Container from "../Container";
import CardList from "../CardList";

import Albums from "../Albums";

function AlbumsApp() {
	return (
		<Container title="Albums">
			<CardList>
				<Albums />
			</CardList>
		</Container>
	);
}

export default AlbumsApp;
