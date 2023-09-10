import React, { useState } from "react";
import { Button } from "../components/UI/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
      <StyledForm onSubmit={onSubmit}>
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
      </StyledForm>
    </div>
  );
};

const StyledForm = styled("form")`
  display: flex;
  flex-direction: column;
  gap: 25px;
  border: 2px solid green;
  border-radius: 10px;
  padding: 10px;
  width: 70%;
  margin: 0 auto;
  height: 400px;
  align-items: center;

  & > input {
    width: 80%;
    height: 30px;
    border: 2px solid green;
    border-radius: 10px;
    padding: 20px;
  }

  & > button {
    background-color: #4ba34b;
    width: 20%;
    height: 30px;
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: 700;
  }

  & > label {
    font-weight: 700;
    font-size: 1.2rem;
  }
`;
