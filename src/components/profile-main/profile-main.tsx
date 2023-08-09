import { generateAvatarURL } from "@cfx-kit/wallet-avatar";
import LaunchIcon from "@mui/icons-material/Launch";
import WarningIcon from "@mui/icons-material/Warning";
import { useEffect } from "react";
import { MutatingDots } from "react-loader-spinner";
import { useSelector } from "react-redux";

import { useActions, useWindowSize } from "../../hooks";
import { getAccountState } from "../../store";

import "./profile-main.scss";

const ProfileMain = () => {
	const { address, username, isLoading } = useSelector(getAccountState);
	const { getUserData } = useActions();
	const [width] = useWindowSize();

	useEffect(() => {
		const token = localStorage.getItem("accessToken");
		token && getUserData(token);
	}, [getUserData]);

	const hasLoading = isLoading && (
		<div className="loader">
			<MutatingDots
				height="100"
				width="100"
				color="#4e4f8b"
				secondaryColor="#6ca6c1"
				radius="15"
				ariaLabel="mutating-dots-loading"
				wrapperStyle={{}}
				wrapperClass=""
				visible={true}
			/>
		</div>
	);

	const hasWarning = !isLoading && username === null && (
		<>
			<div className="profile-main-warning">
				<div className="profile-main-warning_left">
					<WarningIcon />
					<div>
						<b>Your profile is incomplete. </b>
						<br></br>You can’t create a project unless you complete your
						profile.
					</div>
				</div>
				<div className="profile-main-warning_right">
					<b>LET'S DO IT!</b>
				</div>
			</div>
		</>
	);

	const hasContent = !isLoading && address && (
		<>
			<div className="profile-main-header">
				<img
					className="profile-main-header_avatar"
					src={generateAvatarURL(address)}
					alt=""
				/>
				<div className="profile-main-header_address">
					{width < 640
						? `${address?.slice(0, 6)}...${address?.slice(-6)}`
						: `${address?.slice(0, 12)}...${address?.slice(-12)}`}
				</div>
				<div
					className="profile-main-header_link"
					onClick={() =>
						window.open(`https://etherscan.io/address/${address}`, "_blank")
					}
				>
					<LaunchIcon />
				</div>
			</div>
		</>
	);

	return (
		<div className="profile-main">
			{hasLoading}
			{hasWarning}
			{hasContent}
		</div>
	);
};

export { ProfileMain };
