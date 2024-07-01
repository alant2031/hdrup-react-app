import Container from "../Container";
import { useParams } from "react-router-dom";
import { usePhotoViewStorage } from "../../lib/hooks";

function PhotoDetails() {
	const params = useParams();
	const photoId = params.photoId!;
	const [views] = usePhotoViewStorage(photoId);

	return (
		<Container title={"Photo " + photoId}>
			<div>PHOTO {params.photoId} DETAILS</div>
			<p>Views: {views?.views || 0}</p>
		</Container>
	);
}

export default PhotoDetails;
