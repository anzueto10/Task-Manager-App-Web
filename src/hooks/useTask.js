import { useContext } from "react";
import { TaskContext } from "../context/task";

const useTask = () => {
  const { state, addTask, removeTask, editTask, generateId } =
    useContext(TaskContext);

  return { state, addTask, removeTask, editTask, generateId };
};

export default useTask;
