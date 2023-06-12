interface IItem {
	id: number;
	question: string;
	answer: string;
}

interface IItemProps extends Pick<IItem, "question" | "answer"> {}

export { IItem, IItemProps };
