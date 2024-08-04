import ResponseError from "@/errors/ResponseError";
import type { Task, User } from "@/types";

export const getTasks = async ({ userId }: { userId: User["id"] }) => {
  try {
    const res: Response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${userId}/task/`,
    );
    if (!res.ok) throw new ResponseError("Response error", 400);

    const data: Array<Task> = await res.json();
    return data;
  } catch (e) {}
};

export const createTask = async ({
  taskData,
  userId,
}: {
  taskData: FormData;
  userId: User["id"];
}) => {
  try {
    const res: Response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${userId}/task/`,
      {
        method: "POST",
        body: taskData,
      },
    );

    if (!res.ok) throw new Error();

    const data: Task = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
};

export const deleteTask = async ({
  taskId,
  userId,
}: {
  taskId: Task["id"];
  userId: User["id"];
}) => {
  try {
    const res: Response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${userId}/task/${taskId}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      },
    );

    if (!res.ok) throw new Error("");

    const data = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
};

export const editTask = async ({
  taskId,
  taskData,
  userId,
}: {
  taskId: Task["id"];
  taskData: FormData;
  userId: User["id"];
}) => {
  try {
    const res: Response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/user/${userId}/task/${taskId}`,
      {
        method: "PUT",
        body: taskData,
      },
    );

    if (!res.ok) throw new Error("");

    const data = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
};
