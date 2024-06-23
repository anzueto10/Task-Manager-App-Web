import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { type Project, type Task, type User } from "@/types";

interface Params {
  params: {
    userId: User["id"];
    projectId: Project["id"];
    taskId: Task["id"];
  };
}

export const GET = async (req: Request, { params }: Params) => {
  const { userId, projectId, taskId } = params;
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: Number(taskId),
      },
    });

    return NextResponse.json(task);
  } catch (e) {
    if (e instanceof Error)
      return NextResponse.json(
        {
          error: e.message,
        },
        {
          status: 500,
        }
      );
  }
};
