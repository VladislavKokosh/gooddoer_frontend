import { configureStore } from "@reduxjs/toolkit";

import {
	actions as modalActions,
	reducer as modalReducer,
} from "./modal/modal.slice";

const store = configureStore({
	reducer: {
		modal: modalReducer,
	},
	devTools: true,
});

type TStore = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const allActions = {
	...modalActions,
};

export { store, allActions };
export type { TStore, AppDispatch };
