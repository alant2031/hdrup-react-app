export interface AlbumInterface {
	id: string;
	title: string;
	userId: string;
}

export interface PhotoInterface {
	albumId: string;
	id: string;
	title: string;
	url: string;
	thumbnailUrl: string;
}
