import "./InputField.scss";
import React from "react";
import PropTypes from "prop-types";

export const InputField = ({ name, type, handleChange, value }) => {
  return (
    <input
      id={name}
      name={name}
      type={type}
      value={value}
      onChange={handleChange}
      className="input-field"
      size=''
    />
  );
};

InputField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.any,
  onChange: PropTypes.func,
};
