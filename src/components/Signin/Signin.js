import React from "react";

const Signin = ({ onRouteChange }) => {
  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <div className="auth-card">
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
        <p
          onClick={() => onRouteChange("register")}
          style={{ cursor: "pointer" }}
        >
          Register
        </p>
      </div>
    </main>
  );
};

export default Signin;
