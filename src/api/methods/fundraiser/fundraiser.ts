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
	docs,
	image,
}: IFundraiser): Promise<void> => {
	const formData = new FormData();
	formData.append("name", name);
	formData.append("description", description);
	formData.append("fundraiserAddress", fundraiserAddress);
	formData.append("fundraisingAmount", fundraisingAmount);
	formData.append("beneficiary", beneficiary);
	formData.append("category", category);
	formData.append("docs", docs);
	formData.append("file", image);

	const headers = {
		"Content-Type": "multipart/form-data",
	};

	await restApi.request({
		method: "POST",
		url: `/${FUNDRAISER_RESOURCES.ENDPOINT.FUNDRAISER}`,
		data: formData,
		headers,
	});
};

export const fundraiser = { getFundraisers, writeNewFundraiser };
