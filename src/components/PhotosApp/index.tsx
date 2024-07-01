import Container from "../Container";
import CardList from "../CardList";
import Photos from "../Photos";
import { useParams } from "react-router-dom";

function PhotosApp() {
	const params = useParams();

	return (
		<Container title={"Album " + params.albumId + " / Photos"}>
			<CardList>
				<Photos albumId={params.albumId as string} />
			</CardList>
		</Container>
	);
}

export default PhotosApp;
