import React, { useState } from "react";
import { ReactComponent as Logo } from "../../assets/svg/Logo.svg";
import { Button } from "../Button";
import { ReactComponent as ArrowRight } from "../../assets/svg/ArrowRight.svg";
import { ReactComponent as BurgerMenu } from "../../assets/svg/BurgerMenu.svg";
import "./Header.scss";

export const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(false);

  window.onclick = ({ target }) => {
    if (
      !target.classList.contains("nav-bar__burger-menu") &&
      !target.classList.contains("burger-icon")
    ) {
      setOpenDropdown(false);
    }
  };

  return (
    <header className="nav-bar">
      <Logo className="nav-bar__logo" />
      <ul className="nav-bar__main-nav">
        <li>Products</li>
        <li>Resources</li>
        <li>Buy Instantly</li>
      </ul>

      <div className="nav-bar__auth-nav">
        <Button label="Log In" type="secondary" size="normal" />
        <Button
          label="Sign Up"
          type="primary"
          size="normal"
          icon={<ArrowRight />}
        />
      </div>
      <button
        className="nav-bar__burger-menu"
        onClick={() => setOpenDropdown(!openDropdown)}
      >
        <BurgerMenu className="burger-icon" />
        {openDropdown && (
          <ul className="nav-bar__dropdown">
            <li>Products</li>
            <li>Resources</li>
            <li>Buy Instantly</li>
          </ul>
        )}
      </button>
    </header>
  );
};
