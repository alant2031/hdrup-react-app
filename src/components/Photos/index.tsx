import { useEffect, useState } from "react";

import Card from "../Card";

import listPhoto from "../../lib/listPhoto";
import { PhotoInterface } from "../../utils/types";
import { useNavigate } from "react-router-dom";
import { useLocalStorage } from "usehooks-ts";
import Thumb from "../Thumb";
import "./styles.css";

interface IProps {
	albumId: string;
}

interface IViews {
	views: number;
}

type TPhotoState = PhotoInterface & IViews;

function Photos({ albumId }: IProps) {
	const [photos, setPhotos] = useState<TPhotoState[]>([]);
	const [isLoading, setIsLoading] = useState(true);
	const [views] = useLocalStorage<{ views: number; photoId: string }[]>(
		"client",
		[]
	);
	const navigate = useNavigate();
	const handle = (photo_id: string) => {
		return navigate("/photos/" + photo_id);
	};
	const fetchListPhotos = async () => {
		const photosResp = (await listPhoto(albumId)) as TPhotoState[];
		if (photosResp) {
			const formated = photosResp.map((p) => {
				const photoItem = localStorage.getItem("photoItem-" + p.id);
				if (photoItem === null) {
					return { ...p, views: 0 };
				}
				return { ...p, views: +JSON.parse(photoItem).views };
			});
			setIsLoading(false);
			setPhotos(formated as TPhotoState[]);
			return;
		}
		alert(
			"A página que você está tentando acessar não está disponível no momento. Por favor, volte mais tarde."
		);
	};
	useEffect(() => {
		fetchListPhotos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			{isLoading ? (
				<div>Loading . . </div>
			) : (
				photos?.map((photo: PhotoInterface & IViews, id: number) => {
					const photo_views = views.find((v) => +v.photoId === +photo.id);
					return (
						<Card key={id}>
							<div
								className="photo-card-title"
								onClick={() => handle(photo.id)}
							>
								{photo.title}
							</div>
							<div className="photo-card-subtitle">
								Views: {photo_views?.views || 0}
							</div>
							<Thumb photo={photo} />
						</Card>
					);
				})
			)}
		</>
	);
}

export default Photos;
