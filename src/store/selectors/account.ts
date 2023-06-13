import { createSelector } from "reselect";

import { AppState } from "../reducers/reducer";

const getAccount = (state: AppState) => state.account.address;
const getError = (state: AppState) => state.account.error;

export const getAccountSelector = createSelector(
	getAccount,
	(address) => address
);
export const getAccountErrorSelector = createSelector(
	getError,
	(error) => error
);
