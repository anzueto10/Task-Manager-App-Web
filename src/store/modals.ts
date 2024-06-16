import { create } from "zustand";

interface State {
  taskModal: boolean;
  projectModal: boolean;
  openTaskModal: () => void;
  closeTaskModal: () => void;
  openProjectModal: () => void;
  closeProjectModal: () => void;
}

const useModalsStore = create<State>()((set, get) => ({
  taskModal: false,
  projectModal: false,

  openTaskModal: () => {
    set((state) => ({
      taskModal: true,
    }));
  },

  closeTaskModal: () => {
    set((state) => ({
      taskModal: false,
    }));
  },

  openProjectModal: () => {
    set((state) => ({
      projectModal: true,
    }));
  },

  closeProjectModal: () => {
    set((state) => ({
      projectModal: false,
    }));
  },
}));

export default useModalsStore;
