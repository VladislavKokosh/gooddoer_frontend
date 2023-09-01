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

interface IUsernameRes {
	data: {
		username: string;
	};
}

export { INonceRes, IAuthInData, IAuthRes, IUserRes, IUsernameRes };
