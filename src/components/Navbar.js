import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  return (
    <div className="Navbar">
      <div className="Navbar-logo">
        <a href="/">
          <img
            src="https://nolt.io/static/dist/images/logo-word-light.53dd85bf77.png"
            alt="Nolt-logo"
          />
        </a>
      </div>

      <div className={showMobileMenu ? "Navbar-mobile" : "Navbar-menu"}>
        <div>
          <a href="/">Features</a>
        </div>
        <div>
          <a href="/">Pricing</a>
        </div>
        <div>
          <a href="/">Help</a>
        </div>
        <div>
          <a href="/">Sign in</a>
        </div>
        <div>
          <a href="/" className="Create-btn">
            Create a Nolt board
          </a>
        </div>
      </div>
      <div className="Navbar-mobile-menu">
        <a
          href="#"
          onClick={() => {
            setShowMobileMenu(!showMobileMenu);
            console.log(showMobileMenu);
          }}
        >
          Menu
        </a>
      </div>
    </div>
  );
}

export default Navbar;
