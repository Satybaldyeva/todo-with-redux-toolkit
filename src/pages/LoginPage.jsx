import React, { useState } from "react";
import { Button } from "../components/UI/Button";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const navigate = useNavigate();
  return (
    <div>
      <h1>Login Page</h1>
      <label htmlFor="Email">Email</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email..."
      />
      <label htmlFor="Password"> Password</label>
      <input
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        placeholder="Enter your password..."
      />

      <Button onClick={() => navigate("./main")}>Submit</Button>
    </div>
  );
};
