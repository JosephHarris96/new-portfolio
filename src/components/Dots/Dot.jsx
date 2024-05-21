import React from "react";

function Dot({ top, left }) {
  const dotStyle = {
    top: `${top}px`,
    left: `${left}px`,
    position: "absolute",
    width: "50px",
    height: "50px",
    backgroundColor: "rgb(219, 248, 255 )",
    borderRadius: "50%",
    zIndex: "-1",
  };

  return <div style={dotStyle}></div>;
}

export default Dot;