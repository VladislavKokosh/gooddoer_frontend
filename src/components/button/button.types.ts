import { SyntheticEvent } from "react";

export interface IButtonProps {
	title: string;
	hasSVG?: boolean;
	onClick?: (e: SyntheticEvent) => void | Promise<void>;
}
