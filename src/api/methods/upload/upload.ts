import { restApi } from "../../services";

import { UPLOAD_RESOURCES } from "./upload.constants";
import { IFileInData, IFileRes, IImageInData, IImageRes } from "./upload.types";

const uploadFile = async ({ file }: IFileInData): Promise<IFileRes> => {
	const headers = {
		"Content-Type": "multipart/form-data",
	};

	return await restApi.request({
		method: "POST",
		url: `/${UPLOAD_RESOURCES.ENDPOINT.FILE}`,
		data: { file },
		headers,
	});
};

const uploadImage = async ({ file }: IImageInData): Promise<IImageRes> => {
	const headers = {
		"Content-Type": "multipart/form-data",
	};

	return await restApi.request({
		method: "POST",
		url: `/${UPLOAD_RESOURCES.ENDPOINT.IMAGE}`,
		data: { file },
		headers,
	});
};

export const upload = { uploadFile, uploadImage };
