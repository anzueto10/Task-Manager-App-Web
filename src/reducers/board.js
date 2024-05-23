import BOARD_ACTION_TYPES from "../constants/boardActions";

const boardInitialState =
  JSON.parse(window.localStorage.getItem("board")) || [];

const updateLocalStorage = (state) =>
  window.localStorage.setItem("board", JSON.stringify(state));

const UPDATE_STATE_BY_ACTION = {
  [BOARD_ACTION_TYPES.SET_BOARD]: (state, action) => {
    const { name, selected } = action.payload;

    //Si el board no esta seleccionado hacer la lógica
    if (!selected) {
      const newState = structuredClone(state);

      //Buscar el índice board que estaba previamente seleccinado
      const boardSelected = newState.findIndex(
        (board) => board.selected === true
      );

      //Buscar el índice el board que será el nuevo seleccionado
      const boardIndex = newState.findIndex((board) => board.name === name);

      newState[boardSelected] = {
        ...newState[boardSelected],
        selected: false,
      };

      newState[boardIndex] = {
        ...newState[boardIndex],
        selected: true,
      };

      updateLocalStorage(newState);
      return newState;
    }

    //Returnar si el board ya está seleccionado
    return state;
  },

  [BOARD_ACTION_TYPES.ADD_BOARD]: (state, action) => {
    if (state.length > 9) return state;

    const newState = [...state, action.payload];

    updateLocalStorage(newState);
    return newState;
  },

  [BOARD_ACTION_TYPES.REMOVE_BOARD]: (state, action) => {
    const name = action.payload;

    //Recuperamos el indice del board que sera eliminado

    const boardIndex = state.findIndex((board) => board.name === name);

    //Borramos el board que se tiene que borrar
    let newState = structuredClone(state);

    //Si el board a ser eliminado estaba seleccionado hacemos esta logica para seleccionar al mas cercano
    if (newState[boardIndex].selected && newState.length > 1) {
      const beforeBoard = newState[boardIndex - 1];
      const afterBoard = newState[boardIndex + 1];

      const newBoardSelected = beforeBoard || afterBoard;

      if (newBoardSelected) {
        const indexToSelect = beforeBoard ? boardIndex - 1 : boardIndex + 1;
        newState[indexToSelect] = {
          ...newState[indexToSelect],
          selected: true,
        };
      }
    }

    newState = newState.filter((board) => board.name !== name);

    updateLocalStorage(newState);
    return newState;
  },

  [BOARD_ACTION_TYPES.EDIT_BOARD]: (state, action) => {
    const { name, editData } = action.payload;
    const { newName, newLogo } = editData;

    const newState = structuredClone(state);

    //Encontramos el board a editar
    const boardToEdit = newState.findIndex((board) => board.name === name);

    //Conservamos el selected y cambiamos el logo y el name a los nuevos
    newState[boardToEdit] = {
      ...newState[boardToEdit],
      name: newName,
      logo: newLogo,
    };

    updateLocalStorage(newState);

    return newState;
  },
};

const boardReducer = (state, action) => {
  const { type: actionType } = action;

  const updateState = UPDATE_STATE_BY_ACTION[actionType];

  return updateState ? updateState(state, action) : state;
};

export { boardInitialState, boardReducer };
