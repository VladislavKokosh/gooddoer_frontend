import { FC } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import "./item.scss";
import { IMenuItemProps } from "./item.types";

const MenuItem: FC<IMenuItemProps> = ({ title, link }) => {
	const navigate = useNavigate();
	const { pathname } = useLocation();

	return (
		<span
			className={`menu-item ${pathname === link ? "menu-item_active" : ""}`}
			onClick={() => {
				navigate(link);
			}}
		>
			{title}
		</span>
	);
};

export { MenuItem };
