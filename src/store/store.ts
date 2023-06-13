import { configureStore } from "@reduxjs/toolkit";

import * as providerAsyncActions from "./provider/provider.actions";
import { reducer as providerReducer } from "./provider/provider.slice";

const store = configureStore({
	reducer: {
		provider: providerReducer,
	},
	devTools: true,
});

type TStore = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

const allActions = {
	...providerAsyncActions,
};

export { store, allActions };
export type { TStore, AppDispatch };
