import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";
import "./Logo.css";

const Logo = () => {
  return (
    <div>
      <Tilt
        className="Tilt"
        options={{ max: 55 }}
        style={{
          height: 150,
          width: 150,
          borderRadius: "2px",
          boxShadow: "0 5px 10px black",
          marginLeft: "2rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="Tilt-inner">
          <img src={brain} alt="" width="100px" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
