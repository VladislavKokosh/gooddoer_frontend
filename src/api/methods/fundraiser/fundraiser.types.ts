interface IFundraiser {
	name: string;
	description: string;
	fundraiserAddress: string;
	fundraisingAmount: string;
	beneficiary: string;
	category: string;
	docs: string;
	image: File;
}

interface IFundraisersData extends Omit<IFundraiser, "image"> {
	image: {
		data: Buffer;
		contentType: string;
	};
}

interface IFundraisersRes {
	data: IFundraisersData[];
}

export { IFundraiser, IFundraisersRes };
