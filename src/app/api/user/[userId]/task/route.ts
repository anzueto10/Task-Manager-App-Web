import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import { type FormTaskFields, type Project, type User } from "@/types";
import type { TaskTag, Task } from "@prisma/client";
import cloudinary from "@/libs/cloudinary";
import { UploadApiResponse } from "cloudinary/types";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

interface Params {
  params: {
    userId: User["id"];
  };
}

export const GET = async (req: NextRequest, { params }: Params) => {
  const { userId } = params;

  try {
    const tasks = await prisma.task.findMany({
      where: {
        userId,
      },
    });

    return NextResponse.json(tasks);
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

export const POST = async (req: NextRequest, { params }: Params) => {
  try {
    const { userId } = params;

    const formData = await req.formData();
    const projectId = formData.get("projectId") as Project["id"];
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const status = formData.get("status") as string;
    const imageFile = formData.get("image") as File | null;
    const tagsString = formData.get("tags") as string | null;

    if (!projectId) throw new Error("No project id");

    let tags: Array<TaskTag> = [];
    if (tagsString) {
      tags = JSON.parse(tagsString) as Array<TaskTag>;
    }

    let imageResponse: UploadApiResponse | undefined;
    if (imageFile) {
      const bytes = await imageFile.arrayBuffer();
      const imageBuffer = Buffer.from(bytes);
      const uploadOptions = {
        folder: `users/${userId}/projects/${projectId}/taskImages`,
      };

      imageResponse = await new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream(uploadOptions, (error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result);
            }
          })
          .end(imageBuffer);
      });
    }

    const newTask = await prisma.task.create({
      data: {
        title,
        description,
        projectId,
        status,
        image: imageResponse ? imageResponse.secure_url : null,
        userId,
      },
    });

    if (tags.length > 0) {
      await prisma.taskTag.createMany({
        data: tags.map((tag) => ({
          name: tag.name,
          taskId: newTask.id,
        })),
      });
    }

    return NextResponse.json(newTask);
  } catch (e: any) {
    return NextResponse.json(
      {
        error: e.message || "Hubo un error al procesar la solicitud.",
      },
      {
        status: 500,
      },
    );
  }
};
