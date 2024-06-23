import { getProjects } from "@/api/projects/crud";
import { getTasks } from "@/api/tasks/crud";
import { Project, User } from "@/types";
import { atom } from "recoil";

export const projectsState = atom({
  key: "projectsState",
  default: [],
});

export const loadProjectsState = async (userId: User["id"]) => {
  try {
    const projects = await getProjects(userId);
    return projects;
  } catch (e) {
    console.error("Error fetching projects:", e);
    return [];
  }
};

export const tasksState = atom({
  key: "tasksState",
  default: [],
});

export const loadTasksState = async ({
  userId,
  projectId,
}: {
  userId: User["id"];
  projectId: Project["id"];
}) => {
  try {
    const tasks = await getTasks({ projectId, userId });
    return tasks;
  } catch (e) {
    console.error("Error fetching tasks:", e);
    return [];
  }
};
