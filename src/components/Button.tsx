import { FC, ReactNode } from "react";
import "./Button.css";

type ButtonProps = {
	href?: string;
	children?: ReactNode;
}

const Button: FC<ButtonProps> = ({
	href,
	children,
}) => (
	<a
		className="btn"
		href={href}
	>
		{children}
	</a>
);

export default Button;
