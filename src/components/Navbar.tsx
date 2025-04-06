import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Navbar.css";
import { faHouse, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { faFile, faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";

const Navbar = () => (
	<div className="navbar-container">
		<nav className="navbar">
			<ul>
				<Link to="/"><li><FontAwesomeIcon icon={faHouse} /> Home</li></Link>
				<Link to="/projects"><li><FontAwesomeIcon icon={faFolderOpen} /> Projects</li></Link>
				<Link to="/resume"><li><FontAwesomeIcon icon={faFile} /> Resume</li></Link>
				<Link to="/achievements"><li><FontAwesomeIcon icon={faTrophy} /> Achievements</li></Link>
			</ul>
		</nav>
	</div>
);

export default Navbar;
