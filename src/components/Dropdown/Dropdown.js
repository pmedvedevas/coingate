import React, { useState } from "react";
import { ReactComponent as ArrowDown } from "../../assets/svg/ArrowDown.svg";
import PropTypes from "prop-types";
import "./Dropdown.scss";

const assetsPath = require.context(
  "../../assets/drop-icons",
  false,
  /\.(png|jpe?g|svg)$/
);

export const Dropdown = ({ options, heading, size }) => {
  const [selected, setSelected] = useState(options[0]);
  const [open, setOpen] = useState(false);

  const handleSelect = ({ target }) => {
    setSelected(options[target.value]);
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(!open);
  };

  window.onclick = ({ target }) => {
    if (!target.classList.contains("dropdown__selected")) {
      setOpen(false);
    }
  };

  return (
    <div className="dropdown">
      {/* Below - renders selected option with its icon*/}
      {heading && <p className="dropdown__heading">{heading}</p>}
      <button
        className={
          size === "big"
            ? open
              ? "dropdown__selected dropdown__selected--big dropdown__selected--open"
              : "dropdown__selected dropdown__selected--big"
            : open
            ? "dropdown__selected dropdown__selected--small dropdown__selected--open"
            : "dropdown__selected dropdown__selected--small"
        }
        onClick={handleOpen}
        value={selected.title}
      >
        {selected.img && (
          <img
            src={assetsPath(selected.img).default}
            alt=""
            className="dropdown__selected-icon"
          />
        )}
        {selected.title}
        <ArrowDown />
      </button>
      {/* If state open is true dropdown options are rendered except for the selected option */}
      {open && (
        <ul className="dropdown__options">
          {options.map(
            (option, index) =>
              option !== selected && (
                <li
                  key={option.title}
                  onClick={handleSelect}
                  className={
                    size === "big"
                      ? "dropdown__option dropdown__option--big"
                      : "dropdown__option"
                  }
                  value={index}
                >
                  {assetsPath(option.img) && (
                    <img
                      src={assetsPath(option.img).default}
                      alt=""
                      className="dropdown__option-icon"
                    />
                  )}
                  {option.title}
                </li>
              )
          )}
        </ul>
      )}
    </div>
  );
};

Dropdown.propTypes = {
  options: PropTypes.array.isRequired,
  heading: PropTypes.string,
};
