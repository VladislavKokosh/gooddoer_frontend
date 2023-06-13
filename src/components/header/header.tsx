import { useSize } from "ahooks";
import { useRef } from "react";
import { useSelector } from "react-redux";

import { ReactComponent as Logo } from "../../assets/icons/logo.svg";
import { getProviderState, getSelectedAddress } from "../../store";
import { Button } from "../button";

import { BurgerMenu } from "./burger-menu";
import "./header.scss";
import { Menu } from "./menu";

const Header = () => {
	const ref = useRef(null);
	const size = useSize(ref);
	const providerSelector = useSelector(getProviderState);
	const addressSelector = useSelector(getSelectedAddress);

	const handleClick = () => {
		providerSelector?.provider?.request({
			method: "eth_requestAccounts",
			params: [],
		});
	};

	return (
		<div className="header" ref={ref}>
			<Logo className="header_logo" />
			{size?.width && size.width > 750 ? <Menu /> : <BurgerMenu />}
			<Button
				title={addressSelector ? addressSelector : "Connect wallet"}
				onClick={addressSelector ? undefined : handleClick}
			/>
		</div>
	);
};

export { Header };
