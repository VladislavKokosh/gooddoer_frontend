import { FC } from "react";

import "./feature.scss";
import { IFeatureProps } from "./feature.types";

const Feature: FC<IFeatureProps> = ({
	image,
	title,
	description,
	imagePosition,
}) => {
	return (
		<div className={`feature ${imagePosition}`}>
			<div className="feature-container">
				<div className="feature-container_title">{title}</div>
				<div className="feature-container_description">{description}</div>
			</div>
			<div
				className="feature-image"
				style={{
					background: `url(${image}) center/cover
			no-repeat`,
				}}
			/>
		</div>
	);
};

export { Feature };
