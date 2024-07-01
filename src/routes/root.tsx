import { createBrowserRouter, Navigate } from "react-router-dom";

import PhotosApp from "../components/PhotosApp";
import AlbumsApp from "../components/AlbumsApp";
import PhotoApp from "../components/PhotoApp";

const router = createBrowserRouter([
	{ path: "/", element: <Navigate to="/albums" replace /> },
	{ path: "/albums", element: <AlbumsApp /> },

	{ path: "/albums/:albumId/photos", element: <PhotosApp /> },
	{ path: "/photos/:photoId", element: <PhotoApp /> },
	{ path: "*", element: <h1>404 - NOT FOUND</h1> },
]);

export default router;
