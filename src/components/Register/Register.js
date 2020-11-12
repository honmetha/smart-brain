import React from "react";

const Register = ({ onRouteChange }) => {
  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <div className="auth-card">
        Register
        <div>
          Name:
          <input />
        </div>
        <div>
          Email:
          <input />
        </div>
        <div>
          Password:
          <input type="password" />
        </div>
        <div>
          <button onClick={() => onRouteChange("home")}>Register</button>
        </div>
      </div>
    </main>
  );
};

export default Register;
