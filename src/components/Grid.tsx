import { FC, ReactNode } from "react";
import "../cards/Grid.css";

type GridProps = {
	itemsPerRow: number;
	children?: ReactNode;
}

const Grid: FC<GridProps> = ({
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

export default Grid;
