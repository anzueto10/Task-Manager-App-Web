import prisma from "@/libs/prisma";
import { FormUserFields } from "@/types";
import { NextResponse } from "next/server";
import bcrypt from "bcrypt";
import InvalidFieldsUserRegisterError from "@/errors/server/signup/InvalidFieldsUserRegisterError";
import {
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
  PrismaClientInitializationError,
} from "@prisma/client/runtime/library";
import EmailAlredyInUseError from "@/errors/server/signup/EmailAlredyInUseError";
import UsernameAlredyInUse from "@/errors/server/signup/UsernameAlredyInUseError";

export const POST = async (req: Request) => {
  try {
    const data: FormUserFields = await req.json();

    const { email, password, username } = data;

    if (!email || !password || !username)
      throw new InvalidFieldsUserRegisterError();

    const emailFound = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    const userNameFound = await prisma.user.findUnique({
      where: {
        username: username,
      },
    });

    if (emailFound) throw new EmailAlredyInUseError();

    if (userNameFound) throw new UsernameAlredyInUse();

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await prisma.user.create({
      data: {
        email,
        password: hashedPassword,
        username: username,
      },
    });

    const { password: _, ...user } = newUser;

    return NextResponse.json(user, {
      status: 200,
    });
  } catch (e) {
    if (e instanceof InvalidFieldsUserRegisterError) {
      return NextResponse.json(
        {
          error: e.message,
        },
        {
          status: e.status,
        }
      );
    } else if (e instanceof UsernameAlredyInUse) {
      return NextResponse.json(
        {
          message: e.message,
        },
        {
          status: e.status,
        }
      );
    } else if (e instanceof EmailAlredyInUseError) {
      return NextResponse.json(
        {
          message: e.message,
        },
        {
          status: e.status,
        }
      );
    } else if (e instanceof PrismaClientKnownRequestError) {
      return NextResponse.json({ error: e.message }, { status: 500 });
    } else if (e instanceof PrismaClientValidationError) {
      return NextResponse.json({ error: e.message }, { status: 400 });
    } else if (e instanceof PrismaClientInitializationError) {
      return NextResponse.json({ error: e.message }, { status: 500 });
    } else if (e instanceof Error) {
      return NextResponse.json(
        {
          error: e.message,
        },
        {
          status: 500,
        }
      );
    } else {
      return NextResponse.json(
        {
          error: "Internal Server Error",
        },
        {
          status: 500,
        }
      );
    }
  }
};
