import { FC } from "react";

import { useImagePreload } from "../../hooks";
import { LoaderImage } from "../loader-image";

import "./feature.scss";
import { IFeatureProps } from "./feature.types";

const Feature: FC<IFeatureProps> = ({
	image,
	title,
	description,
	imagePosition,
}) => {
	const imageLoaded = useImagePreload(image);

	return (
		<div className={`feature ${imagePosition}`}>
			<div className="feature-container">
				<div className="feature-container_title">{title}</div>
				<div className="feature-container_description">{description}</div>
			</div>
			{imageLoaded ? (
				<img className="feature-image" src={image} alt="" />
			) : (
				<LoaderImage />
			)}
		</div>
	);
};

export { Feature };
