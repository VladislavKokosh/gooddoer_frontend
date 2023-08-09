import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import { FC } from "react";

import "./button.scss";
import { IButtonProps } from "./button.types";

const Button: FC<IButtonProps> = ({
	title,
	hasSVG = false,
	isLoading,
	onClick,
}) => {
	return (
		<div
			className={`${hasSVG ? "button-svg" : "button-ui"} ${
				isLoading && "loading"
			}`}
			onClick={onClick}
		>
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
