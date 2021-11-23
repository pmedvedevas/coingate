import React from "react";
import { Header } from "../Header";
import { CrookedContainer } from "../CrookedContainer";
import "./Layout.scss";
import PropTypes from "prop-types";

export const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Header />
      <main className="layout__content">
        <CrookedContainer />
        {children}
      </main>
    </div>
  );
};
Layout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};
