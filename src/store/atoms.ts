import { atom } from "recoil";
import { Project } from "@/types";

export const projectsState = atom<Project[]>({
  key: "projectsState",
  default: [],
});
