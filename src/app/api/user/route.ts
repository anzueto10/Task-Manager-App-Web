import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { type FormUserFields } from "@/types";

export const GET = async (req: Request) => {
  try {
    const users = await prisma.user.findMany();
    return NextResponse.json(users);
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
  try {
    const data: FormUserFields = await req.json();
    const { email, password, username } = data;

    const newUser = await prisma.user.create({
      data: {
        email: email,
        password: password,
        username,
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
        }
      );
    }
  }
};
