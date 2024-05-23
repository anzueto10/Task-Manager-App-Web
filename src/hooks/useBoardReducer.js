import { useReducer } from "react";
import { boardInitialState, boardReducer } from "../reducers/board";

const useBoardReducer = () => {
  const [state, dispatch] = useReducer(boardReducer, boardInitialState);

  //Seleccionar el board que esta siendo visualizado
  const setBoard = ({ board }) =>
    dispatch({
      type: "SET_BOARD",
      payload: board,
    });

  //Añadir board
  const addBoard = ({ board }) =>
    dispatch({
      type: "ADD_BOARD",
      payload: board,
    });

  const removeBoard = ({ name }) =>
    dispatch({
      type: "REMOVE_BOARD",
      payload: name,
    });

  const editBoard = ({ name, editData }) =>
    dispatch({
      type: "EDIT_BOARD",
      payload: { name, editData },
    });

  return {
    state,
    setBoard,
    addBoard,
    removeBoard,
    editBoard,
  };
};

export default useBoardReducer;
