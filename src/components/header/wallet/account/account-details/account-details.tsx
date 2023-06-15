import { generateAvatarURL } from "@cfx-kit/wallet-avatar";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import LaunchIcon from "@mui/icons-material/Launch";
import { FC } from "react";
import { v4 as uuidv4 } from "uuid";

import { EToastrContent } from "../../../../../enum";
import { useActions } from "../../../../../hooks";
import { IAccountProps } from "../account.types";

import "./account-details.scss";

const AccountDetails: FC<IAccountProps> = ({ address }) => {
	const { addToastrToQueue } = useActions();
	return (
		<div className="account-details">
			<div className="account-details_header">Connected with MetaMask</div>
			<div className="account-details_content">
				<img
					className="account-details_content_icon"
					src={address && generateAvatarURL(address)}
					alt=""
				/>
				<div className="account-details_content_address">{`${address?.slice(
					0,
					6
				)}...${address?.slice(-6)}`}</div>
			</div>
			<div className="account-details_footer">
				<div
					className="account-details_footer_button"
					onClick={(e) => {
						e.stopPropagation();
						addToastrToQueue({ id: uuidv4(), content: EToastrContent.Copy });
						address && navigator.clipboard.writeText(address);
					}}
				>
					<ContentCopyIcon />
					<div>Copy address</div>
				</div>
				<div
					className="account-details_footer_button"
					onClick={() =>
						window.open(`https://etherscan.io/address/${address}`, "_blank")
					}
				>
					<LaunchIcon />
					<div>View on Etherscan</div>
				</div>
			</div>
		</div>
	);
};

export { AccountDetails };
