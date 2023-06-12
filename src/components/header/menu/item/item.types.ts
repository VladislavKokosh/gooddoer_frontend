interface IMenuItem {
	id: number;
	title: string;
	link: string;
}

interface IMenuItemProps extends Pick<IMenuItem, "title" | "link"> {}

export { IMenuItem, IMenuItemProps };
