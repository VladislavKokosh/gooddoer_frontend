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
		deleteToastrFromQueue: (
			state,
			{ payload }: PayloadAction<string | undefined>
		) => {
			state.queue = !payload
				? state.queue.slice(1)
				: state.queue.filter((q) => q.id !== payload);
		},
	},
});

const { reducer, actions } = toastrSlice;

export { reducer, actions };
