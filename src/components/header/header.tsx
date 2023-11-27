import { useSize } from "ahooks";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { useActions } from "src/hooks";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import { BurgerMenu } from "./burger-menu";
import "./header.scss";
import { Menu } from "./menu";
import { Wallet } from "./wallet";

const Header = () => {
	const ref = useRef<HTMLInputElement>(null);
	const size = useSize(ref);
	const { changeVisibleMenu } = useActions();

	return (
		<div className="header" ref={ref}>
			<Link to={"/"} onClick={() => changeVisibleMenu(false)}>
				<Logo className="header_logo" />
			</Link>
			{size?.width && size.width > 1000 ? <Menu /> : <BurgerMenu />}
			<Wallet />
		</div>
	);
};

export { Header };
