import { FC, memo } from "react";

import { useActions } from "../../../hooks";

import "./item.scss";
import { IItemProps } from "./item.types";

const Item: FC<IItemProps> = ({
	title,
	type,
	description,
	autoCloseTime,
	id,
}) => {
	const { deleteToastrFromQueue } = useActions();

	return (
		<div
			className={`toastr-item ${type}`}
			onClick={(e) => {
				e.stopPropagation();
				deleteToastrFromQueue(id);
			}}
		>
			<div className={`toastr-item_title`}>{title}</div>
			<div className={`toastr-item_description`}>{description}</div>
			<div
				className={"toastr-item_loading"}
				style={{ animationDuration: `${autoCloseTime / 1000}s` }}
			/>
		</div>
	);
};

const MemoItem = memo(Item);

export { MemoItem };
