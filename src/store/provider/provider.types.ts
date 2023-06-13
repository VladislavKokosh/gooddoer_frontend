import { Eip1193Provider } from "ethers";

interface IInitState {
	provider: null | Eip1193Provider;
	selectedAddress: null | string;
	isLoading: boolean;
}

export { IInitState };
