import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { FormProjectFields, type Project, type User } from "@/types";
import cloudinary from "@/libs/cloudinary";
import { error } from "console";

interface Params {
  params: {
    userId: User["id"];
    projectId: Project["id"];
  };
}

export const GET = async (req: NextRequest, { params }: Params) => {
  const { userId, projectId } = params;

  try {
    const project = await prisma.project.findUnique({
      where: {
        userId,
        id: projectId,
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
        },
      );
    }
  }
};

export const PUT = async (req: NextRequest, { params }: Params) => {
  const { projectId, userId } = params;
  const formData = await req.formData();
  const title = formData.get("title") as Project["title"];
  const description = formData.get("description") as Project["description"];
  try {
    const editedProject = await prisma.project.update({
      where: {
        userId,
        id: projectId,
      },
      data: {
        title,
        description,
      },
    });

    if (!editedProject) throw new Error("El proyecto no existe");

    return NextResponse.json(editedProject);
  } catch (e) {
    if (e instanceof Error) {
      return NextResponse.json(
        {
          error: e.message,
        },
        {
          status: 500,
        },
      );
    }
  }
};

export const DELETE = async (req: NextRequest, { params }: Params) => {
  const { userId, projectId } = params;
  try {
    const deletedProject = await prisma.project.delete({
      where: {
        userId,
        id: projectId,
      },
    });

    if (!deletedProject) throw new Error("Project do not exits");

    await cloudinary.api.delete_folder(`users/${userId}/projects/${projectId}`);

    return NextResponse.json(deletedProject);
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      return NextResponse.json(
        {
          error: e.message,
        },
        {
          status: 500,
        },
      );
    } else {
      return NextResponse.json(
        {
          error: e,
        },
        { status: 500 },
      );
    }
  }
};
