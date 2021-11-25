import "./ConversionTable.scss";

export const ConversionTable = ({ children }) => {
  return (
    <div className="conversion-table">
      <div className="conversion-table conversion-table--frame"></div>
      <section className="conversion-table conversion-table--container">
        {children}
      </section>
    </div>
  );
};
