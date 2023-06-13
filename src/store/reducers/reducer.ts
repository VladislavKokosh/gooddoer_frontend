import { combineReducers } from "redux";

import { accountReducer } from "./account";

const reducer = combineReducers({
	account: accountReducer,
});

export type AppState = ReturnType<typeof reducer>;

export default reducer;
