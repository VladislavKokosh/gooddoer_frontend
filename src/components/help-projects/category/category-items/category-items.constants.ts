interface ICategoryItems {
	id: number;
	title: string;
	link: string;
}

interface ICategoryItemProps extends Pick<ICategoryItems, "title" | "link"> {}

export { ICategoryItems, ICategoryItemProps };

export const items: ICategoryItems[] = [
	{
		id: 1,
		title: "Art & Culture",
		link: "/art",
	},
	{
		id: 2,
		title: "Education",
		link: "/education",
	},
	{
		id: 3,
		title: "Health",
		link: "/health",
	},
	{
		id: 4,
		title: "Technology",
		link: "/technology",
	},
];
