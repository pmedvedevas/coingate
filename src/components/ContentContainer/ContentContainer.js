import { Button } from "../Button";
import { ConversionTable } from "../ConversionTable";
import "./ContentContainer.scss";

export const ContentContainer = () => {
  return (
    <div className="content-container">
      <h1 className="content-container__heading">
        <span className="content-container__heading__emphasis">
          Buy Bitcoin,
        </span>{" "}
        Ethereum, Litecoin and other crypto{" "}
        <span className="content-container__heading__emphasis">online</span>
      </h1>
      <ConversionTable />
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
    </div>
  );
};
