import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useActions } from "src/hooks";

import "./index.scss";
import { BurgerItemProps } from "./item.types";

const BurgerMenuItem: FC<BurgerItemProps> = ({ title, link }) => {
	const navigate = useNavigate();
	const { changeVisibleMenu } = useActions();

	return (
		<div
			className="burger-item"
			onClick={() => {
				navigate(link);
				changeVisibleMenu(false);
			}}
		>
			{title}
		</div>
	);
};

export { BurgerMenuItem };
