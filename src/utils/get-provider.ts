import MetaMaskSDK from "@metamask/sdk";

export async function getProvider() {
	const MMSDK = new MetaMaskSDK();
	const ethereum = MMSDK.getProvider();

	if (ethereum) {
		return ethereum;
	} else {
		return null;
	}
}
