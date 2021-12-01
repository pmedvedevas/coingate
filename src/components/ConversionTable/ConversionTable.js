import "./ConversionTable.scss";
import React, { useState, useEffect } from "react";
import { CurrencyField } from "../CurrencyField/CurrencyField";
import { Dropdown } from "../Dropdown";
import { paymentMethods } from "../../Data/paymentMethods";
import { Button } from "../Button";
import { LoadingScreen } from "../LoadingScreen";
import { ConfirmationScreen } from "./ConfirmationScreen";

const corsProxy = process.env.REACT_APP_CORS_PROXY;

export const ConversionTable = () => {
  const [fetchedData, setFetchedData] = useState({});
  const [merchantCurrencies, setMerchantCurrencies] = useState([]);
  const [traderCurrencies, setTraderCurrencies] = useState([]);

  const [paymentCurrency, setPaymentCurrency] = useState("");
  const [cryptoToBuy, setCryptoToBuy] = useState("");

  const [amountToPay, setAmountToPay] = useState("");
  const [amountToBuy, setAmountToBuy] = useState();

  const [isConfirmed, setIsConfirmed] = useState(false);

  const fetchData = async () => {
    const response = await fetch(
      `${corsProxy}https://api.coingate.com/v2/rates/`
    );
    const result = await response.json();
    setFetchedData(result);
  };

  const getCurrencies = () => {
    if (Object.keys(fetchedData).length === 0) return;
    let fetchedCurrencies = Object.keys(fetchedData.merchant).map((item) => ({
      img: `./${item.toLowerCase()}.svg`,
      title: item,
    }));
    setMerchantCurrencies(fetchedCurrencies);
    fetchedCurrencies = Object.keys(fetchedData.trader.buy).map((item) => ({
      img: `./${item.toLowerCase()}.svg`,
      title: item,
    }));
    setTraderCurrencies(fetchedCurrencies);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    getCurrencies();
  }, [fetchedData]);

  useEffect(() => {
    if (Object.keys(fetchedData).length === 0) return;
    const rate = fetchedData.trader.buy[cryptoToBuy].EUR;
    setAmountToBuy(calcPrice(amountToPay, rate));
  }, [amountToPay, cryptoToBuy, paymentCurrency]);

  const calcPrice = (pay, rate) => {
    if (pay && rate && pay / rate >= 0.000001) {
      if (paymentCurrency !== "EUR") {
        const currencyToEur = fetchedData.merchant[paymentCurrency].EUR;
        return ((pay * currencyToEur) / rate).toFixed(6);
      } else {
        return (pay / rate).toFixed(6);
      }
    } else return;
  };

  return (
    <div className="conversion-table">
      <div className="conversion-table conversion-table--frame"></div>
      <section className="conversion-table conversion-table--container">
        {merchantCurrencies.length > 0 ? (
          isConfirmed ? (
            <ConfirmationScreen
              amountToPay={amountToPay}
              paymentCurrency={paymentCurrency}
              amountToBuy={amountToBuy}
              cryptoToBuy={cryptoToBuy}
              setIsConfirmed={setIsConfirmed}
              setAmountToPay={setAmountToPay}
            />
          ) : (
            <>
              <CurrencyField
                purpose="pay"
                currencies={merchantCurrencies}
                defaultSelection="EUR"
                amountToPay={amountToPay}
                setAmountToPay={setAmountToPay}
                setPaymentCurrency={setPaymentCurrency}
              />
              <CurrencyField
                purpose="buy"
                currencies={traderCurrencies}
                defaultSelection="BTC"
                amountToBuy={amountToBuy !== 0 && amountToBuy}
                setCryptoToBuy={setCryptoToBuy}
                cryptoToBuy={cryptoToBuy}
              />
              <Dropdown
                options={paymentMethods}
                heading="Payment Method"
                size="big"
                defaultSelection={paymentMethods[0]}
              />
              <Button
                label={`Buy ${cryptoToBuy}`}
                type="primary"
                size="wide"
                isDisabled={amountToPay === "" ? true : false}
                className="conversion-table__button"
                onClick={() => setIsConfirmed(!isConfirmed)}
              />
            </>
          )
        ) : (
          <LoadingScreen />
        )}
      </section>
    </div>
  );
};
