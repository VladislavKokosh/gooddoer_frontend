import {
	AccountAction,
	AccountState,
	GET_ACCOUNT_FAILURE,
	GET_ACCOUNT_SUCCESS,
} from "../types/account";

const initState: AccountState = {
	address: "",
	error: "",
};

export const accountReducer = (state = initState, action: AccountAction) => {
	switch (action.type) {
		case GET_ACCOUNT_SUCCESS:
			return { ...state, address: action.payload.address };
		case GET_ACCOUNT_FAILURE:
			return { ...state, address: action.payload.error };
		default:
			return state;
	}
};
