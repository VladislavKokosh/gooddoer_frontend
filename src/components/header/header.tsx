import { useSize } from "ahooks";
import { useRef } from "react";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import { BurgerMenu } from "./burger-menu";
import "./header.scss";
import { Menu } from "./menu";
import { Wallet } from "./wallet";

const Header = () => {
	const ref = useRef(null);
	const size = useSize(ref);

	return (
		<div className="header" ref={ref}>
			<Logo className="header_logo" />
			{size?.width && size.width > 1000 ? <Menu /> : <BurgerMenu />}
			<Wallet />
		</div>
	);
};

export { Header };
