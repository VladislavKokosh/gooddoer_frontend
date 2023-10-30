import { restApi } from "../../services";

import { FUNDRAISER_RESOURCES } from "./fundraiser.constants";
import { IFundraiser, IFundraisersRes } from "./fundraiser.types";

const getFundraisers = async (): Promise<IFundraisersRes> => {
	return await restApi.request({
		method: "GET",
		url: `/${FUNDRAISER_RESOURCES.ENDPOINT.FUNDRAISER}`,
	});
};

const writeNewFundraiser = async ({
	name,
	description,
	fundraiserAddress,
	fundraisingAmount,
	beneficiary,
	category,
}: IFundraiser): Promise<void> => {
	return await restApi.request({
		method: "POST",
		url: `/${FUNDRAISER_RESOURCES.ENDPOINT.FUNDRAISER}`,
		data: {
			name,
			description,
			fundraiserAddress,
			fundraisingAmount,
			beneficiary,
			category,
		},
	});
};

export const fundraiser = { getFundraisers, writeNewFundraiser };
