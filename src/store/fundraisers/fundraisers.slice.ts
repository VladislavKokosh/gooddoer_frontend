import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { getFundraisers, writeFundraiser } from "./fundraisers.actions";
import { IInitState } from "./fundraisers.types";

const initialState: IInitState = {
	isLoading: false,
	fundraisers: null,
	searchText: "",
	filterParams: [],
	filteredFundraisers: null,
	foundFundraisers: null,
};

const fundraiserSlice = createSlice({
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
		changeSearchText: (state, { payload }: PayloadAction<string>) => {
			state.searchText = payload;
			if (payload !== "") {
				const foundFundraisers =
					state.filteredFundraisers &&
					state.filteredFundraisers.filter((item) =>
						item.name
							.trim()
							.toLowerCase()
							.includes(payload.trim().toLowerCase())
					);
				state.foundFundraisers = foundFundraisers;
			} else {
				state.foundFundraisers =
					state.filterParams.length === 0
						? state.fundraisers
						: state.filteredFundraisers || state.fundraisers;
			}
		},
		filterFundraisers: (state) => {
			if (state.filterParams.length === 0) {
				state.filteredFundraisers = state.fundraisers;
				state.foundFundraisers = state.fundraisers;
			} else {
				const filteredData =
					state.fundraisers &&
					state.fundraisers.filter((item) =>
						state.filterParams.includes(item.category)
					);
				const finalData = state.searchText
					? filteredData?.filter((item) =>
							item.name
								.trim()
								.toLowerCase()
								.includes(state.searchText.trim().toLowerCase())
					  ) || []
					: filteredData;

				state.filteredFundraisers = filteredData;
				state.foundFundraisers = finalData;
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
				state.foundFundraisers = payload;
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

const { reducer, actions } = fundraiserSlice;

export { reducer, actions };
