interface IUploadInData {
	file: File;
}

interface IUploadRes {
	data: {
		name: string;
		ipfsUrl: string;
	};
}

export { IUploadInData, IUploadRes };
