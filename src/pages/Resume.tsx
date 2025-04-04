import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Resume.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";
import Grid from "../components/Grid";
import { Tag, TagsContainer } from "../components/Tag";

const Resume = () => {
	return (
		<div className="content" style={{maxWidth: "1000px"}}>
			<div className="title-container">
				<h1>Resume</h1>
				<a href="" className="btn"><FontAwesomeIcon icon={faDownload} /> Download PDF</a>
			</div>
			
			<h2>Education</h2>
			
			<Card title="M.Sc. in Mathematics" dateStr="2024 - Current">
				<p>Bar-Ilan University</p>
				<p>Specialization in Data Science.</p>
			</Card>
			
			<Card title="B.Sc. in Mathematics" dateStr="2021 - 2024">
				<p>Bar-Ilan University</p>
				<p>Graduated with honors and a minor in Computer Science.</p>
			</Card>
			
			<h2>Skills</h2>
			<Grid itemsPerRow={2}>
				<Card title="Techical Skills">
					<TagsContainer>
						<Tag theme="dark">Python</Tag>
						<Tag theme="dark">TensorFlow</Tag>
						<Tag theme="dark">sklearn</Tag>
						<Tag theme="dark">PyTorch</Tag>
						<Tag theme="dark">Java</Tag>
						<Tag theme="dark">Latex</Tag>
						<Tag theme="dark">Git</Tag>
					</TagsContainer>
				</Card>
				<Card title="Areas of Expertise">
					<TagsContainer>
						<Tag>Machine Learning</Tag>
						<Tag>Deep Learning</Tag>
						<Tag>Statistical Analysis</Tag>
						<Tag>Data Visualization</Tag>
						<Tag>Algorithm Design</Tag>
					</TagsContainer>
				</Card>
			</Grid>
			
			<h2>Research Experience</h2>
			<Card title="Research Assistant" dateStr="2023 - 2024">
				<p>Prof. Yoram Louzon's lab, Department of Mathematics, Bar-Ilan University</p>
				<ul>
					<li>Conducting data sampling from populations.</li>
					<li>Helped developing the Genotype algorithm.</li>
				</ul>
			</Card>
		</div>
	);
}

export default Resume;
