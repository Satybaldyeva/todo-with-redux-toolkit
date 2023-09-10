import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTasks } from "../redux/todosSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Button } from "./UI/Button";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export const TodoForm = () => {
  const [text, setText] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addTasks({
        title: text,
        id: nanoid(),
        completed: false,
      })
    );

    setText("");
  };

  return (
    <>
      <Container>
        <div>
          <h1>Todo List</h1>
          <Button onClick={() => navigate("/login")}>Log Out</Button>
        </div>
        <Form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter new task..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <button type="submit">Add Task</button>
        </Form>
      </Container>
    </>
  );
};

const Container = styled("div")`
  display: flex;
  flex-direction: column;

  gap: 30px;
  margin: 0 auto;
  padding: 20px;
  width: 80%;

  & > div {
    display: flex;
    justify-content: space-between;
  }

  & > div > button {
    width: 100px;
    height: 30px;
    border: none;
    border-radius: 10px;
    background-color: #586258;
    color: white;
    font-weight: 700;
    margin-top: 10px;
  }
`;

const Form = styled("form")`
  width: 80%;
  height: 70px;
  & > input {
    width: 70%;
    height: 10px;
    padding: 20px;
    border-radius: 10px;
    font-size: 1.2rem;
  }

  & > button {
    width: 120px;
    height: 40px;
    border: none;
    border-radius: 10px;
    color: white;
    font-weight: 700;
    background-color: #53cf53;
    margin-left: 20px;
  }
`;
