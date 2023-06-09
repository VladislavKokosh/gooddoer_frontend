import { SyntheticEvent } from "react";

export interface IButtonProps {
	title: string;
	onClick?: (e: SyntheticEvent) => void | Promise<void>;
}
