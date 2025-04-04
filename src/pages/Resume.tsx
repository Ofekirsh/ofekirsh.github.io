import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Resume.css";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";
import Grid from "../components/Grid";
import { Tag, TagsContainer } from "../components/Tag";
import Subsection, { CardData } from "../components/Subsection";

const educationCards: CardData[] = [
	{
		title: "M.Sc. in Mathematics",
		content: (
			<>
				<p>Bar-Ilan University</p>
				<p>Specialization in Data Science.</p>
			</>
		),
		dateStr: "2024 - Current",
	},
	{
		title: "B.Sc. in Mathematics",
		content: (
			<>
				<p>Bar-Ilan University</p>
				<p>Graduated with honors and a minor in Computer Science.</p>
			</>
		),
		dateStr: "2021 - 2024",
	}
]

const researchCards: CardData[] = [
	{
		title: "",
		content: (
			<>
				<p>Prof. Yoram Louzon's lab, Department of Mathematics, Bar-Ilan University</p>
				<ul>
					<li>Conducting data sampling from populations.</li>
					<li>Helped developing the Genotype algorithm.</li>
				</ul>
			</>
		)
	},
];

const experienceCards: CardData[] = [
	{
		title: "Military Service",
		content: <>Served in <b>Unit 8200</b>, Israel's elite cyber intelligence unit.</>,
	},
	{
		title: "Startup Co-Founder",
		content: (
			<>
				Co-founded a startup with Ilay Gilman and Ido Ben Hamo.
				<ul>
					<li>Accepted into a tech accelerator.</li>
					<li>
						Clients included: <b>The Israel Football Association</b>
						, <b>Bank Hapoalim</b>
						, <b>Direct Insurance</b>
						, <b>Pelephone</b>
						, and more.
					</li>
				</ul>
			</>
		),
	},
	{
		title: "Lecturer at 25",
		content: "Taught a Python course in the Mathematics Department at age 25.",
	},
];

const Resume = () => {
	return (
		<div className="content" style={{maxWidth: "1000px"}}>
			<div className="title-container">
				<h1>Resume</h1>
				<a href="" className="btn"><FontAwesomeIcon icon={faDownload} /> Download PDF</a>
			</div>
			
			<Subsection title="Education" cards={educationCards} />
			
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
			
			<Subsection title="Research Assistant" cards={researchCards} />
			<Subsection title="Professional Experience" cards={experienceCards} />
		</div>
	);
}

export default Resume;
