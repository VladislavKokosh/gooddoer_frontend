import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IInitState } from "./account.types";

const initialState: IInitState = {
	address: null,
	isMetamaskInstalled: false,
};

const accountSlice = createSlice({
	name: "authorization",
	initialState,
	reducers: {
		changeAddress: (
			state,
			{ payload }: PayloadAction<IInitState["address"]>
		) => {
			state.address = payload;
		},
		changeMetamaskIntalledStatus: (
			state,
			{ payload }: PayloadAction<IInitState["isMetamaskInstalled"]>
		) => {
			state.isMetamaskInstalled = payload;
		},
	},
});

const { reducer, actions } = accountSlice;

export { reducer, actions };
