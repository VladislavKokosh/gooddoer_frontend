import { useSelector } from "react-redux";

import { ReactComponent as Warning } from "../../assets/icons/exclamation-triangle.svg";
import { ReactComponent as Wallet } from "../../assets/icons/wallet.svg";
import { getAuthState } from "../../store";

import { Content } from "./content";

const SignIn = () => {
	const { walletConnected } = useSelector(getAuthState);

	return (
		<div className="sign-in">
			{walletConnected ? (
				<Content
					svg={Warning}
					title="You need to sign in first!"
					buttonTitle="SIGN IN"
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
