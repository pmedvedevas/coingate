import "./ConfirmationScreen.scss";
import { Button } from "../../Button";

export const ConfirmationScreen = ({
  amountToPay,
  paymentCurrency,
  amountToBuy,
  cryptoToBuy,
  setIsConfirmed,
  setAmountToPay,
}) => {
  return (
    <div className="confirmation-screen">
      <p className="confirmation-screen__info">
        You bought{" "}
        <span className="emphasis">
          {amountToBuy} {cryptoToBuy} for{" "}
        </span>
        {amountToPay} {paymentCurrency}
      </p>
      <p className="confirmation-screen__message">
        You request is being processed! <br />
        In the meantime you can place another order
      </p>
      <Button
        label="OK"
        type="primary"
        size="wide"
        isDisabled={false}
        className="conversion-table__button"
        onClick={() => {
          setIsConfirmed(false);
          setAmountToPay("");
        }}
      />
    </div>
  );
};
