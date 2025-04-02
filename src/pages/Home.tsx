import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Button from "../components/Button";
import "./Home.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";

const Home = () => (
	<div className="content">
		<h1>Hi, I'm Ofek 👋</h1>
		<p className="subtitle">Master's student in Mathematics specializing in Artificial Intelligence</p>
		<p className="description">
			I'm passionate about combining mathematical principles with artificial intelligence to solve complex problems.
			Currently in my final semester, focusing on [specific research area/interests].
		</p>
		
		<div className="buttons">
			<Button href="https://github.com/Ofekirsh">
				<FontAwesomeIcon icon={faGithub} />
				GitHub
			</Button>
			<Button href="https://www.linkedin.com/in/ofek-kirshenboim/">
				<FontAwesomeIcon icon={faLink} />
				LinkedIn
			</Button>
			<Button href="mailto:ofekirsh@gmail.com">
				<FontAwesomeIcon icon={faEnvelope} />
				Contact
			</Button>
		</div>
	</div>
);

export default Home;
