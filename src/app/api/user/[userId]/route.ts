import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { FormUserFields, User } from "@/types";

interface GetParams {
  params: {
    userId: User["id"];
  };
}

interface PutParams {
  params: {
    userId: User["id"];
    userData: FormUserFields;
  };
}

interface DeleteParams {
  params: {
    userId: User["id"];
  };
}

export const GET = async (req: Request, { params }: GetParams) => {
  const { userId: id } = params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id: Number(id),
      },
    });

    return NextResponse.json(user);
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

export const PUT = async (req: Request, { params }: PutParams) => {
  const { userId } = params;
  const { email, name, password, username } = params.userData;
  try {
    const newUser = await prisma.user.update({
      where: {
        id: Number(userId),
      },
      data: {
        email,
        username,
        password,
        updatedAt: new Date(),
      },
    });

    return NextResponse.json(newUser);
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

export const DELETE = async (request: Request, { params }: DeleteParams) => {
  const { userId } = params;

  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: Number(userId),
      },
    });

    return NextResponse.json(deletedUser);
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
