import { type FormProjectFields, type Project, type User } from "@/types";

export const getProjects = async ({ userId }: { userId: User["id"] }) => {
  try {
    const res: Response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${userId}/project`
    );

    if (!res.ok) {
      throw new Error(`Error fetching projects: ${res.statusText}`);
    }

    const data: Array<Project> = await res.json();
    return data;
  } catch (e) {
    console.error("Failed to fetch projects:", e);
    return [];
  }
};

export const createProject = async ({
  projectData,
  userId,
}: {
  projectData: FormProjectFields;
  userId: User["id"];
}) => {
  try {
    const res: Response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${userId}/project`,
      {
        method: "POST",
        body: JSON.stringify(projectData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) throw new Error("");

    const data: Project = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
};

export const editProject = async ({
  projectData,
  userId,
  projectId,
}: {
  projectData: FormProjectFields;
  userId: User["id"];
  projectId: Project["id"];
}) => {
  try {
    const res: Response = await fetch(
      `${process.env.BACKEND_URL_PROJECTS}/user/${userId}/project/${projectId}`,
      {
        method: "PUT",
        body: JSON.stringify(projectData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) throw new Error("");

    const data: Project = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
};

export const deleteProject = async ({
  userId,
  projectId,
  projectData,
}: {
  userId: User["id"];
  projectId: Project["id"];
  projectData: FormProjectFields;
}) => {
  try {
    const res: Response = await fetch(
      `${process.env.BACKEND_URL_PROJECTS}/user/${userId}/project/${projectId}`,
      {
        method: "DELETE",
        body: JSON.stringify(projectData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) throw new Error("");
    const data: Project = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
};
