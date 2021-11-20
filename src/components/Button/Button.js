import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import "./Button.scss";

const Size = {
  WIDE: "wide",
  NORMAL: "normal",
};

export const Button = ({ label, onClick, size, isDisabled, icon }) => {
  return (
    <button
      className={classNames({
        btn__wide: size === "wide",
        btn__normal: size === "normal",
        btn__icon: icon != null,
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
  onClick: PropTypes.func,
  size: PropTypes.oneOf(Object.values(Size)).isRequired,
  isDisabled: PropTypes.bool,
  icon: PropTypes.node,
};
