import MenuIcon from "@mui/icons-material/Menu";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useActions } from "src/hooks";
import { getMenuVisible } from "src/store/menu";

import "./burger-menu.scss";
import { BurgerMenuContainer } from "./container";

const BurgerMenu = () => {
	const visible = useSelector(getMenuVisible);
	const { changeVisibleMenu } = useActions();

	useEffect(() => {
		document.body.style.overflow = visible ? "hidden" : "auto";
	}, [visible]);

	return (
		<>
			<MenuIcon
				className="menu-burger"
				onClick={() => changeVisibleMenu(!visible)}
			/>
			{visible && <BurgerMenuContainer />}
		</>
	);
};

export { BurgerMenu };
