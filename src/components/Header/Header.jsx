import React, { useState, useEffect } from "react";
import Dot from "../Dots/Dot";
import "./Header.css";
import { assets } from "../../assets/assets";

const Header = () => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    const numDots = 10;
    const newDots = [];

    for (let i = 0; i < numDots; i++) {
      const top = Math.random() * 200; // Adjust according to header height
      const left = Math.random() * window.innerWidth;
      newDots.push({ top, left });
    }

    setDots(newDots);
  }, []);

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
        <div className="orange-circles">
          {dots.map((dot, index) => (
            <Dot key={index} top={dot.top} left={dot.left} />
          ))}
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
