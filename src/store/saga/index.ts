import { all, takeEvery } from "redux-saga/effects";

import { GET_ACCOUNT } from "../types/account";

import { getAccount } from "./account";

function* watchAccount() {
	yield takeEvery(GET_ACCOUNT, getAccount);
}

export default function* rootSaga() {
	yield all([watchAccount()]);
}
