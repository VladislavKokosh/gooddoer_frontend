import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getFundraisers, writeFundraiser } from "./fundraisers.actions";
import { IInitState } from "./fundraisers.types";

const initialState: IInitState = {
	isLoading: false,
	fundraisers: null,
	filterParams: [],
	filteredFundraisers: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		addFilterParam: (state, { payload }: PayloadAction<string>) => {
			if (state.filterParams.includes(payload)) return;
			state.filterParams.push(payload);
		},
		removeFilterParam: (state, { payload }: PayloadAction<string>) => {
			state.filterParams = state.filterParams.filter(
				(param) => param !== payload
			);
		},
		filterFundraisers: (state) => {
			if (state.filterParams.length === 0) {
				state.filteredFundraisers = state.fundraisers;
			} else {
				const filteredData =
					state.fundraisers &&
					state.fundraisers.filter((item) =>
						state.filterParams.includes(item.category)
					);
				state.filteredFundraisers = filteredData;
			}
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getFundraisers.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getFundraisers.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.fundraisers = payload;
				state.filteredFundraisers = payload;
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
