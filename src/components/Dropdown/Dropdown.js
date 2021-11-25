import React, { useState } from "react";
import { ReactComponent as ArrowDown } from "../../assets/svg/ArrowDown.svg";
import PropTypes from "prop-types";
import "./Dropdown.scss";

export const Dropdown = ({ options, heading }) => {
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
      <div
        className={
          open
            ? "dropdown__selected dropdown__selected--open"
            : "dropdown__selected"
        }
        onClick={handleOpen}
        value="selected.title"
      >
        <img src={selected.img} alt="" />
        {selected.title}
        <ArrowDown />
      </div>
      {/* If state open is true dropdown options are rendered except for the selected option */}
      {open && (
        <ul className="dropdown__options">
          {options.map(
            (option, index) =>
              option !== selected && (
                <li
                  key={option.title}
                  onClick={handleSelect}
                  className="dropdown__option"
                  value={index}
                >
                  <img src={option.img} alt="" />
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
};
