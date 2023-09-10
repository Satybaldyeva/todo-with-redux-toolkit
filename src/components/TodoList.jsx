import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import { deleteTask } from "../redux/todosSlice";
import styled from "styled-components";

export const TodoList = () => {
  const { tasks = [] } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const removeTaskHandle = (taskId) => {
    dispatch(deleteTask(taskId));
  };
  return (
    <StyledUl>
      {tasks.map((item) => {
        return (
          <TodoItem
            key={item.id}
            onDelete={() => removeTaskHandle(item.id)}
            title={item.title}
          />
        );
      })}
    </StyledUl>
  );
};

const StyledUl = styled("ul")`
  width: 80%;

  margin: 0 auto;
`;
