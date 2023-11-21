interface IFileInData {
	file: File;
}

interface IFileRes {
	data: {
		name: string;
		ipfsUrl: string;
	};
}

interface IImageInData {
	file: File;
}

interface IImageRes {
	data: {
		message: string;
		id: string;
	};
}

export { IFileInData, IFileRes, IImageInData, IImageRes };
