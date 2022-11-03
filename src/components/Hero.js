import "./Hero.css";

function Hero() {
  return (
    <>
      <div className="Feedback-container">
        <h1 className="Hero-title">Feedback boards your users will love.</h1>
        <p className="Hero-desc">
          Nolt is a beautiful, collaborative place for all your user requests –
          no more outdated spreadsheets or chaotic Trello boards. Give your
          customers a voice and gain priceless insights. Everything for just
          $25/month per board.
        </p>
      </div>
      <div className="Carousal">
        <div>
          <img src="https://drive.google.com/file/d/13enQOC0YCe8oohd5uJruaC9Vz7Cdl6fY/view?usp=sharing" />
        </div>
        {/* <div>
          <img src="https://drive.google.com/file/d/13Ms9X1VpUQmHLUrDa4eVXDNPCkneb9Um/view?usp=sharing" />
        </div> */}
        <div>
          <img src="https://drive.google.com/file/d/1-Y07p1fSR9t0ykh1RjI1h6aJb9YwB58d/view?usp=sharing" />
        </div>
      </div>
    </>
  );
}

export default Hero;
