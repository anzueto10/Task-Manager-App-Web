import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { FormTaskFields, type Project, type Task, type User } from "@/types";

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

    if (task?.image) {
      const imageBuffer = task.image;
      const headers = new Headers();

      headers.set("Content-Type", "image/*");

      return new NextResponse(imageBuffer, {
        status: 200,
        statusText: "OK",
        headers,
      });
    } else {
      return NextResponse.json({
        message: "Task does not have an image associated with it.",
      });
    }
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json(
        {
          error: e.message,
        },
        {
          status: 500,
        }
      );
    }
  }
};

export const POST = async (req: Request, { params }: Params) => {
  const { userId, projectId, taskId } = params;
  const data: { image: Buffer } = await req.json();
  const { image } = data;
  const newImage = Buffer.from(image).toString("base64");

  try {
    const task = await prisma.task.update({
      where: { id: Number(taskId) },
      data: {
        image: newImage,
      },
    });

    return NextResponse.json(task);
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json(
        {
          error: e.message,
        },
        {
          status: 500,
        }
      );
    }
  }
};
