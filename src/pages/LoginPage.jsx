import React, { useState } from "react";
import { Button } from "../components/UI/Button";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [inputValid, setInputValid] = useState(false);

  const navigate = useNavigate();

  const re = /\S+@\S+\.\S+/;
  const onSubmit = () => {
    if (re.test(String(email)) || pass.length >= 8) {
      setInputValid(true);
    } else {
      setInputValid(false);
      return (
        <div>
          <p>Не корректный пароль или емайл</p>
        </div>
      );
    }
    navigate("/main");
  };

  const handleClick = () => {
    if (inputValid) {
      navigate("/main");
    } else {
      return (
        <div>
          <p>Не корректный пароль или емайл</p>
        </div>
      );
    }
  };
  return (
    <div>
      <h1>Login Page</h1>
      <form onSubmit={onSubmit}>
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

        <Button onClick={() => handleClick}>Submit</Button>
      </form>
    </div>
  );
};
