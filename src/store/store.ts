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
import * as fundraiserAsyncActions from "./fundraisers/fundraisers.actions";
import {
	actions as fundraiserActions,
	reducer as fundraiserReducer,
} from "./fundraisers/fundraisers.slice";
import {
	actions as menuActions,
	reducer as menuReducer,
} from "./menu/menu.slice";
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
		fundraisers: fundraiserReducer,
		menu: menuReducer,
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
	...fundraiserActions,
	...fundraiserAsyncActions,
	...menuActions,
};

export { store, allActions };
export type { TStore, AppDispatch };
