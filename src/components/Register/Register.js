import React, { useState } from "react";
import Axios from "axios";

const Register = ({ onRouteChange, loadUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleSubmit = () => {
    Axios.post("http://localhost:3000/register", {
      name,
      email,
      password,
    })
      .then((res) => res.data)
      .then((user) => {
        if (user) {
          loadUser(user);
          onRouteChange("home");
        }
      })
      .catch((error) => console.log(error.message));
  };

  return (
    <main style={{ display: "flex", justifyContent: "center" }}>
      <div className="auth-card">
        Register
        <div>
          Name:
          <input onChange={handleNameChange} />
        </div>
        <div>
          Email:
          <input onChange={handleEmailChange} />
        </div>
        <div>
          Password:
          <input type="password" onChange={handlePasswordChange} />
        </div>
        <div>
          <button onClick={handleSubmit}>Register</button>
        </div>
      </div>
    </main>
  );
};

export default Register;
