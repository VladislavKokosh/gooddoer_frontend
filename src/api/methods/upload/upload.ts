import { restApi } from "../../services";

import { UPLOAD_RESOURCES } from "./upload.constants";
import { IUploadInData, IUploadRes } from "./upload.types";

const uploadFile = async ({ file }: IUploadInData): Promise<IUploadRes> => {
	const headers = {
		"Content-Type": "multipart/form-data",
	};

	return await restApi.request({
		method: "POST",
		url: `/${UPLOAD_RESOURCES.ENDPOINT.UPLOAD}`,
		data: { file },
		headers,
	});
};

export const upload = { uploadFile };
