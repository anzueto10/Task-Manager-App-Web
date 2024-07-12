import { selector } from "recoil";
import { projectsState, selectedProjectIdState } from "./atoms";
import { Project } from "@/types";

export const getActualProject = selector<Project | undefined>({
  key: "getActualProject",
  get: ({ get }) => {
    const projects = get(projectsState);
    const selectedProjectId = get(selectedProjectIdState);

    return projects.find((project) => project.id === selectedProjectId);
  },
});
