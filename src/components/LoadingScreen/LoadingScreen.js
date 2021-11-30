import "./LoadingScreen.scss";

export const LoadingScreen = () => {
  return (
    <div className="loading-screen">
      <div className="loading-screen__container">
        <span className="loading-screen__circle"></span>
        <span className="loading-screen__circle"></span>
        <span className="loading-screen__circle"></span>
        <span className="loading-screen__circle"></span>
      </div>
    </div>
  );
};
