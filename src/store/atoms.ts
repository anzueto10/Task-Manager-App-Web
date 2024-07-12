import { atom } from "recoil";
import { Project, Task } from "@/types";

export const projectsState = atom<Project[]>({
  key: "projectsState",
  default: [],
});

export const tasksState = atom<Task[]>({
  key: "tasksState",
  default: [],
});

export const selectedProjectIdState = atom<Project["id"] | null>({
  key: "selectedProjectIdState",
  default: null,
});
