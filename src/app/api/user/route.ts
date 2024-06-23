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
