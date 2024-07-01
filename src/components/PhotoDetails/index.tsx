import Container from "../Container";
import { useNavigate, useParams } from "react-router-dom";
import { usePhotoViewStorage } from "../../lib/hooks";
import getPhoto from "../../lib/getPhoto";
import { useEffect, useState } from "react";
import { PhotoInterface } from "../../utils/types";
import "./styles.css";

function PhotoDetails() {
	const navigate = useNavigate();
	const params = useParams();
	const photoId = params.photoId!;
	const [views] = usePhotoViewStorage(photoId);
	const [photo, setPhoto] = useState<PhotoInterface>();
	const [isLoading, setIsLoading] = useState(true);

	const fetchPhotoData = async (key: string) => {
		const photoResp = await getPhoto(key);
		if (photoResp) {
			setPhoto(photoResp);
			setIsLoading(false);
			return;
		}
		return alert(
			"A página que você está tentando acessar não está disponível no momento. Por favor, volte mais tarde."
		);
	};

	useEffect(() => {
		fetchPhotoData(photoId);
	}, []);
	return (
		<Container title={"Photo " + photoId}>
			{isLoading ? (
				<div>Loading . . .</div>
			) : (
				<>
					<div>PHOTO {photo?.id} DETAILS</div>
					<p>
						Album:
						<span
							className="album-link"
							onClick={() => navigate("/albums/" + photo?.albumId + "/photos")}
						>
							{" "}
							Album {photo?.albumId}
						</span>
					</p>
					<p>Views: {views?.views || 0}</p>
					<p>Title: {photo?.title}</p>
					<div className="img-group">
						<img src={photo?.thumbnailUrl} alt="photo thumbnail" />
						<img src={photo?.url} alt="photo url" />
					</div>
				</>
			)}
		</Container>
	);
}

export default PhotoDetails;
