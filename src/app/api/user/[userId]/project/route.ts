import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { FormProjectFields, Project, type User } from "@/types";
import InvalidFields from "@/errors/InvalidFields";
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { getServerSession } from "next-auth";
import cloudinary from "@/libs/cloudinary";

interface ProjectParams {
  params: {
    userId: User["id"];
  };
}

export const GET = async (req: NextRequest, { params }: ProjectParams) => {
  const { userId } = params;

  try {
    const projects = await prisma.project.findMany({
      where: {
        userId,
      },
    });

    return NextResponse.json(projects);
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

export const POST = async (req: NextRequest, { params }: ProjectParams) => {
  const formData = await req.formData();
  const title = formData.get("title") as Project["title"];
  const description = formData.get("description") as Project["description"];

  const { userId } = params;

  try {
    if (!description || !title) throw new InvalidFields();

    const newProject = await prisma.project.create({
      data: {
        title,
        description,
        userId,
      },
    });

    await cloudinary.api.create_folder(
      `users/${userId}/projects/${newProject.id}`
    );

    return NextResponse.json(newProject);
  } catch (e) {
    if (e instanceof InvalidFields) {
      return NextResponse.json(
        {
          error: e.message,
        },
        {
          status: e.status,
        }
      );
    } else if (
      e instanceof PrismaClientKnownRequestError ||
      e instanceof PrismaClientValidationError ||
      e instanceof PrismaClientInitializationError
    ) {
      return NextResponse.json({ error: "Prisma Error." }, { status: 500 });
    } else {
      return NextResponse.json(
        {
          error: "Internal Server Error.",
        },
        {
          status: 500,
        }
      );
    }
  }
};
