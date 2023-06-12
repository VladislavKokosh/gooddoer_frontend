import { MenuItem } from "./item";
import { items } from "./menu.constants";
import "./menu.scss";

const Menu = () => {
	return (
		<div className="menu">
			{items.map((item) => (
				<MenuItem key={item.id} title={item.title} link={item.link} />
			))}
		</div>
	);
};

export { Menu };
