import React from "react";
import { useRouteError, useNavigate } from "react-router-dom";
import { errorMessage } from "../../utils";
import "./error.scss";
import { Button } from "../button";

const ErrorPage: React.FC = () => {
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
