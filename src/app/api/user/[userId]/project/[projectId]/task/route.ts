import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { type FormTaskFields, type Project, type User } from "@/types";
import { TaskTag, type Task } from "@prisma/client";

interface Params {
  params: {
    userId: User["id"];
    projectId: Project["id"];
  };
}

export const GET = async (req: Request, { params }: Params) => {
  const { userId, projectId } = params;
  try {
    const tasks = await prisma.task.findMany({
      where: {
        projectId: Number(projectId),
      },
    });

    return NextResponse.json(tasks);
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

export const PUT = async (req: Request, { params }: Params) => {
  const { userId, projectId } = params;
  const data: FormTaskFields = await req.json();
  const { description, status, image, tags, title } = data;

  const imageBuffer = Buffer.from(image).toString("base64");

  try {
    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        projectId,
        status: status.text,
        image: imageBuffer,
      },
    });

    const newTags = await prisma.taskTag.createMany({
      data: tags as unknown as TaskTag[],
    });

    return NextResponse.json({
      ...newTask,
      ...newTags,
    });
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
