import { ethers } from "ethers";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { useActions, useWindowSize } from "../../../hooks";
import { getAccountState } from "../../../store";
import { Button } from "../../button";

import { Account } from "./account";
import "./wallet.scss";

const Wallet = () => {
	const [width] = useWindowSize();
	const { changeWalletConnect, changeAddress, changeMetamaskIntalledStatus } =
		useActions();
	const { address, isMetamaskInstalled } = useSelector(getAccountState);

	useEffect(() => {
		if ((window as any).ethereum) {
			changeMetamaskIntalledStatus(true);
			getAccounts();

			(window as any).ethereum.on("accountsChanged", disconnectWallet);
		}
		// eslint-disable-next-line
	}, []);

	const getAccounts = async (): Promise<void> => {
		const accounts: string[] = await (window as any).ethereum.request({
			method: "eth_accounts",
		});
		if (accounts.length > 0) {
			const account: string = ethers.getAddress(accounts[0]);
			changeAddress(account);
			changeWalletConnect(true);
		}
	};

	const connectWallet = async (): Promise<void> => {
		try {
			const accounts: string[] = await (window as any).ethereum.request({
				method: "eth_requestAccounts",
			});

			accounts.length && changeAddress(accounts[0]);
			changeWalletConnect(true);
		} catch (error: any) {
			console.log(error);
		}
	};

	const disconnectWallet = () => {
		changeAddress(null);
		changeWalletConnect(false);
		localStorage.removeItem("accessToken");
	};

	return (
		<div className="wallet">
			{isMetamaskInstalled ? (
				(address && <Account address={address} />) || (
					<Button
						title={width > 560 ? `Connect MetaMask` : "Connect"}
						hasSVG
						onClick={connectWallet}
					/>
				)
			) : (
				<Button
					title="Install MetaMask"
					onClick={() => window.open("https://metamask.io/download/", "_blank")}
				/>
			)}
		</div>
	);
};

export { Wallet };
