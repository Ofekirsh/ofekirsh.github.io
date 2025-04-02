import { Route, Routes } from "react-router-dom"
import Home from "../pages/Home";
import Projects from "../pages/Projects";
import Achievements from "../pages/Achievements";
import Resume from "../pages/Resume";

const AppRoutes = () => (
	<Routes>
		<Route path="/" element={<Home />} />
		<Route path="/projects" element={<Projects />} />
		<Route path="/achievements" element={<Achievements />} />
		<Route path="/resume" element={<Resume />} />
	</Routes>
);

export default AppRoutes;
