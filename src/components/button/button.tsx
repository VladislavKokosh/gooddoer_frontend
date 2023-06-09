import { FC } from "react";

import "./button.scss";
import { IButtonProps } from "./button.types";

const Button: FC<IButtonProps> = ({ title, onClick }) => {
	return (
		<div className="button-ui" onClick={onClick}>
			{title}
		</div>
	);
};

export { Button };
