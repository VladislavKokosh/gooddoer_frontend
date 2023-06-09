import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import "./header.scss";
import { Menu } from "./menu/menu";

const Header = () => {
	return (
		<div className="header">
			<Logo style={{ width: "150px", height: "150px" }} />
			<Menu />
		</div>
	);
};

export { Header };
