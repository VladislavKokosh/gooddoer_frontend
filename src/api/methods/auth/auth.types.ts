interface IAuthInData {
	signature: string;
	publicAddress: string;
}

interface IAuthRes {
	data: {
		accessToken: string;
	};
}

interface INonceRes {
	data: string;
}

interface IUser {
	nonce: string;
	publicAddress: string;
	username?: string;
}

interface IUserRes {
	data: {
		user: IUser;
	};
}

export { INonceRes, IAuthInData, IAuthRes, IUserRes };
