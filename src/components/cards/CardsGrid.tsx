import { FC, ReactNode } from "react";
import "./CardsGrid.css";

type CardsGridProps = {
	itemsPerRow: number;
	children?: ReactNode;
}

const CardsGrid: FC<CardsGridProps> = ({
	itemsPerRow,
	children,
}) => {
	const gridTemplateColumns = `repeat(${itemsPerRow}, 1fr)`;
	
	return (
		<div
			className="cards-grid"
			style={{gridTemplateColumns}}
		>
			{children}
		</div>
	);
};

export default CardsGrid;
