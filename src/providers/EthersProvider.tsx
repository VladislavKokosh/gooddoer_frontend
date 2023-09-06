import { ethers } from "ethers";
import { FC, createContext } from "react";

import { IEthersProviderProps } from "./EthersProvider.types";

const EthersContext = createContext<null | ethers.providers.Web3Provider>(null);

const EthersProvider: FC<IEthersProviderProps> = ({ children }) => {
	return (
		<EthersContext.Provider
			value={
				window.ethereum
					? new ethers.providers.Web3Provider(window.ethereum as any)
					: null
			}
		>
			{children}
		</EthersContext.Provider>
	);
};

export { EthersContext, EthersProvider };
