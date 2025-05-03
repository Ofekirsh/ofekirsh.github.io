import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Resume.css";
import { faDownload, faLink } from "@fortawesome/free-solid-svg-icons";
import Card from "../components/Card";
import Grid from "../components/Grid";
import { Tag, TagsContainer } from "../components/Tag";
import Subsection, { CardData } from "../components/Subsection";
import Button from "../components/Button";
import { FC, PropsWithChildren } from "react";

const BoldItalicizedSmall: FC<PropsWithChildren<{fontSize?: string, block?: boolean}>> = ({ fontSize = '12pt', block = false, children }) => (
  block
    ? <div style={{fontSize}}><b><i>{children}</i></b></div>
    : <span style={{fontSize}}><b><i>{children}</i></b></span>
);

const Spacer: FC = () => <div style={{height: '8pt'}} />;

const educationCards: CardData[] = [
	{
		title: "M.Sc. in Mathematics",
		content: (
			<>
				<p>Bar-Ilan University</p>
				<p>Specialization in Data Science.</p>
        <Spacer />
        <TagsContainer>
          <Tag>
            President Scholarship
          </Tag>
        </TagsContainer>
			</>
		),
		dateStr: "2024 - Current",
	},
  {
    title: "Student Exchange Program",
    content: (
      <>
        <p>Humboldt University of Berlin</p>
        <p>
          Immersed in a new culture, navigated unfamiliar languages, and built connections with people from around the world.
        </p>
        <Spacer />
        <TagsContainer>
          <Tag>Cross-Cultural Communication</Tag>
          <Tag>Open-Mindedness</Tag>
        </TagsContainer>
      </>
    ),
    dateStr: "2025",
  },
	{
		title: "B.Sc. in Mathematics",
		content: (
			<>
				<p>Bar-Ilan University</p>
				<p>Graduated with a honors with a GPA of 94.54 and a minor in Computer Science.</p>
        <Spacer />
        <TagsContainer>
          <Tag>Direct Track</Tag>
        </TagsContainer>
			</>
		),
		dateStr: "2021 - 2024",
	}
]

const experienceCards: CardData[] = [
  {
    title: "Lecturer & Teaching Assistant",
    content: (
      <>
        <p>Programming & Mathematics</p>
        <Spacer />
        <BoldItalicizedSmall block>Want a glimpse into my teaching style?</BoldItalicizedSmall>
        <Button href="https://www.youtube.com/playlist?list=PLk-g4yofGXLRb8hkYZB0Me33EnQdU6xdW"><FontAwesomeIcon icon={faLink} /> Calculus I (2025)</Button>
        <Button href="https://www.youtube.com/playlist?list=PLk-g4yofGXLSi3IL69u0ILplKVpBtdbu7"><FontAwesomeIcon icon={faLink} /> Intro to Programming (2026)</Button>
        <Button href="https://www.youtube.com/playlist?list=PLk-g4yofGXLSWYvgnISD7xSnJeMngIVFC"><FontAwesomeIcon icon={faLink} /> Calculus I (2024)</Button>
      </>
    ),
    dateStr: '2023 - Current',
  },
  {
		title: "Research Assistant",
		content: (
			<>
				<p><a href="https://yolo.math.biu.ac.il/">Prof. Yoram Louzon's lab</a>, Department of Mathematics, Bar-Ilan University</p>
        <Spacer />
        <p>Contributed to research in computational biology and algorithmic modeling for donor-recipient matching in hematopoietic stem cell transplantation (HSCT).</p>
			</>
		),
    dateStr: '2023',
	},
	{
		title: "Upllery Co-Founder",
		content: (
			<>
				<p>
          Co-founded and led the development of Upllery, a SaaS platform designed to help brands collect, curate, and showcase user-generated content from social media in real time.
        </p>
        <Spacer />
        <p>
          Delivered solutions to leading clients, including <b>Bezeq</b>, <b>Bank Hapoalim</b>, <b>The Israeli Football Association</b>, etc.
        </p>
        <Spacer />
        <p>
          Participated in entrepreneurship and accelerator programs such as Leading Edge Consultants, AtoBe Accelerator, and HYPE Sports Innovation.
        </p>
			</>
		),
    dateStr: '2019 - 2023',
	},
  {
		title: "Military Service",
		content: <>Served in <b>Unit 8200</b>, Israel's elite cyber intelligence unit as a hardware and software developer.</>,
    dateStr: '2018 - 2021',
	},
];

const Resume = () => {
	return (
		<div className="content" style={{maxWidth: "1000px"}}>
			<div className="title-container">
				<h1>Resume</h1>
				<a className="btn"><FontAwesomeIcon icon={faDownload} /> Download PDF</a>
			</div>
			
			<Subsection title="Education" cards={educationCards} />
			
			<h2>Skills</h2>
			<Grid itemsPerRow={2}>
        <Card title="Advanced Deep Learning Courses">
          <TagsContainer>
            <Tag>Deep Learning for Texts and Sequences</Tag>
            <Tag>Deep Learning for Computer Vision <BoldItalicizedSmall fontSize="8pt">Weizman Institute</BoldItalicizedSmall></Tag>
            <Tag>Multimodal Deep Learning</Tag>
            <Tag>Generative Models</Tag>
            <Tag>Reinforcement Learning</Tag>
          </TagsContainer>
        </Card>
        <Card title="Soft Skills">
          From surviving technical interviews and peer reviews.
          <TagsContainer>
            <Tag>Technical Communication</Tag>
            <Tag>Teaching</Tag>
            <Tag>Public Speaking</Tag>
            <Tag>Collaborative Research</Tag>
            <Tag>Time Management <BoldItalicizedSmall fontSize="8pt">(Yes, the real kind)</BoldItalicizedSmall></Tag>
          </TagsContainer>
        </Card>
			</Grid>
			
			<Subsection title="Professional Experience" cards={experienceCards} />
		</div>
	);
}

export default Resume;
