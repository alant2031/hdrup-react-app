import { useEffect } from "react";
import Container from "../Container";
import { useParams } from "react-router-dom";
import { usePhotoViewStorage } from "../../lib/hooks";

function PhotoApp() {
	const params = useParams();
	const photoId = params.photoId!;
	const [views, _] = usePhotoViewStorage(photoId);
	useEffect(() => {
		// console.log(views);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<Container title={"Photo " + photoId}>
			<div>PHOTO {params.photoId} DETAILS</div>
			<p>Views: {views?.views || 0}</p>
		</Container>
	);
}

export default PhotoApp;
