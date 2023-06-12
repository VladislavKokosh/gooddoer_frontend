import { FC } from "react";

import "./icon-comment.scss";
import { IIconCommentProps } from "./icon-comment.types";

const IconComment: FC<IIconCommentProps> = ({
	icon,
	width,
	height,
	borderThickness,
	borderColor,
}) => {
	return (
		<div
			className="icon-comment"
			style={{
				background: `url(${icon}) center/cover no-repeat`,
				maxWidth: `${width}px`,
				maxHeight: `${height}px`,
				minWidth: `${width}px`,
				minHeight: `${height}px`,
				border: `${borderThickness}px solid ${borderColor}`,
			}}
		/>
	);
};

export { IconComment };
