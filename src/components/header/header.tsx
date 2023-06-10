import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import "./header.scss";
import { Menu } from "./menu";

const Header = () => {
	return (
		<div className="header">
			<Logo className="header_logo" />
			<Menu />
		</div>
	);
};

export { Header };
