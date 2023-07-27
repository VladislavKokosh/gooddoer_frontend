interface IMenuAccountItem {
	id: number;
	title: string;
	link: string;
}

interface IMenuAccountItemProps
	extends Pick<IMenuAccountItem, "title" | "link"> {
	onClick: () => void;
}

export { IMenuAccountItem, IMenuAccountItemProps };
