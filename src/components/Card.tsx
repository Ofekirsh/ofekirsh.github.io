import { FC, ReactNode } from "react";
import "./Card.css";

type CardProps = {
	title: ReactNode;
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
		{imageUrl && <img src={imageUrl} alt={imageUrl} /> }
		<div className="card-header">
			<h3 className="card-title">{title}</h3>
			<p>{dateStr}</p>
		</div>
		<div className="card-content">
			{children}
		</div>
	</div>
);

export default Card;
