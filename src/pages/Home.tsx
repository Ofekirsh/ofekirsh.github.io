import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import Button from "../components/Button";
import Grid from "../components/Grid";
import Card from "../components/Card";
import Projects from "./Projects";
import "./Home.css";

const Home = () => (
	<div className="content">
		<div className="intro-wrapper">
			<div className="introduction">
				<h1>Hi, I'm Ofek!</h1>
				<p className="subtitle">Master's student in Mathematics specializing in Deep Learning.</p>
				<p className="description">
          I bring together solid mathematical reasoning and modern deep learning techniques to work on problems that matter.
          My focus isn't just on performance - it's on purpose.
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
		<Grid itemsPerRow={3}>
			<Card title="Neural Language Processing (NLP)">
        Development, analysis, and use of algorithms for computer processing of sequences.
			</Card>
			<Card title="Computational Biology">
			  Exploring the structure and behavior of biological systems through mathematical modeling and algorithmic analysis.
			</Card>
			<Card title="Graph Modeling">
        Developing a graph to capture the structure and dependencies in data
			</Card>
		</Grid>
    
    <div />
    
    <Projects />
    
    <p className="centered">Fueled by coffee, ambition, and desire</p>
	</div>
);

export default Home;
