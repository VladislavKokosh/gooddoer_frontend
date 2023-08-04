import { useEffect } from "react";
import { useSelector } from "react-redux";

import { ReactComponent as Warning } from "../../assets/icons/exclamation-triangle.svg";
import { ReactComponent as Wallet } from "../../assets/icons/wallet.svg";
import { useActions } from "../../hooks";
import { getAuthorizationState } from "../../store";

import { Content } from "./content";

const SignIn = () => {
	const { walletConnected } = useSelector(getAuthorizationState);
	const { changeAuthorization } = useActions();

	useEffect(() => {}, []);

	return (
		<div className="sign-in">
			{walletConnected ? (
				<Content
					svg={Warning}
					title="You need to sign in first!"
					buttonTitle="SIGN IN"
					onClick={() => changeAuthorization(true)}
				/>
			) : (
				<Content
					svg={Wallet}
					title="You need to connect your wallet to continue!"
					buttonTitle=""
				/>
			)}
		</div>
	);
};

export { SignIn };
