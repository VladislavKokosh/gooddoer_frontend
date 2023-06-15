import { EToastrContent, EToastrType } from "@/enum/toastr";

type TToastrConfig = {
	type: EToastrType;
	title: string;
	description: string;
};

interface IToastrConfig extends Record<EToastrContent, TToastrConfig> {}

export { TToastrConfig, IToastrConfig };
