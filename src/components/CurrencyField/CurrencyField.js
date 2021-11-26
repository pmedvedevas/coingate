import "./CurrencyField.scss";
import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "../Dropdown";
import { InputField } from "./InputField/InputField";
import { OutputField } from "./OutputField/OutputField";

export const CurrencyField = ({ purpose, currencies }) => {
  return (
    <div className="currency-field">
      <div className="currency-field__label">
        {purpose === "pay" ? "Pay" : "Buy"}
      </div>
      <div className="currency-field__display">
        {purpose === "pay" && <InputField name="pay" type="number" />}
        {purpose === "buy" && <OutputField output={0.00217} />}
      </div>
      <div className="currency-field__currency">
        {currencies && <Dropdown options={currencies} />}
      </div>
    </div>
  );
};

CurrencyField.propTypes = {
  purposePay: PropTypes.bool.isRequired,
  currencies: PropTypes.array,
};
