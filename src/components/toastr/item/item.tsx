import { FC, memo } from "react";

import { TToastrConfig } from "../toastr.types";

import "./item.scss";

const Item: FC<TToastrConfig> = ({ title, type, description }) => {
	return (
		<div className={`toastr-item ${type}`}>
			<div className={`toastr-item_title`}>{title}</div>
			<div className={`toastr-item_description`}>{description}</div>
		</div>
	);
};

const MemoItem = memo(Item);

export { MemoItem };
