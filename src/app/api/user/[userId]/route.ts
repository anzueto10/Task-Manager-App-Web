import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { FormUserFields, User } from "@/types";
import { authOptions } from "../../auth/[...nextauth]/authOptions";
import { getServerSession } from "next-auth";

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
  const session = await getServerSession(authOptions);
  const { userId: id } = params;
  try {
    const user = await prisma.user.findUnique({
      where: {
        id,
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
        },
      );
    }
  }
};

export const PUT = async (req: Request, { params }: PutParams) => {
  const { userId } = params;
  const { email, password, username } = params.userData;
  try {
    const newUser = await prisma.user.update({
      where: {
        id: userId,
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

export const DELETE = async (request: Request, { params }: DeleteParams) => {
  const { userId } = params;

  try {
    const deletedUser = await prisma.user.delete({
      where: {
        id: userId,
      },
    });

    return NextResponse.json(deletedUser);
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
