import React from "react";

const Navigation = ({ onRouteChange, isSignedIn }) => {
  if (isSignedIn) {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "2rem",
        }}
      >
        <p
          onClick={() => onRouteChange("signin")}
          style={{ cursor: "pointer" }}
        >
          Sign Out
        </p>
      </nav>
    );
  } else {
    return (
      <nav
        style={{
          display: "flex",
          justifyContent: "flex-end",
          paddingRight: "2rem",
        }}
      >
        <p
          onClick={() => onRouteChange("signin")}
          style={{ cursor: "pointer" }}
        >
          Sign in
        </p>
        <p
          onClick={() => onRouteChange("register")}
          style={{ cursor: "pointer" }}
        >
          Register
        </p>
      </nav>
    );
  }
};

export default Navigation;
