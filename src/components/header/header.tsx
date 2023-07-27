import { useSize } from "ahooks";
import { useRef } from "react";
import { Link } from "react-router-dom";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";

import { BurgerMenu } from "./burger-menu";
import "./header.scss";
import { Menu } from "./menu";
import { Wallet } from "./wallet";

const Header = () => {
	const ref = useRef<HTMLInputElement>(null);
	const size = useSize(ref);

	return (
		<div className="header" ref={ref}>
			<Link to={"/"}>
				<Logo className="header_logo" />
			</Link>
			{size?.width && size.width > 1000 ? <Menu /> : <BurgerMenu />}
			<Wallet />
		</div>
	);
};

export { Header };
