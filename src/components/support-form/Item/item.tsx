import { FC } from "react";

import { ISupportFormItemTypes } from "../support-forms.types";

import "./item.scss";

const Item: FC<ISupportFormItemTypes> = ({
	title,
	description,
	svgComponent,
	buttonTitle,
	onClick,
}) => {
	return (
		<div className="support-item">
			<div className="support-item_icon">{svgComponent}</div>
			<div className="support-item_title">{title}</div>
			<div className="support-item_description">{description}</div>
			<div className="support-item_button" onClick={onClick}>
				{buttonTitle}
			</div>
		</div>
	);
};

export { Item };
