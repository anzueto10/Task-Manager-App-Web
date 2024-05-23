import TASK_ACTION_TYPES from "../constants/taskActions";

const taskInitialState = JSON.parse(window.localStorage.getItem("task")) || [];

const updateLocalStorage = (state) =>
  window.localStorage.setItem("task", JSON.stringify(state));

const UPDATE_STATE_BY_ACTION = {
  [TASK_ACTION_TYPES.ADD_TASK]: (state, action) => {
    const newState = [...state, action.payload];

    updateLocalStorage(newState);
    return newState;
  },

  [TASK_ACTION_TYPES.REMOVE_TASK]: (state, action) => {
    const { id } = action.payload;

    const newState = structuredClone(state).filter((task) => task.id !== id);
    updateLocalStorage(newState);
    return newState;
  },

  [TASK_ACTION_TYPES.EDIT_TASK]: (state, action) => {
    const { id, editData } = action.payload;
    const { newName, newImage, newStatus, newTags } = editData;

    const newState = structuredClone(state);

    const taskIndex = newState.findIndex((task) => task.id === id);

    newState[taskIndex] = {
      ...newState[taskIndex],
      name: newName,
      image: newImage,
      status: newStatus,
      tags: newTags,
    };

    updateLocalStorage(newState);

    return newState;
  },
};

const taskReducer = (state, action) => {
  const { type: actionType } = action;

  const updateState = UPDATE_STATE_BY_ACTION[actionType];

  return updateState ? updateState(state, action) : state;
};

export { taskInitialState, taskReducer };
