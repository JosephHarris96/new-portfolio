import React from "react";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header">
          <h1>
            <span>{"<"}</span>Joseph Harris<span>{">"}</span>
          </h1>
        </div>
        <div className="header-button">
          <button>Contact Me</button>
        </div>
      </div>
      <hr />
      <img className="header-selfie" src={assets.selfie} alt="selfie" />
      <div className="header-about">
        <h2>Designer and Frontend Developer</h2>
        <p>I design and code things for people to make your life easier.</p>
      </div>
      <div className="header-hr">
      <hr />
      </div>
    </>
  );
};

export default Header;
