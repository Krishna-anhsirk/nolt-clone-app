import "./assets/css/Hero.css";
import Carousel1 from "./assets/images/Carousal1.png";
import Carousel2 from "./assets/images/Carousal2.png";
import Carousel3 from "./assets/images/Carousal3.png";

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
          <div className="Carousal-item">
            <img src={Carousel1} alt="Carousel-1-pic" />
          </div>
          <div className="Carousal-item Carousal-active-item">
            <img src={Carousel2} alt="Carousel-2-pic" />
          </div>
          <div className="Carousal-item">
            <img src={Carousel3} alt="Carousel-3-pic" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
