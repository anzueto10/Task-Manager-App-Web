import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { FormProjectFields, Project, type User } from "@/types";
import InvalidFields from "@/errors/InvalidFields";
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import { getServerSession } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";

interface Params {
  params: {
    userId: User["id"];
  };
}

export const GET = async (req: NextApiRequest, { params }: Params) => {
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

export const POST = async (req: Request) => {
  const data: FormProjectFields = await req.json();
  const { description, title } = data;
  const session = await getServerSession();

  try {
    if (!session) throw new Error("Plis login");
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
    });
    if (!description || !title) throw new InvalidFields();

    if (user) {
      const newProject = await prisma.project.create({
        data: {
          title,
          description,
          userId: user.id,
        },
      });

      return NextResponse.json(newProject);
    } else throw new Error("user do not exists");
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
