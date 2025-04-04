import { FC, ReactNode } from "react";
import Card from "./Card";

export type CardData = {
	title: ReactNode;
	content: ReactNode;
	year?: number;
	dateStr?: string;
}

type SubsectionProps = {
	title: string;
	cards: CardData[];
}

const Subsection: FC<SubsectionProps> = ({ title, cards }) => (
	<div className="subcontent">
		<h2>{title}</h2>
		{cards.map(({ title, content, year, dateStr }, index) => (
			<Card key={index} title={title} dateStr={dateStr}>
				<p>{content}</p>
				{year && <sub>{year}</sub>}
			</Card>
		))}
	</div>
);

export default Subsection;
