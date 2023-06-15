import { configureStore } from "@reduxjs/toolkit";

import {
	actions as modalActions,
	reducer as modalReducer,
} from "./modal/modal.slice";
import {
	actions as toastrActions,
	reducer as toastrReducer,
} from "./toastr/toastr.slice";

const store = configureStore({
	reducer: {
		modal: modalReducer,
		toastr: toastrReducer,
	},
	devTools: true,
});

type TStore = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const allActions = {
	...modalActions,
	...toastrActions,
};

export { store, allActions };
export type { TStore, AppDispatch };
