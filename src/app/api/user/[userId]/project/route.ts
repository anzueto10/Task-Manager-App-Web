import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { FormProjectFields, type User } from "@/types";

interface GetParams {
  params: {
    userId: User["id"];
  };
}

interface PostParams {
  params: {
    userId: User["id"];
  };
}

export const GET = async (req: Request, { params }: GetParams) => {
  const { userId } = params;
  try {
    const projects = await prisma.project.findMany({
      where: {
        ownerId: Number(userId),
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

export const POST = async (req: Request, { params }: PostParams) => {
  const { userId } = params;
  const data: FormProjectFields = await req.json();
  const { description, title } = data;
  try {
    const newProject = await prisma.project.create({
      data: {
        ownerId: Number(userId),
        title,
        description,
      },
    });

    return NextResponse.json(newProject);
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
