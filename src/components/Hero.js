import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="Hero-container">
        <div className="Hero-text-container">
          <h1 className="Hero-title">Feedback boards your users will love.</h1>
          <p className="Hero-desc">
            Nolt is a beautiful, collaborative place for all your user requests
            – no more outdated spreadsheets or chaotic Trello boards. Give your
            customers a voice and gain priceless insights. Everything for just
            $25/month per board.
          </p>
        </div>
        <div className="Carousal">
          <div
            className="Carousal-item"
            style={{ backgroundColor: "yellow" }}
          ></div>
          <div
            className="Carousal-item Carousal-active-item"
            style={{ backgroundColor: "black" }}
          ></div>
          <div
            className="Carousal-item"
            style={{ backgroundColor: "blue" }}
          ></div>
        </div>
      </div>
    </>
  );
}

export default Hero;
