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
          onClick={() => onRouteChange("signout")}
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
          style={{ cursor: "pointer", marginRight: "1rem" }}
        >
          Signin
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
