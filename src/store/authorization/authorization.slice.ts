import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IInitState } from "./authorization.types";

const initialState: IInitState = {
	walletConnected: false,
	authorization: false,
};

const authorizationSlice = createSlice({
	name: "authorization",
	initialState,
	reducers: {
		changeWalletConnect: (
			state,
			{ payload }: PayloadAction<IInitState["walletConnected"]>
		) => {
			state.walletConnected = payload;
		},
		changeAuthorization: (
			state,
			{ payload }: PayloadAction<IInitState["authorization"]>
		) => {
			state.authorization = payload;
		},
	},
});

const { reducer, actions } = authorizationSlice;

export { reducer, actions };
