import React from "react";
import "./Signin.css";

const Signin = () => {
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
          <button>Sign in</button>
        </div>
        <div>Register</div>
      </div>
    </main>
  );
};

export default Signin;
