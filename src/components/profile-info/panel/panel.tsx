import { FC } from "react";

import "./panel.scss";
import { IPanelProps } from "./panel.types";

const Panel: FC<IPanelProps> = ({
	textLeft,
	valueLeft,
	textRight,
	valueRight,
}) => {
	return (
		<div className="panel">
			<div className="panel-left">
				<div>{textLeft}</div>
				<div>{valueLeft}</div>
			</div>
			<div className="panel-right">
				<div>{textRight}</div>
				<div>${valueRight}</div>
			</div>
		</div>
	);
};

export { Panel };
