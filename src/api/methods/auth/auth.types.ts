import { IReq } from "../../api.types";

interface IAuthInData {
	signature: string;
	publicAddress: string;
}

interface IAuthRes {
	accessToken: string;
}

interface IAuthIn extends IReq<null, IAuthInData> {}

export { IAuthIn, IAuthInData, IAuthRes };
