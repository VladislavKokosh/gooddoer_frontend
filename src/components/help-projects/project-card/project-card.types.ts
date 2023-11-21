interface IProjectCardProps {
	name: string;
	description: string;
	fundraiserAddress: string;
	fundraisingAmount: string;
	beneficiary: string;
	image: {
		data: Buffer;
		contentType: string;
	};
}

export { IProjectCardProps };
