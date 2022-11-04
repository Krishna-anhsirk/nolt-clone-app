import "./assets/css/TryNoltBoard.css";

function TryNoltBoard() {
  return (
    <div className="TryNolt-container" id="TryNolt-mobile">
      <div className="TryNolt-text">
        <strong className="TryNolt-text">Try it free for 10 days</strong>{" "}
        without a credit card
      </div>
      <div>
        <a href="/" className="Create-board-btn">
          Create Nolt Board
        </a>
      </div>
    </div>
  );
}

export default TryNoltBoard;
