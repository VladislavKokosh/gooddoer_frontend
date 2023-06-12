import { FC } from "react";

import "./item.scss";
import { IItemProps } from "./item.types";

const Item: FC<IItemProps> = ({ question, answer }) => {
	return (
		<div className="question-item">
			<h3>{question}</h3>
			<div>{answer}</div>
		</div>
	);
};

export { Item };
