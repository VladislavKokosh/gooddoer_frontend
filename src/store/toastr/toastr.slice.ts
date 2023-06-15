import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IInitState, Item } from "./toastr.types";

const initialState: IInitState = {
	queue: [],
};

const toastrSlice = createSlice({
	name: "toastr",
	initialState,
	reducers: {
		addToastrToQueue: (state, { payload }: PayloadAction<Item>) => {
			state.queue.push(payload);
		},
		deleteToastrFromQueue: (state) => {
			state.queue.shift();
		},
	},
});

const { reducer, actions } = toastrSlice;

export { reducer, actions };
