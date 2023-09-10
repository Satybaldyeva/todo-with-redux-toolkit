import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTasks } from "../redux/todosSlice";
import { nanoid } from "@reduxjs/toolkit";
import { Button } from "./UI/Button";
import { useNavigate } from "react-router-dom";
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
      <div>
        <Button onClick={() => navigate("/login")}>Log Out</Button>
      </div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter new task..."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button type="submit">Add Task</button>
      </form>
    </>
  );
};
