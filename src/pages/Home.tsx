import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import CardsGrid from "../components/CardsGrid";
import Card from "../components/Card";
import "./Home.css";

const Home = () => (
	<div className="content">
		<div className="intro-wrapper">
			<div className="introduction">
				<h1>Hi, I'm Ofek 👋</h1>
				<p className="subtitle">Master's student in Mathematics specializing in Artificial Intelligence</p>
				<p className="description">
					I'm passionate about combining mathematical principles with artificial intelligence to solve complex problems.
					Currently in my final semester, focusing on [specific research area/interests].
				</p>
				
				<div>
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
			<img src="https://avatars.githubusercontent.com/u/72085937" alt="" className="hero-img" />
		</div>
		
		<h2>Research Interests</h2>
		<CardsGrid itemsPerRow={3}>
			<Card title="Machine Learning">
				Deep learning, neural networks, and their mathematical foundations.
			</Card>
			<Card title="Mathematical Optimization">
			Convex optimization, numerical methods, and algorithmic efficiency.
			</Card>
			<Card title="Data Science">
			Statistical analysis, data visualization, and predictive modeling.
			</Card>
		</CardsGrid>
	</div>
);

export default Home;
