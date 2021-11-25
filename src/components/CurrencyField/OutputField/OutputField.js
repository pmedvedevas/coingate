import "./OutputField";
import React from "react";
import PropTypes from "prop-types";

export const OutputField = ({ output }) => {
  return <div className="output-field">{output}</div>;
};

OutputField.prototypes = {
    output: PropTypes.number,
}
