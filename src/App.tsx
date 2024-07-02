import { useNavigate } from "react-router-dom";
import "./App.css";
import homeSvg from "./assets/home.svg";

import AppRoutes from "./routes/root";

function App() {
	const navigate = useNavigate();
	return (
		<div className="app-app" data-testid="app_testid">
			<button className="home-btn" onClick={() => navigate("/")}>
				<img src={homeSvg} alt="home icon" />
				<p>Albums</p>
			</button>
			<AppRoutes />
		</div>
	);
}

export default App;
