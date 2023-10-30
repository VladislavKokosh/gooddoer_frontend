interface Fundraiser {
	name: string;
	description: string;
	fundraiserAddress: string;
	fundraisingAmount: string;
	beneficiary: string;
	category: string;
}

interface IInitState {
	isLoading: boolean;
	fundraisers: null | Fundraiser[];
}

export { IInitState };
