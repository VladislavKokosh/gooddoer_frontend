import { FC } from "react";

import { MenuItem } from "./item";
import { items } from "./menu.constants";
import "./menu.scss";
import { AccountMenuProps } from "./menu.types";

const AccountMenu: FC<AccountMenuProps> = ({ display, onClick }) => {
	return (
		<div className="menu-account" style={{ display: display }}>
			{items.map((item) => (
				<MenuItem
					key={item.id}
					title={item.title}
					link={item.link}
					onClick={onClick}
				/>
			))}
		</div>
	);
};

export { AccountMenu };
