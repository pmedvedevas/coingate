import "./ConversionTable.scss";
import React, { useState, useEffect } from "react";
import { CurrencyField } from "../CurrencyField/CurrencyField";
import { Dropdown } from "../Dropdown";
import { paymentMethods } from "../../Data/paymentMethods";
import { Button } from "../Button";

const corsProxy = "https://stormy-wave-89352.herokuapp.com/";

export const ConversionTable = () => {
  const [merchantCurrencies, setMerchantCurrencies] = useState([]);
  const [traderCurrencies, setTraderCurrencies] = useState([]);

  const fetchCurrencies = async (type) => {
    const response = await fetch(
      `${corsProxy}https://api.coingate.com/v2/rates/${type}.json`
    );
    const result = await response.json();
    const fetchedCurrencies = Object.keys(result).map((item) => ({
      img: `./${item.toLowerCase()}.svg`,
      title: item,
    }));
    if(type === "merchant") 
      setMerchantCurrencies(fetchedCurrencies);
    else if(type === "trader/buy")
      type === "trader/buy" && setTraderCurrencies(fetchedCurrencies);
  };

  useEffect(() => {
    fetchCurrencies("merchant");
    fetchCurrencies("trader/buy");
  }, []);

  return (
    <div className="conversion-table">
      <div className="conversion-table conversion-table--frame"></div>
      <section className="conversion-table conversion-table--container">
        <CurrencyField
          purpose="pay"
          currencies={merchantCurrencies.length > 0 && merchantCurrencies}
        />
        <CurrencyField
          purpose="buy"
          currencies={traderCurrencies.length > 0 && traderCurrencies}
        />
        <Dropdown
          options={paymentMethods}
          heading="Payment Method"
          size="big"
        />
        <Button
          label="Buy BTC"
          type="primary"
          size="wide"
          isDisabled={true}
          className="conversion-table__button"
        />
      </section>
    </div>
  );
};
