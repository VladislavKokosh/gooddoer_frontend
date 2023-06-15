import { EToastrContent } from "../../enum";

interface Item {
	id: string;
	content: EToastrContent;
}

interface IInitState {
	queue: Item[];
}

export { IInitState, Item };
