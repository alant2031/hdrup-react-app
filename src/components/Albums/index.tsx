import { useEffect, useState } from "react";
import listAlbum from "../../lib/listAlbum";
import Card from "../Card";
import { AlbumInterface } from "../../utils/types";
import "./styles.css";
import { useNavigate } from "react-router-dom";

function Albums() {
	const [albums, setAlbums] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const navigate = useNavigate();
	const handle = (albumId: string) => {
		return navigate("/albums/" + albumId + "/photos");
	};
	const fetchListAlbum = async () => {
		const resp = await listAlbum();
		if (resp) {
			setIsLoading(false);
			setAlbums(resp);
			return;
		}
		alert(
			"A página que você está tentando acessar não está disponível no momento. Por favor, volte mais tarde."
		);
	};
	useEffect(() => {
		fetchListAlbum();
	}, []);
	return (
		<>
			{isLoading ? (
				<div>Loading . . .</div>
			) : (
				albums.map((album: AlbumInterface, id) => (
					<Card key={id}>
						<h2
							className="album-card-title"
							data-testid="album-card-title_testid"
							onClick={() => handle(album.id)}
						>
							Album <span>{album.id}</span>
						</h2>
						<div className="album-card-content">{album.title}</div>
					</Card>
				))
			)}
		</>
	);
}

export default Albums;
