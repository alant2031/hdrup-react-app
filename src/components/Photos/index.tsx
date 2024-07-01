import { useEffect, useState } from "react";

import Card from "../Card";
import { PhotoInterface } from "../../utils/types";
import listPhoto from "../../lib/listPhoto";
import "./styles.css";

interface IProps {
	id: string;
}

function Photos({ id }: IProps) {
	const [photos, setPhotos] = useState([]);
	const handle = (photo_id: string) => {
		console.log(photo_id);
	};
	const fetchListPhotos = async () => {
		const resp = await listPhoto(id);
		if (resp) {
			setPhotos(resp);
			return;
		}
		alert("Erro 500 - tente novamente mais tarde");
	};
	useEffect(() => {
		fetchListPhotos();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);
	return (
		<>
			{photos.map((photos: PhotoInterface, id) => (
				<Card key={id} onClickHandle={() => handle(photos.id)}>
					<h2 className="photo-card-title">Photo {photos.id}</h2>
					<div className="photo-card-content">
						<img src={photos.thumbnailUrl} alt="photo_thumb" />
					</div>
				</Card>
			))}
		</>
	);
}

export default Photos;
