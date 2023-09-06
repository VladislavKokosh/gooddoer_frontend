interface ISupportFormItemTypes {
	id: number;
	title: string;
	description: string;
	svgComponent: React.ReactNode;
	buttonTitle: string;
	onClick: () => void;
}

export { ISupportFormItemTypes };
