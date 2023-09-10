import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "tasks",
  initialState: {
    tasks: [
      {
        title: "Kanykei",
        id: "e2",
        completed: false,
      },
    ],
  },
  reducers: {
    addTasks: (state, action) => {
      state.tasks.push(action.payload);
    },

    deleteTask: (state, action) => {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload);
    },

    completeTask: (state, action) => {
      const currentTask = state.tasks.find(
        (item) => item.id === action.payload
      );
      currentTask.completed = !currentTask.completed;
    },
  },
});

export const { addTasks, deleteTask, completeTask } = todoSlice.actions;
export default todoSlice;
