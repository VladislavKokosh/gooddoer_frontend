import { TToastrConfig } from "../toastr.types";

interface IItemProps extends TToastrConfig {
	autoCloseTime: number;
	id: string;
}

export { IItemProps };
