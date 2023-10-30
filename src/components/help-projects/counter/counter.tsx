import { FC } from "react";

import { ICounterProps } from "./counter.types";
import "./index.scss";

const Counter: FC<ICounterProps> = ({ count }) => {
	return (
		<div className="counter">
			Explorer <span className="counter_number">{`${count} Projects`}</span>
		</div>
	);
};

export { Counter };
