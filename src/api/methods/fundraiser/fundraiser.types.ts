interface IFundraiser {
	name: string;
	description: string;
	fundraiserAddress: string;
	fundraisingAmount: string;
	beneficiary: string;
	category: string;
}

interface IFundraisersRes {
	data: IFundraiser[];
}

export { IFundraiser, IFundraisersRes };
