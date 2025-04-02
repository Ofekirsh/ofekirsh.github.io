import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { faHouse, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faFile, faFolderOpen } from "@fortawesome/free-regular-svg-icons";

const Navbar = () => (
	<div className="navbar-container">
		<nav className="navbar">
			<ul>
				<a href="/"><li><FontAwesomeIcon icon={faHouse} /> Home</li></a>
				<a href="/projects"><li><FontAwesomeIcon icon={faFolderOpen} /> Projects</li></a>
				<a href="/resume"><li><FontAwesomeIcon icon={faFile} /> Resume</li></a>
				<a href="/achievements"><li><FontAwesomeIcon icon={faTrophy} /> Achievements</li></a>
			</ul>
		</nav>
	</div>
);

export default Navbar;
