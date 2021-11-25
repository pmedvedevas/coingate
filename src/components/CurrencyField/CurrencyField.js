import "./CurrencyField.scss";
import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as EuroIcon } from "../../assets/svg/Euro.svg";
import { ReactComponent as ArrowDown } from "../../assets/svg/ArrowDown.svg";
import { ReactComponent as BitcoinIcon } from "../../assets/svg/Bitcoin.svg";
import { InputField } from "./InputField/InputField";
import { OutputField } from "./OutputField/OutputField";

export const CurrencyField = ({ purposePay }) => {
  return (
    <div className="currency-field">
      <div className="currency-field__label">{purposePay ? "Pay" : "Buy"}</div>
      <div className="currency-field__display">
        {purposePay ? (
          <InputField name="pay" type="number" />
        ) : (
          <OutputField output={0.00217} />
        )}
      </div>
      <div className="currency-field__currency">
        {purposePay ? (
          <EuroIcon className="currency-field__icon" />
        ) : (
          <BitcoinIcon className="currency-field__icon" />
        )}
        {purposePay ? "EUR" : "BTC"}
        <ArrowDown />
      </div>
    </div>
  );
};

CurrencyField.propTypes = {
  purposePay: PropTypes.bool.isRequired,
};
