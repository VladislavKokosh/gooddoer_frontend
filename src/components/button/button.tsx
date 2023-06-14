import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { FC } from "react";

import { ReactComponent as Icon } from "../../assets/icons/button-icon.svg";

import "./button.scss";
import { IButtonProps } from "./button.types";

const Button: FC<IButtonProps> = ({ title, hasSVG = false, onClick }) => {
	return (
		<div className={hasSVG ? "button-svg" : "button-ui"} onClick={onClick}>
			{title}
			{hasSVG && (
				<div className="button-svg_icon">
					<AccountBalanceWalletIcon />
				</div>
			)}
		</div>
	);
};

export { Button };
