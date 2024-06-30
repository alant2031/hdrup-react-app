import { useEffect, useState } from "react";
import listAlbum from "../../lib/listAlbum";
import Card from "../Card";
import { AlbumInterface } from "../../utils/types";
import "./styles.css";

function Albums() {
	const [albums, setAlbums] = useState([]);
	const fetchListAlbum = async () => {
		const resp = await listAlbum();
		if (resp) {
			console.log(resp);
			setAlbums(resp);
			return;
		}
		alert("Erro 500 - tente novamente mais tarde");
	};
	useEffect(() => {
		fetchListAlbum();
	}, []);
	return (
		<>
			{albums.map((album: AlbumInterface, id) => (
				<Card key={id}>
					<h2 className="album-card-title">Album {album.id}</h2>
					<div className="album-card-content">{album.title}</div>
				</Card>
			))}
		</>
	);
}

export default Albums;
