import { File, Folder, Home, Trophy } from "lucide-react";
import "./Navbar.css";

const Navbar = () => (
	<div className="navbar-container">
		<nav className="navbar">
			<ul>
				<li><a href="/"><Home /> Home</a></li>
				<li><a href="/projects"><Folder /> Projects</a></li>
				<li><a href="/resume"><File /> Resume</a></li>
				<li><a href="/achievements"><Trophy /> Achievements</a></li>
			</ul>
		</nav>
	</div>
);

export default Navbar;
