import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { authIn, getNonce } from "./auth.actions";
import { IInitState } from "./auth.types";

const initialState: IInitState = {
	isLoading: false,
	nonce: null,
	walletConnected: false,
	authorization: false,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		changeAuthorization: (
			state,
			{ payload }: PayloadAction<IInitState["authorization"]>
		) => {
			state.authorization = payload;
		},
		changeWalletConnect: (
			state,
			{ payload }: PayloadAction<IInitState["walletConnected"]>
		) => {
			state.walletConnected = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getNonce.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getNonce.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.nonce = payload;
			})
			.addCase(getNonce.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(authIn.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(authIn.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.authorization = true;
				console.log(payload);
				localStorage.setItem("accessToken", payload.accessToken);
			})
			.addCase(authIn.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

const { reducer, actions } = authSlice;

export { reducer, actions };
