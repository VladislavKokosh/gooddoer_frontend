import { configureStore } from "@reduxjs/toolkit";

import {
	actions as accountActions,
	reducer as accountReducer,
} from "./account/account.slice";
import {
	actions as authorizationActions,
	reducer as authorizationReducer,
} from "./authorization/authorization.slice";
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
		authorization: authorizationReducer,
		account: accountReducer,
	},
	devTools: true,
});

type TStore = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const allActions = {
	...modalActions,
	...toastrActions,
	...authorizationActions,
	...accountActions,
};

export { store, allActions };
export type { TStore, AppDispatch };
