import { Checkbox } from "@mui/material";
import React from "react";

export const TodoItem = ({ title, completed, onDelete }) => {
  return (
    <li>
      {title}
      <Checkbox />
      <button onClick={onDelete}>delete</button>
    </li>
  );
};
