import { RouterProvider } from "react-router-dom";
import "./App.css";

import AlbumsApp from "./components/AlbumsApp";
import router from "./routes/root.tsx";

function App() {
	return (
		<div className="app-app">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
