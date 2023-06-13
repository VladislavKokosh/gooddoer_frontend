export const GET_ACCOUNT = "ACCOUNT/GET ACCOUNT";
export const GET_ACCOUNT_SUCCESS = "ACCOUNT/GET ACCOUNT SUCCESS";
export const GET_ACCOUNT_FAILURE = "ACCOUNT/GET ACCOUNT FAILURE";

export interface AccountState {
	address: string;
	error: string;
}

export interface AccountSuccessPayload {
	address: string;
}

export interface AccountFailurePayload {
	error: string;
}

export interface GetAccountRequest {
	type: typeof GET_ACCOUNT;
}

export type GetAccountSuccess = {
	type: typeof GET_ACCOUNT_SUCCESS;
	payload: AccountSuccessPayload;
};

export type GetAccountFailure = {
	type: typeof GET_ACCOUNT_FAILURE;
	payload: AccountFailurePayload;
};

export type AccountAction =
	| GetAccountRequest
	| GetAccountSuccess
	| GetAccountFailure;
