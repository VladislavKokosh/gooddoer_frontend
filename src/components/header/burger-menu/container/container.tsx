import { items } from "../../menu/menu.constants";
import { BurgerMenuItem } from "../item";

import "./index.scss";

const BurgerMenuContainer = () => {
	return (
		<div className="burger-menu-container">
			{items.map((item) => (
				<BurgerMenuItem key={item.id} title={item.title} link={item.link} />
			))}
		</div>
	);
};

export { BurgerMenuContainer };
