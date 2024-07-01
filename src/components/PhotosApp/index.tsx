import Container from "../Container";
import CardList from "../CardList";
import Photos from "../Photos";
import { useParams } from "react-router-dom";

function PhotosApp() {
	const params = useParams();

	return (
		<div style={{ padding: "45px" }}>
			<Container title={"Album " + params.albumId + " / Photos"}>
				<CardList>
					<Photos id={params.albumId as string} />
				</CardList>
			</Container>
		</div>
	);
}

export default PhotosApp;
