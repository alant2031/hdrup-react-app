import { useNavigate } from "react-router-dom";
import "./App.css";
import homeSvg from "./assets/home.svg";

import AppRoutes from "./routes/root.tsx";

function App() {
	const navigate = useNavigate();
	return (
		<div className="app-app">
			<button className="home-btn" onClick={() => navigate("/")}>
				<img src={homeSvg} alt="home icon" />
				<p>Albums</p>
			</button>
			<AppRoutes />
		</div>
	);
}

export default App;
