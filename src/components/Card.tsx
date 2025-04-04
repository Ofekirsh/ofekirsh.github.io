import { FC, ReactNode } from "react";
import "../cards/Card.css";

type CardProps = {
	title: string;
	dateStr?: string;
	imageUrl?: string;
	children?: ReactNode;
};

const Card: FC<CardProps> = ({
	title,
	dateStr,
	imageUrl,
	children
}) => (
	<div className="card">
		{imageUrl && <img src={imageUrl} alt={title} /> }
		<div className="card-title">
			<h3>{title}</h3>
			<p>{dateStr}</p>
		</div>
		<div className="card-content">
			{children}
		</div>
	</div>
);

export default Card;
