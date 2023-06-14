import { ethers } from "ethers";
import { useEffect, useState } from "react";

import { Button } from "../../button";

import { Account } from "./account";
import "./wallet.scss";

const Wallet = () => {
	const [isMetamaskInstalled, setIsMetamaskInstalled] =
		useState<boolean>(false);
	const [account, setAccount] = useState<string | null>(null);

	useEffect(() => {
		if ((window as any).ethereum) {
			setIsMetamaskInstalled(true);
			getAccounts();

			(window as any).ethereum.on("accountsChanged", disconnectWallet);
		}
	}, []);

	const getAccounts = async (): Promise<void> => {
		const accounts: string[] = await (window as any).ethereum.request({
			method: "eth_accounts",
		});
		if (accounts.length > 0) {
			const account: string = ethers.getAddress(accounts[0]);
			setAccount(account);
		}
	};

	const connectWallet = async (): Promise<void> => {
		try {
			const accounts: string[] = await (window as any).ethereum.request({
				method: "eth_requestAccounts",
			});

			accounts.length && setAccount(accounts[0]);
		} catch (error: any) {
			console.log(error);
		}
	};

	const disconnectWallet = () => {
		setAccount(null);
	};

	return (
		<div className="wallet">
			{isMetamaskInstalled ? (
				(account && <Account address={account} />) || (
					<Button title="Connect MetaMask" hasSVG onClick={connectWallet} />
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
