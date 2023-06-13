import {
	AccountFailurePayload,
	AccountSuccessPayload,
	GET_ACCOUNT,
	GET_ACCOUNT_FAILURE,
	GET_ACCOUNT_SUCCESS,
	GetAccountFailure,
	GetAccountRequest,
	GetAccountSuccess,
} from "../types/account";

export const getAccountAsync = (): GetAccountRequest => ({
	type: GET_ACCOUNT,
});

export const getAccountAsyncSuccess = (
	data: AccountSuccessPayload
): GetAccountSuccess => ({
	type: GET_ACCOUNT_SUCCESS,
	payload: data,
});

export const getAccountAsyncFailure = (
	error: AccountFailurePayload
): GetAccountFailure => ({
	type: GET_ACCOUNT_FAILURE,
	payload: error,
});
