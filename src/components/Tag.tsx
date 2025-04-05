import { FC, PropsWithChildren, ReactNode } from "react";
import "./Tag.css";

type TagProps = {
	theme?: "light" | "dark";
	children?: ReactNode;
};

export const Tag: FC<TagProps> = ({
	theme = "light",
	children,
}) => (
	<div className={`tag ${theme}`}>{children}</div>
);

export const TagsContainer: FC<PropsWithChildren> = ({ children }) => (
	<div className="tags-container">
		{children}
	</div>
);
