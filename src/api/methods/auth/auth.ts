import { restApi } from "../../services";

import { AUTH_RESOURCES } from "./auth.constants";
import {
	IAuthInData,
	IAuthRes,
	INonceRes,
	IUserRes,
	IUsernameRes,
} from "./auth.types";

const getNonceAuth = async (publicAddress: string): Promise<INonceRes> => {
	return await restApi.request({
		method: "GET",
		url: `/${AUTH_RESOURCES.ENDPOINT.USER}/${AUTH_RESOURCES.PATH.NONCE}/${publicAddress}`,
	});
};

const authIn = async ({
	signature,
	publicAddress,
}: IAuthInData): Promise<IAuthRes> => {
	return await restApi.request({
		method: "POST",
		url: `/${AUTH_RESOURCES.ENDPOINT.USER}/${AUTH_RESOURCES.PATH.AUTH}`,
		data: { signature, publicAddress },
	});
};

const getUserData = async (token: string): Promise<IUserRes> => {
	const headers = {
		Authorization: token,
	};

	return await restApi.request({
		method: "GET",
		url: `/${AUTH_RESOURCES.ENDPOINT.USER}`,
		headers: headers,
	});
};

const updateUsername = async (
	token: string,
	username: string
): Promise<IUsernameRes> => {
	const headers = {
		Authorization: token,
	};

	return await restApi.request({
		method: "PUT",
		url: `/${AUTH_RESOURCES.ENDPOINT.USER}`,
		data: { username },
		headers: headers,
	});
};

export const auth = { getNonceAuth, authIn, getUserData, updateUsername };
