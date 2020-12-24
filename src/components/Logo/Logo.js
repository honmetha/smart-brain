import React from "react";
import Tilt from "react-tilt";
import brain from "./brain.png";

const styles = {
  tilt: {
    height: 150,
    width: 150,
    borderRadius: "2px",
    boxShadow: "0 5px 10px black",
    marginLeft: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
};

const Logo = () => {
  return (
    <Tilt options={{ max: 55 }} style={styles.tilt}>
      <div className="Tilt-inner">
        <img src={brain} alt="" width="100px" />
      </div>
    </Tilt>
  );
};

export default Logo;
