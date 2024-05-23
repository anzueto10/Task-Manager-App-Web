import { useReducer, useRef } from "react";
import { taskInitialState, taskReducer } from "../reducers/task";

const useTaskReducer = () => {
  const [state, dispatch] = useReducer(taskReducer, taskInitialState);

  //Generar id para las tasks

  const id = useRef(0);

  const generateId = () => {
    id.current = id.current + 1;
    return id.current;
  };

  //Añadir board
  const addTask = ({ task }) =>
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });

  const removeTask = ({ id }) =>
    dispatch({
      type: "REMOVE_TASK",
      payload: { id },
    });

  const editTask = ({ id, editData }) =>
    dispatch({
      type: "EDIT_TASK",
      payload: { id, editData },
    });

  return {
    state,
    addTask,
    removeTask,
    editTask,
    generateId,
  };
};

export default useTaskReducer;
