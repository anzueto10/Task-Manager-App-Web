/* eslint-disable react/prop-types */
import { createContext } from "react";
import useBoardReducer from "../hooks/useBoardReducer";

const BoardContext = createContext();

const BoardProvider = ({ children }) => {
  const { state, setBoard, addBoard, removeBoard, editBoard } =
    useBoardReducer();

  return (
    <BoardContext.Provider
      value={{ state, setBoard, addBoard, removeBoard, editBoard }}
    >
      {children}
    </BoardContext.Provider>
  );
};

export { BoardContext, BoardProvider };
