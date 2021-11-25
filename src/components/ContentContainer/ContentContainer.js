import { Button } from "../Button";
import { ConversionTable } from "../ConversionTable";
import { CurrencyField } from "../CurrencyField/CurrencyField";
import { Dropdown } from "../Dropdown";
import { paymentMethods } from "../../Data/paymentMethods";
import "./ContentContainer.scss";

export const ContentContainer = ({ children }) => {
  return (
    <div className="content-container">
      <h1 className="content-container__heading">
        <span className="content-container__heading__emphasis">
          Buy Bitcoin,
        </span>{" "}
        Ethereum, Litecoin and other crypto{" "}
        <span className="content-container__heading__emphasis">online</span>
      </h1>
      <ConversionTable>
        <CurrencyField purposePay={true} />
        <CurrencyField purposePay={false} />
        <Dropdown options={paymentMethods} heading="Payment Method" />
        <Button
          label="Buy BTC"
          type="primary"
          size="wide"
          isDisabled={true}
          className="conversion-table__button"
        />
      </ConversionTable>
      <article className="content-container__paragraph">
        <p>
          Why bother going through complicated exchanges? Buy cryptocurrency
          with top payment methods like SEPA bank transfer, Credit and Debit
          Card, Apple Pay, Mobile balance or Klarna. You can buy Bitcoin,
          Ethereum or any other popular crypto directly to your personal wallet
          without making any initial deposits. It's as easy as it gets!
        </p>
        <Button label="Start now >" type="secondary" size="normal" />
      </article>

      {children}
    </div>
  );
};
