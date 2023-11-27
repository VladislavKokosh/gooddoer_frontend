import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { EModalTypes } from "../../../../../../enum";
import { useActions } from "../../../../../../hooks";

import "./item.scss";
import { IMenuAccountItemProps } from "./item.types";

const MenuItem: FC<IMenuAccountItemProps> = ({ title, link, onClick }) => {
	const { changeVisibleModal, changeVisibleMenu } = useActions();
	const navigate = useNavigate();

	return (
		<span
			className="menu-item-account"
			onClick={(e) => {
				e.stopPropagation();
				changeVisibleMenu(false);
				if (link) {
					navigate(link);
					onClick();
				} else {
					changeVisibleModal(EModalTypes.Account);
					onClick();
				}
			}}
		>
			{title}
		</span>
	);
};

export { MenuItem };
