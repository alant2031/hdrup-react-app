import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import PhotosApp from "../components/PhotosApp";

const router = createBrowserRouter([
	{ path: "/", element: <Navigate to="/albums" replace /> },
	{ path: "/albums", element: <App /> },

	{ path: "/albums/:albumId/photos", element: <PhotosApp /> },
	{ path: "*", element: <h1>404 - NOT FOUND</h1> },
]);

export default router;
