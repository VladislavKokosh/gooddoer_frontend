import { createAsyncThunk } from "@reduxjs/toolkit";

import { getProvider } from "../../utils";

const getProviderAction = createAsyncThunk("account/getProvider", async () => {
	const provider = await getProvider();

	if (provider) {
		return provider;
	} else {
		throw new Error("Metamask не установлен");
	}
});

export { getProviderAction };
