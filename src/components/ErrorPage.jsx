import React from "react";
import { useRouteError } from "react-router-dom";
import PropTypes from "prop-types";

const ErrorPage = ({
  defaultMessage = "Sorry, an unexpected error has occurred.",
}) => {
  const error = useRouteError();

  return (
    <div className="error-page">
      <div className="error-container">
        <h1>{error}</h1>
        <h2>{defaultMessage}</h2>
      </div>
    </div>
  );
};

ErrorPage.propTypes = {
  defaultMessage: PropTypes.string,
};

export default ErrorPage;
