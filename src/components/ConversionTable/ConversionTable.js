import "./ConversionTable.scss";
import React, { useState, useEffect } from "react";

export const ConversionTable = ({ children }) => {
  const [payCurrency, setPayCurrency] = useState("");

  const fetchCurrencies = async() => {
    const response = await fetch("https://api.coingate.com/v2/rates");
    const result = await response.json();
    console.log(result);
  }

  useEffect(() => {
    fetchCurrencies();
  },[])

  return (
    <div className="conversion-table">
      <div className="conversion-table conversion-table--frame"></div>
      <section className="conversion-table conversion-table--container">
        {children}
      </section>
    </div>
  );
};
