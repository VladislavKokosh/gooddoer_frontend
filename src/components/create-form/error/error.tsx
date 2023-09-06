import { FC } from "react";

import "./error.scss";
import { IErrorProps } from "./error.types";

const Error: FC<IErrorProps> = ({ error }) => {
	return <div className="error">{error}</div>;
};

export { Error };
