import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { login } from "../api";
import "../assests/css/login.css";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Initialize navigate

  const handleLogin = async () => {
    try {
      const response = await login({ email, password });
      localStorage.setItem("token", response.data.token);
      alert("Login successful");
      navigate("/dashboard"); // Navigate to Dashboard after login
    } catch (error) {
      alert("Invalid credentials");
    }
  };

  return (
    <div className="login-container">
    <div className="login-box">
      <h2>Login</h2>
      <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  </div>
  );
}
