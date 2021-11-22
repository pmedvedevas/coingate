import React from "react";
import { ReactComponent as Logo } from "../../assets/svg/Logo.svg";
import { Button } from "../Button";
import { ReactComponent as ArrowRight } from "../../assets/svg/ArrowRight.svg";
import { ReactComponent as BurgerMenu } from "../../assets/svg/BurgerMenu.svg";
import "./Header.scss";

export const Header = () => {
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
        <Button label="Sign Up" type="primary" size="normal" icon={<ArrowRight />} />
      </div>
      <BurgerMenu class="nav-bar__burger-menu"/>
    </header>
  );
};
