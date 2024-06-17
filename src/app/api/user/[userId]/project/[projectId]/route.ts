import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { FormProjectFields, type Project, type User } from "@/types";

interface Params {
  params: {
    userId: User["id"];
    projectId: Project["id"];
  };
}

export const GET = async (req: Request, { params }: Params) => {
  const { userId, projectId } = params;

  try {
    const project = await prisma.project.findUnique({
      where: {
        id: Number(projectId),
      },
    });

    return NextResponse.json(project);
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

export const PUT = async (req: Request, { params }: Params) => {
  const { projectId } = params;
  const data: FormProjectFields = await req.json();
  const { description, title } = data;
  try {
    const newProject = await prisma.project.update({
      where: {
        id: Number(projectId),
      },
      data: {
        title,
        description,
      },
    });

    return NextResponse.json(newProject);
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

export const DELETE = async (req: Request, { params }: Params) => {
  const { userId, projectId } = params;

  try {
    const deletedProject = await prisma.project.delete({
      where: { id: Number(projectId) },
    });

    return NextResponse.json(deletedProject);
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
