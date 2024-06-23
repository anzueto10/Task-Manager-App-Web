import { selector } from "recoil";
import { tasksState } from "@/state/atoms";
import { Project } from "@/types";

export const tasksByProjectSelector = selector({
  key: "tasksByProjectSelector",
  get: ({ get }) => {
    const tasks = get(tasksState);
    return (projectId: Project["id"]) => tasks[projectId] || [];
  },
});
