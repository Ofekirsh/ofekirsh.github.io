import Grid from "../components/Grid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowsLeftRight, faPaperclip, faScroll, faTrophy } from "@fortawesome/free-solid-svg-icons";
import { FC } from "react";
import Subsection, { CardData } from "../components/Subsection";


const academicCards: CardData[] = [
	{
		title: <><FontAwesomeIcon icon={faTrophy} color="gold" /> Undegraduate Degree</>,
		content: <>Graduated with <em>honors</em> in Mathematics with a high GPA.</>,
		year: 2024,
	},
	{
		title: <><FontAwesomeIcon icon={faPaperclip} color="silver" /> Direct M.Sc. Admission</>,
		content: <>Accepted into a direct-track Master's program.</>,
		year: 2024,
	},
];

const honorsCards: CardData[] = [
	{
		title: <><FontAwesomeIcon icon={faScroll} color="gray" /> President's Scholarship</>,
		content: <>Awarded the President's Scholarship for graduate studies.</>,
		year: 2025,
	},
	{
		title: <><FontAwesomeIcon icon={faArrowsLeftRight} color="darkgray" /> Student Exchange Program</>,
		content: <>Participated in a student exchange semester at <b>Humboldt University</b> in Berlin, Germany.</>,
		year: 2025,
	},
];

const publicationCards: CardData[] = [
	{
		title: "EFI 2025 Conference",
		content: "Fast Graph Matching for Real-Time Detection of Matched and Mismatched Donors",
		year: 2025,
	},
];

const sportsCards: CardData[] = [
	{
		title: "Football Achievement",
		content: <>Won the <b>Israeli State Cup</b> (Gvia HaMedina) in the youth category.</>
	}
]

const moreAboutCards: CardData[] = [
	{
		title: "Self-Made at 17",
		content: "Bought my first car at age 17 with money I saved up myself after getting my driver's license.",
	},
	{
		title: "Travel Experience",
		content: (
			<>
				The East is definitely <b>super amazing</b>.
				<ol>
					<li><b>East Asia</b> - Vietnam, Macau, Hong Kong</li>
					<li><b>Central America & US</b> - Costa Rica, Panama, New York</li>
					<li><b>South Asia & Southeast Asia</b> - India and Thailand</li>
					<li><b>Southeast Asia & East Asia</b> - Thailand and Japan</li>
					<li>(<em>Coming soon!</em>) <b>Eurotrip </b> - Germany, Italy, Czech Republic, France</li>
				</ol>
			</>
		)
	}
];

const Achievements: FC = () => (
	<div className="content">
		<h1>Achievements</h1>
		<Grid itemsPerRow={2}>
			<Subsection title="Academic Background" cards={academicCards} />
			<Subsection title="Honors" cards={honorsCards} />
		</Grid>
		
		<h1>More about me</h1>
		<Subsection title="Publications & Conferences" cards={publicationCards} />
		<Subsection title="Sports" cards={sportsCards} />
		<Subsection title="Personal achievements" cards={moreAboutCards} />
	</div>
);

export default Achievements;
