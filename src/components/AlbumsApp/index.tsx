import Container from "../Container";
import CardList from "../CardList";

import Albums from "../Albums";

function AlbumsApp() {
	return (
		<Container title="Albums" testid="albums-app_testid">
			<CardList>
				<Albums />
			</CardList>
		</Container>
	);
}

export default AlbumsApp;
