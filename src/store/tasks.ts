import { type Task } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  tasks: Array<Task>;
  addTask: (task: Task) => void;
  removeTask: (taskId: Task["id"]) => void;
  editTask: (taskData: Task) => void;
}

const useTasksStore = create<State>()(
  persist(
    (set, get) => ({
      tasks: [],
      addTask: (task) => {
        set((state) => ({
          tasks: [...state.tasks, task],
        }));
      },

      removeTask: (taskId) => {
        set((state) => ({
          tasks: state.tasks.filter((task) => task.id !== taskId),
        }));
      },

      editTask: (task) => {
        const { tasks } = get();
        const taskIndex = tasks.findIndex((t) => t.id === task.id);

        if (taskIndex !== -1) {
          const updatedTasks = structuredClone(tasks);
          updatedTasks[taskIndex] = { ...tasks[taskIndex], ...task };

          set({ tasks: updatedTasks });
        }
      },
    }),
    {
      name: "tasks-storage",
    }
  )
);

export default useTasksStore;
