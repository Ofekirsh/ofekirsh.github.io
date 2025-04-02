import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { faHouse, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faFile, faFolderOpen } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => (
	<div className="navbar-container">
		<nav className="navbar">
			<ul>
				<li><a href="/"><FontAwesomeIcon icon={faHouse} /> Home</a></li>
				<li><a href="/projects"><FontAwesomeIcon icon={faFolderOpen} /> Projects</a></li>
				<li><a href="/resume"><FontAwesomeIcon icon={faFile} /> Resume</a></li>
				<li><a href="/achievements"><FontAwesomeIcon icon={faTrophy} /> Achievements</a></li>
			</ul>
		</nav>
	</div>
);

export default Navbar;
