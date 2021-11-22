import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.scss";

const size = {
  WIDE: "wide",
  NORMAL: "normal",
};

const type = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
}

export const Button = ({ label, type, onClick, size, isDisabled, icon }) => {
  return (
    <button
      className={classNames({
        btn__wide: size === "wide",
        btn__normal: size === "normal",
        btn__icon: icon != null,
        btn__primary: type === "primary",
        btn__secondary: type === "secondary",
      })}
      disabled={isDisabled}
      onClick={isDisabled ? () => void 0 : onClick}
    >
      {label}
      {icon ? <div className="btn-icon">{icon}</div> : ""}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(Object.values(type)),
  onClick: PropTypes.func,
  size: PropTypes.oneOf(Object.values(size)).isRequired,
  isDisabled: PropTypes.bool,
  icon: PropTypes.node,
};
