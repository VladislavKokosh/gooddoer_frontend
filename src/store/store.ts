import { configureStore } from "@reduxjs/toolkit";

import * as accountAsyncActions from "./account/account.actions";
import {
	actions as accountActions,
	reducer as accountReducer,
} from "./account/account.slice";
import * as authAsyncActions from "./auth/auth.actions";
import {
	actions as authActions,
	reducer as authReducer,
} from "./auth/auth.slice";
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
		account: accountReducer,
		auth: authReducer,
	},
	devTools: true,
});

type TStore = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const allActions = {
	...modalActions,
	...toastrActions,
	...authActions,
	...accountActions,
	...authAsyncActions,
	...accountAsyncActions,
};

export { store, allActions };
export type { TStore, AppDispatch };
