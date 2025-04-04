import { FC, ReactNode } from "react";
import "./Grid.css";

type GridProps = {
	itemsPerRow: number;
	children?: ReactNode;
}

const Grid: FC<GridProps> = ({
	itemsPerRow: columns,
	children,
}) => {
	const gridTemplateColumns = `repeat(${columns}, 1fr)`;
	
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
