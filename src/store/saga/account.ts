import { put } from "redux-saga/effects";

import {
	getAccountAsyncFailure,
	getAccountAsyncSuccess,
} from "../actions/account";

interface WindowWithEthereum extends Window {
	ethereum?: any;
}

export function* getAccount(): Generator<any, void, WindowWithEthereum> {
	try {
		const accounts = yield (window as WindowWithEthereum).ethereum.request({
			method: "eth_accounts",
		});
		const account = accounts[0];
		yield put(getAccountAsyncSuccess({ address: `${account}` }));
	} catch (error: any) {
		yield put(getAccountAsyncFailure({ error: error }));
	}
}
