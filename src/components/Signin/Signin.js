import React from "react";
import "./Signin.css";

const Signin = ({ onRouteChange }) => {
  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <div className="signin-card">
        Signin
        <div>
          Username:
          <input />
          Password:
          <input />
        </div>
        <div>
          <button onClick={() => onRouteChange("home")}>Sign in</button>
        </div>
        <div>Register</div>
      </div>
    </main>
  );
};

export default Signin;
