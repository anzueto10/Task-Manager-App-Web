import {
  type FormTaskFields,
  type Project,
  type Task,
  type User,
} from "@/types";

export const getTasks = async ({
  projectId,
  userId,
}: {
  projectId: Project["id"];
  userId: User["id"];
}) => {
  try {
    const res: Response = await fetch(
      `${process.env.BACKEND_URL}user/${userId}/project/${projectId}/task/`
    );

    if (!res.ok) throw new Error();

    const data: Array<Task> = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const createTask = async ({
  taskData,
  projectId,
  userId,
}: {
  taskData: FormTaskFields;
  projectId: Project["id"];
  userId: User["id"];
}) => {
  try {
    const res: Response = await fetch(
      `${process.env.BACKEND_URL}user/${userId}/project/${projectId}/task/`,
      {
        method: "POST",
        body: JSON.stringify(taskData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) throw new Error();

    const data: Task = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const editTask = async ({
  projectId,
  userId,
  taskId,
  taskData,
}: {
  projectId: Project["id"];
  userId: User["id"];
  taskId: Task["id"];
  taskData: FormTaskFields;
}) => {
  try {
    const res: Response = await fetch(
      `${process.env.BACKEND_URL}user/${userId}/project/${projectId}/task/${taskId}`,
      {
        method: "PUT",
        body: JSON.stringify(taskData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    if (!res.ok) throw new Error();

    const data: Task = await res.json();
    return data;
  } catch (e) {
    console.log(e);
  }
};

export const deleteTask = async ({
  projectId,
  userId,
  taskId,
}: {
  taskId: Task["id"];
  projectId: Project["id"];
  userId: User["id"];
}) => {
  try {
    const res: Response = await fetch(
      `${process.env.BACKEND_URL}user/${userId}/project/${projectId}/task/${taskId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
};
