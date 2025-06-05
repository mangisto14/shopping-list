import React, { useState } from "react";
import api from "../api";

function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    const resp = await api.post("/auth/login", { email, password });
    if (resp.data.user) {
      setUser(resp.data.user);
      localStorage.setItem("token", resp.data.token);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>התחברות</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="אימייל" />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="סיסמה" />
      <button type="submit">התחבר</button>
    </form>
  );
}

export default Login;