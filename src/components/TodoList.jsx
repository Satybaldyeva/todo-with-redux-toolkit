import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { TodoItem } from "./TodoItem";
import { deleteTask } from "../redux/todosSlice";

export const TodoList = () => {
  const { tasks = [] } = useSelector((state) => state.tasks);

  const dispatch = useDispatch();

  const removeTaskHandle = (taskId) => {
    dispatch(deleteTask(taskId));
  };
  return (
    <ul>
      {tasks.map((item) => {
        return (
          <TodoItem
            key={item.id}
            onDelete={() => removeTaskHandle(item.id)}
            title={item.title}
          />
        );
      })}
    </ul>
  );
};
