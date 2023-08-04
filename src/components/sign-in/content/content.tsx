import { FC } from "react";
import { Link } from "react-router-dom";

import { Button } from "../..";

import "./content.scss";
import { IContentProps } from "./content.types";

const Content: FC<IContentProps> = ({
	svg: SVG,
	title,
	buttonTitle,
	onClick,
}) => {
	return (
		<div className="signature">
			<div className="signature_warning">
				<SVG className="signature_warning-logo" />
			</div>
			<h2 className="signature_title">{title}</h2>
			{buttonTitle.length > 0 ? (
				<Button title={buttonTitle} onClick={onClick} />
			) : null}
			<Link to={"/"}>
				<h4 className="signature_back">OR GO BACK TO HOMEPAGE</h4>
			</Link>
		</div>
	);
};

export { Content };
