import React, { useState } from "react";
import "./mySlider.scss";

export function MySlider({ slides }) {
  const [curidx, setCurIdx] = useState(0);

  const slideStyles = {
    width: "100%",
    height: "100%",
    borderRadius: "15px",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundImage: `url(${slides[curidx].url})`,
  };
  return (
    <div className="imgContainer">
      <div style={slideStyles} className="c"></div>
      <div className="bar">
        <div className="dots">
          <div className="dot1" onClick={() => setCurIdx(0)}></div>
          <div className="dot2" onClick={() => setCurIdx(1)}></div>
          <div className="dot2" onClick={() => setCurIdx(2)}></div>
        </div>
      </div>
    </div>
  );
}
