import { createSlice } from "@reduxjs/toolkit";

import { getFundraisers, writeFundraiser } from "./fundraisers.actions";
import { IInitState } from "./fundraisers.types";

const initialState: IInitState = {
	isLoading: false,
	fundraisers: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getFundraisers.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getFundraisers.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.fundraisers = payload;
			})
			.addCase(getFundraisers.rejected, (state) => {
				state.isLoading = false;
			})
			.addCase(writeFundraiser.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(writeFundraiser.fulfilled, (state) => {
				state.isLoading = false;
			})
			.addCase(writeFundraiser.rejected, (state) => {
				state.isLoading = false;
			});
	},
});

const { reducer, actions } = authSlice;

export { reducer, actions };
