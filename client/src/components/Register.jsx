import React, { useState } from "react";
import api from "../api";

function Register({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    const resp = await api.post("/auth/register", { email, password });
    if (resp.data.user) {
      setUser(resp.data.user);
      localStorage.setItem("token", resp.data.token);
    }
  };

  return (
    <form onSubmit={handleRegister}>
      <h2>הרשמה</h2>
      <input value={email} onChange={e => setEmail(e.target.value)} placeholder="אימייל" />
      <input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="סיסמה" />
      <button type="submit">הרשם</button>
    </form>
  );
}

export default Register;