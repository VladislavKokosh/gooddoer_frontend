import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { IInitState } from "./menu.types";

const initialState: IInitState = {
	visible: false,
};

const menuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {
		changeVisibleMenu: (state, { payload }: PayloadAction<boolean>) => {
			state.visible = payload;
		},
	},
});

const { reducer, actions } = menuSlice;

export { reducer, actions };
