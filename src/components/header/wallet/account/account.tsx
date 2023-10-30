import { generateAvatarURL } from "@cfx-kit/wallet-avatar";
import { FC, useState } from "react";

import { EModalTypes } from "../../../../enum";
import { cutAddress } from "../../../../utils";
import { Modal } from "../../../modal";

import { AccountDetails } from "./account-details";
import "./account.scss";
import { IAccountProps } from "./account.types";
import { AccountMenu } from "./menu";

const Account: FC<IAccountProps> = ({ address }) => {
	const [visableMenu, setVisableMenu] = useState("none");

	const handleClick = () => {
		setVisableMenu("none");
	};

	return (
		<div
			className="container-account"
			onMouseEnter={() => setVisableMenu("flex")}
			onMouseLeave={() => setVisableMenu("none")}
		>
			<div
				className="account"
				style={
					visableMenu === "flex"
						? {
								borderRadius: "10px 10px 0 0",
								boxShadow: "0px 2px 8px 0px rgba(0, 0, 0, 0.2)",
						  }
						: undefined
				}
			>
				<img
					className="account_icon"
					src={address && generateAvatarURL(address)}
					alt=""
				/>
				<div className="account_address">{cutAddress(address as string)}</div>
				<Modal type={EModalTypes.Account}>
					<AccountDetails address={address && address} />
				</Modal>
			</div>
			<AccountMenu display={visableMenu} onClick={handleClick} />
		</div>
	);
};

export { Account };
