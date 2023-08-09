import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getUserData } from "./account.actions";
import { IInitState } from "./account.types";

const initialState: IInitState = {
	isLoading: false,
	address: null,
	isMetamaskInstalled: false,
	username: null,
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
	extraReducers: (builder) => {
		builder
			.addCase(getUserData.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getUserData.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.username = payload.username ? payload.username : state.username;
			})
			.addCase(getUserData.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

const { reducer, actions } = accountSlice;

export { reducer, actions };
