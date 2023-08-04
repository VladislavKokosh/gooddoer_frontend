import { AUTH_RESOURCES } from "./auth.constants";
import { IAuthIn, IAuthRes } from "./auth.types";
import { restApi } from "@/api/services";

const authIn = async ({ data }: IAuthIn): Promise<IAuthRes> => {
	return await restApi.request({
		method: "POST",
		url: `/${AUTH_RESOURCES.ENDPOINT}`,
		data: { ...data },
	});
};

export const auth = { authIn };
