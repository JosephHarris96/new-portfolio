import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header-container">
        <div className="header">
          <h1>
            <span>{"<"} </span>Joseph Harris <span>{">"}</span>
          </h1>
        </div>
        <div className="header-button">
          <button>Contact Me</button>
        </div>
      </div>
    </>
  );
};

export default Header;
