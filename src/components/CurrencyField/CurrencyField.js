import "./CurrencyField.scss";
import React from "react";
import PropTypes from "prop-types";
import { Dropdown } from "../Dropdown";
import { InputField } from "./InputField/InputField";
import { OutputField } from "./OutputField/OutputField";

export const CurrencyField = ({
  purpose,
  currencies,
  defaultSelection,
  amountToPay,
  setAmountToPay,
  setCryptoToBuy,
  cryptoToBuy,
  amountToBuy,
  setPaymentCurrency,
}) => {
  const defaultFiltered = currencies.filter(
    (item) => item.title === defaultSelection
  );
  return (
    <div className="currency-field">
      <div className="currency-field__label">
        {purpose === "pay" ? "Pay" : "Buy"}
      </div>
      <div className="currency-field__display">
        {purpose === "pay" && (
          <InputField
            name="pay"
            type="number"
            value={amountToPay}
            handleChange={({ target }) => setAmountToPay(target.value)}
          />
        )}
        {purpose === "buy" && <OutputField output={amountToBuy} />}
      </div>
      <div className="currency-field__currency">
        <Dropdown
          options={currencies}
          defaultSelection={defaultFiltered[0]}
          setCryptoToBuy={setCryptoToBuy}
          cryptoToBuy={cryptoToBuy}
          setPaymentCurrency={setPaymentCurrency}
        />
      </div>
    </div>
  );
};

CurrencyField.propTypes = {
  purpose: PropTypes.string.isRequired,
  currencies: PropTypes.array,
};
