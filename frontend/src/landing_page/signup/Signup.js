import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL;

  const handleSignup = async () => {
  try {
    const res = await axios.post(`${API_BASE_URL}/signup`, { email, password });
    if (res.status === 200 || res.status === 201) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = DASHBOARD_URL || "/";
    }
  } catch (error) {
    alert("Signup failed");
  }
};

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2>Signup</h2>
      <input
        type="email"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <input
        type="password"
        placeholder="Enter password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={{ width: "100%", marginBottom: 10 }}
      />
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}
