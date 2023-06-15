import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IInitState } from "./modal.types";

const initialState: IInitState = {
	type: null,
};

const modalSlice = createSlice({
	name: "modal",
	initialState,
	reducers: {
		changeVisibleModal: (
			state,
			{ payload }: PayloadAction<IInitState["type"]>
		) => {
			state.type = payload;
		},
	},
});

const { reducer, actions } = modalSlice;

export { reducer, actions };
