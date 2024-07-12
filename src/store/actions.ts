import { useRecoilState, useSetRecoilState } from "recoil";
import { projectsState, selectedProjectIdState, tasksState } from "./atoms";
import { FormTaskFields, Project, Task } from "@/types";

export const useSelectProject = () => {
  const setSelectedProjectId = useSetRecoilState(selectedProjectIdState);

  return (projectId: Project["id"]) => {
    setSelectedProjectId(projectId);
  };
};

export const useAddProject = () => {
  const [projects, setProjects] = useRecoilState(projectsState);

  return (newProject: Project) => {
    setProjects([...projects, newProject]);
  };
};

export const useEditProject = () => {
  const [projects, setProjects] = useRecoilState(projectsState);

  return ({
    projectData,
    projectId,
  }: {
    projectData: Project;
    projectId: Project["id"];
  }) => {
    const editProjectIndex = projects.findIndex((p) => p.id === projectId);
    const newProjects = structuredClone(projects);

    newProjects[editProjectIndex].title = projectData.title;
    newProjects[editProjectIndex].description = projectData.description;

    setProjects(newProjects);
  };
};

export const useRemoveProject = () => {
  const [projects, setProjects] = useRecoilState(projectsState);

  return (projectId: Project["id"]) => {
    const newProjects = projects.filter((p) => p.id !== projectId);
    setProjects(newProjects);
  };
};

export const useAddTask = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  return (newTask: Task) => {
    setTasks([...tasks, newTask]);
  };
};

export const useEditTask = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  return ({ taskData, taskId }: { taskData: Task; taskId: Task["id"] }) => {
    const editTaskIndex = tasks.findIndex((t) => t.id === taskId);

    const newTasks = structuredClone(tasks);
    newTasks[editTaskIndex].title = taskData.title;
    newTasks[editTaskIndex].description = taskData.description;
    newTasks[editTaskIndex].image = taskData.image;
    newTasks[editTaskIndex].tags = taskData.tags;
    newTasks[editTaskIndex].status = taskData.status;
    setTasks(newTasks);
  };
};

export const useRemoveTask = () => {
  const [tasks, setTasks] = useRecoilState(tasksState);

  return (taskId: Task["id"]) => {
    const newTasks = tasks.filter((t) => t.id !== taskId);
    setTasks(newTasks);
  };
};
