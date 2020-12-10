import React, { useState } from "react";
import Axios from "axios";

const Signin = ({ onRouteChange }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = () => {
    Axios.post("http://localhost:3000/signin", {
      email,
      password,
    })
      .then((res) => res.data)
      .then((data) => {
        if (data === "success") onRouteChange("home");
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <div className="auth-card">
        Signin
        <div>
          Username:
          <input onChange={handleEmailChange} />
          Password:
          <input type="password" onChange={handlePasswordChange} />
        </div>
        <div>
          <button onClick={handleSubmit}>Sign in</button>
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
