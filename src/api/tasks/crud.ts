import ResponseError from "@/errors/ResponseError";
import { FormTaskFields, Project, Task, User } from "@/types";

export const getTasks = async ({
  projectId,
  userId,
}: {
  projectId: Project["id"];
  userId: User["id"];
}) => {
  try {
    const res: Response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${userId}/project/${projectId}/task/`
    );
    if (!res.ok) throw new ResponseError("Response error", 400);

    const data: Array<Task> = await res.json();
    return data;
  } catch (e) {}
};

export const createTask = async ({
  taskData,
  userId,
  projectId,
}: {
  taskData: FormData;
  projectId: Project["id"];
  userId: User["id"];
}) => {
  try {
    const res: Response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${userId}/project/${projectId}/task/`,
      {
        method: "POST",
        body: taskData,
      }
    );

    if (!res.ok) throw new Error();

    const data: Task = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
};
