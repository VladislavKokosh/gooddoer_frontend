import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getProviderAction } from "./provider.actions";
import { IInitState } from "./provider.types";

const initialState: IInitState = {
	isLoading: false,
	provider: null,
	selectedAddress: null,
};

const providerSlice = createSlice({
	name: "provider",
	initialState,
	reducers: {
		changeProvider: (
			state,
			{ payload }: PayloadAction<IInitState["provider"]>
		) => {
			state.provider = payload;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProviderAction.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProviderAction.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.provider = payload;
				state.selectedAddress = payload.selectedAddress;
			})
			.addCase(getProviderAction.rejected, (state) => {
				state.isLoading = false;
				state.provider = null;
			});
	},
});

const { reducer, actions } = providerSlice;

export { reducer, actions };
