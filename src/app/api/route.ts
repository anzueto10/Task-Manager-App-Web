import { NextResponse } from "next/server";
import prisma from "@/libs/prisma";

export const GET = async (req: Request) => {
  return NextResponse.json("hoal");
};
