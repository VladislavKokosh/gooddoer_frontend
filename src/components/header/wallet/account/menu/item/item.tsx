import { FC } from "react";
import { useNavigate } from "react-router-dom";

import { EModalTypes } from "../../../../../../enum";
import { useActions } from "../../../../../../hooks";

import "./item.scss";
import { IMenuAccountItemProps } from "./item.types";

const MenuItem: FC<IMenuAccountItemProps> = ({ title, link, onClick }) => {
	const { changeVisibleModal } = useActions();
	const navigate = useNavigate();

	return (
		<span
			className={`menu-item`}
			onClick={(e) => {
				e.stopPropagation();
				if (link) {
					navigate(link);
				} else {
					changeVisibleModal(EModalTypes.Account);
					onClick();
				}
			}}
		>
			<span>{title}</span>
		</span>
	);
};

export { MenuItem };
