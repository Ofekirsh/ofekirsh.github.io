import { FC } from "react";
import Subsection, { CardData } from "../components/Subsection";
import youngKirshyBoiImage from "../assets/sidpol/young_kirshyboi.jpg";
import staidumImage from "../assets/sidpol/stadium.jpeg";

const moreAboutCards: CardData[] = [
	{
		title: "Football Achievement",
		content: <>Won the <b>Israeli Youth State Cup Final</b> (Gvia HaMedina) in football.</>
	},
  {
		title: "My First Car",
		content: "Bought my first car at 17, with money I earned (and zero reverse parking skills).",
	},
	{
		title: "Travel Experience",
		content: (
			<>
				Travel Logs // <i>Real World API Calls</i>.
				<ol style={{listStyleType: 'none'}}>
					<li><b>v1.0: East Asia</b> - Vietnam, Macau, Hong Kong</li>
					<li><b>v1.1: Central America & US</b> - Costa Rica, Panama, New York</li>
					<li><b>v1.2: South Asia & Southeast Asia</b> - India and Thailand</li>
					<li><b>v2.0: Southeast Asia & East Asia</b> - Thailand and Japan</li>
					<li><b>v3.0: Eurotrip</b> (<em>Coming soon!</em>) - Germany, Italy, Czech Republic, France</li>
				</ol>
			</>
		)
	}
];

const Achievements: FC = () => (
	<div className="content">
		<h1>SIDPOL (Stuff I Don't Put On LinkedIn)</h1>
    
		<Subsection title="" cards={moreAboutCards} />
    <div style={{display: 'flex', justifyContent: 'center', gap: '5em'}}>
      <img width='300px' src={youngKirshyBoiImage} alt="Young Kirhsy Boi" />
      <img width='250px' src={staidumImage} alt="Young Kirhsy Boi" />
    </div>
    
	</div>
);

export default Achievements;
