import React from "react";
import PropTypes from "prop-types";
import "./ErrorPage.module.scss";

const ErrorPage = ({
  defaultMessage = "Sorry, an unexpected error has occurred.",
}) => {
  return (
    <div className="error-page">
      <div className="error-container">
        <h2>{defaultMessage}</h2>
      </div>
    </div>
  );
};

ErrorPage.propTypes = {
  defaultMessage: PropTypes.string,
};

export default ErrorPage;
