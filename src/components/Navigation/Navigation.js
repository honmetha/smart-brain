import React from "react";

const Navigation = ({ onRouteChange }) => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "flex-end",
        paddingRight: "2rem",
      }}
    >
      <p onClick={() => onRouteChange("signin")} style={{ cursor: "pointer" }}>
        Sign Out
      </p>
    </nav>
  );
};

export default Navigation;
