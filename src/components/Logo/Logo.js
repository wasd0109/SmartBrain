import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Logo.css";

function Logo() {
  return (
    <div className="ma4 mt0">
      <Tilt
        className="Tilt"
        options={{ max: 35 }}
        style={{ height: 150, width: 150 }}
      >
        <div className="Tilt-inner">
          {" "}
          <img src={brain} alt="icon" />{" "}
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
