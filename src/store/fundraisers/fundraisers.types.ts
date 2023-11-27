interface Fundraiser {
	name: string;
	description: string;
	fundraiserAddress: string;
	fundraisingAmount: string;
	beneficiary: string;
	category: string;
	docs: string;
	image: {
		data: Buffer;
		contentType: string;
	};
}

interface IInitState {
	isLoading: boolean;
	fundraisers: null | Fundraiser[];
	searchText: string;
	filterParams: string[];
	filteredFundraisers: null | Fundraiser[];
	foundFundraisers: null | Fundraiser[];
}

export { IInitState };
