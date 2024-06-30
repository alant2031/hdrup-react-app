import { createBrowserRouter } from "react-router-dom";
import App from "../App";

const router = createBrowserRouter([
	{ path: "/", element: <App /> },
	{ path: "/test", element: <div>TEST</div> },
	{ path: "*", element: <h1>404 - NOT FOUND</h1> },
]);

export default router;
