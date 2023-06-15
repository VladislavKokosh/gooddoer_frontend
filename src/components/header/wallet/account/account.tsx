import { generateAvatarURL } from "@cfx-kit/wallet-avatar";
import { FC } from "react";

import { EModalTypes } from "../../../../enum";
import { useActions } from "../../../../hooks";
import { Modal } from "../../../modal";

import { AccountDetails } from "./account-details";
import "./account.scss";
import { IAccountProps } from "./account.types";

const Account: FC<IAccountProps> = ({ address }) => {
	const { changeVisibleModal } = useActions();

	return (
		<div
			className="account"
			onClick={() => changeVisibleModal(EModalTypes.Account)}
		>
			<img
				className="account_icon"
				src={address && generateAvatarURL(address)}
				alt=""
			/>
			<div className="account_address">{`${address?.slice(
				0,
				6
			)}...${address?.slice(-6)}`}</div>
			<Modal type={EModalTypes.Account}>
				<AccountDetails address={address && address} />
			</Modal>
		</div>
	);
};

export { Account };
