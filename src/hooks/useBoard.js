import { useContext } from "react";
import { BoardContext } from "../context/board";

const useBoard = () => {
  const { state, setBoard, addBoard, removeBoard, editBoard } =
    useContext(BoardContext);

  const selectedBoard = state.find((board) => board.selected === true);

  return {
    boards: state,
    setBoard,
    addBoard,
    removeBoard,
    editBoard,
    selectedBoard,
  };
};

export default useBoard;
