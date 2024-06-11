import { type Project } from "@/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface State {
  projects: Array<Project>;
  addProject: (project: Project) => void;
  removeProject: (projectId: Project["id"]) => void;
  editProject: (projectData: Project) => void;
}

const useProjectsStore = create<State>()(
  persist(
    (set, get) => ({
      projects: [],
      addProject: (project) => {
        set((state) => ({
          projects: [...state.projects, project],
        }));
      },

      removeProject: (projectId) => {
        set((state) => ({
          projects: state.projects.filter((p) => p.id !== projectId),
        }));
      },

      editProject: (project) => {
        const { projects } = get();
        const projectIndex = projects.findIndex((t) => t.id === project.id);

        if (projectIndex !== -1) {
          const updatedProjects = structuredClone(projects);
          updatedProjects[projectIndex] = {
            ...projects[projectIndex],
            ...projects,
          };

          set({ projects: updatedProjects });
        }
      },
    }),
    {
      name: "projects-storage",
    }
  )
);

export default useProjectsStore;
