interface IContentProps {
	svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
	title: string;
	buttonTitle: string;
	onClick?: () => void;
}

export { IContentProps };
