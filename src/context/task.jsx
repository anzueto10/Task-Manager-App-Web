/* eslint-disable react/prop-types */
import { createContext } from "react";
import useTaskReducer from "../hooks/useTaskReducer";

const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const { state, addTask, removeTask, editTask, generateId } = useTaskReducer();

  return (
    <TaskContext.Provider
      value={{ state, addTask, removeTask, editTask, generateId }}
    >
      {children}
    </TaskContext.Provider>
  );
};

export { TaskContext, TaskProvider };
