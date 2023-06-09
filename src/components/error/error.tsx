import { useNavigate, useRouteError } from "react-router-dom";

import { errorMessage } from "../../utils";
import { Button } from "../button";

import "./error.scss";

const ErrorPage = () => {
	const error = useRouteError();
	const navigate = useNavigate();

	return (
		<div className="error-page">
			<h1 className="error-page_title">Oops!</h1>
			<p className="error-page_description">
				Sorry, an unexpected error has occurred.
			</p>
			<p className="error-page_error">{errorMessage(error)}</p>
			<Button title="Go to main" onClick={() => navigate("/")} />
		</div>
	);
};

export { ErrorPage };
