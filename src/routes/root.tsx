import { Navigate, Route, Routes } from "react-router-dom";

import PhotosApp from "../components/PhotosApp";
import AlbumsApp from "../components/AlbumsApp";
import PhotoDetails from "../components/PhotoDetails";

function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Navigate replace to="/albums" />} />
			<Route path="/albums" element={<AlbumsApp />} />
			<Route path="/albums/:albumId/photos" element={<PhotosApp />} />
			<Route path="/photos/:photoId" element={<PhotoDetails />} />
			<Route path="*" element={<h1>404 - NOT FOUND</h1>} />
		</Routes>
	);
}

export default AppRoutes;
