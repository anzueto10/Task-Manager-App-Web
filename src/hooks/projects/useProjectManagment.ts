import { useRecoilState } from "recoil";
import { projectsState } from "@/store/atoms";
import type { Project } from "@/types";

interface UseProjectManagementProps {
  addProject: (newProject: Project) => void;
}

const useProjectManagement = (): UseProjectManagementProps => {
  const [projects, setProjects] = useRecoilState(projectsState);

  const addProject = (newProject: Project) => {
    setProjects([...projects, newProject]);
  };

  const removeProject = (projectId: Project["id"]) => {
    const newProjects = projects.filter((p) => p.id !== projectId);
    setProjects(structuredClone(newProjects));
  };

  return { addProject };
};

export default useProjectManagement;
