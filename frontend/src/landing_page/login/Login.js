import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("demo@TradeTrack.com");
  const [password, setPassword] = useState("demo123");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;
  const DASHBOARD_URL = process.env.REACT_APP_DASHBOARD_URL;

 const handleLogin = async () => {
  if (!email || !password) {
    setMessage("Please enter email and password");
    return;
  }

  try {
    const res = await axios.post(`${API_BASE_URL}/login`, { email, password });
    if (res.status === 200) {
      localStorage.setItem("isLoggedIn", "true");
      window.location.href = DASHBOARD_URL || "/";
    }
  } catch (err) {
    setMessage("Invalid email or password");
  }
};

  return (
    <div style={{ maxWidth: 400, margin: "auto", padding: 20 }}>
      <h2 className="text-center">Demo Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        style={{ display: "block", marginBottom: 10, width: "100%" }}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        style={{ display: "block", marginBottom: 10, width: "100%" }}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      {message && <p style={{ marginTop: 10, color: "red" }}>{message}</p>}
    </div>
  );
}
