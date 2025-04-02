import { FC, ReactNode } from "react";
import "./Card.css";

type CardProps = {
	title: string;
	imageUrl?: string;
	children?: ReactNode;
};

const Card: FC<CardProps> = ({
	title,
	imageUrl,
	children
}) => (
	<div className="card">
		{imageUrl && <img src={imageUrl} alt={title} /> }
		<h3>{title}</h3>
		<div className="card-content">
			{children}
		</div>
	</div>
);

export default Card;
