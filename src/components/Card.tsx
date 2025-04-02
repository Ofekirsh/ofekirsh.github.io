import { FC, ReactNode } from "react";

type CardProps = {
	title: string;
	imageUrl: string;
	children?: ReactNode;
};

const Card: FC<CardProps> = ({
	title,
	imageUrl,
	children
}) => (
	<div className="card">
		<img src={imageUrl} alt={title} />
		<h3>{title}</h3>
		{children}
	</div>
);

export default Card;
