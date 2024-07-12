import type { Project, Task, User } from "@/types";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/libs/prisma";
import cloudinary from "@/libs/cloudinary";
import { UploadApiResponse } from "cloudinary";

interface TaskIdParams {
  params: {
    userId: User["id"];
    taskId: Task["id"];
  };
}

export const GET = async (req: NextRequest, { params }: TaskIdParams) => {
  const { taskId, userId } = params;
  try {
    const task = await prisma.task.findUnique({
      where: {
        id: taskId,
        userId,
      },
    });

    return NextResponse.json(task);
  } catch (e) {
    console.log(e);
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

export const PUT = async (req: NextRequest, { params }: TaskIdParams) => {
  const { taskId, userId } = params;
  try {
    const formData = await req.formData();
    const projectId = formData.get("projectId") as Project["id"];
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const status = formData.get("status") as string;
    const imageUrl = formData.get("image") as string | null;
    const newImageFile = formData.get("newImage") as File | null;
    const tagsString = formData.get("tags") as string | null;

    let imageResponse: UploadApiResponse | undefined;
    if (newImageFile && imageUrl) {
      const bytes = await newImageFile.arrayBuffer();
      const imageBuffer = Buffer.from(bytes);

      const publicIdMatch = imageUrl.match(/\/([^/]+)\.(jpg|jpeg|png|gif)$/i);
      if (!publicIdMatch || !publicIdMatch[1])
        throw new Error("Failed to extract public_id from image URL");

      const publicId = publicIdMatch[1];

      const uploadOptions = {
        folder: `users/${userId}/projects/${projectId}/taskImages`,
      };

      await new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(publicId, (error, result) => {
          if (error) return reject(error);
          resolve(result);
        });
      });

      await cloudinary.api.delete_resources(
        [`${uploadOptions.folder}/${publicId}`],
        { type: "upload", resource_type: "image" }
      );

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

    const editedTask = await prisma.task.update({
      where: {
        id: taskId,
        userId,
      },
      data: {
        projectId,
        title,
        description,
        status,
        image: imageResponse ? imageResponse.secure_url : imageUrl && imageUrl,
      },
    });

    return NextResponse.json(editedTask);
  } catch (e) {
    console.log(e);
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

export const DELETE = async (req: NextRequest, { params }: TaskIdParams) => {
  const { taskId, userId } = params;

  try {
    const deletedTask = await prisma.task.delete({
      where: {
        id: taskId,
        userId,
      },
    });

    if (!deletedTask) throw new Error("Task do not exits");

    const taskImageUrl = deletedTask.image;
    if (taskImageUrl) {
      const publicIdMatch = taskImageUrl.match(/\/([^/]+)\.jpg$/);
      if (!publicIdMatch || !publicIdMatch[1])
        throw new Error("Failed to extract public_id from image URL");

      const publicId = publicIdMatch[1];

      await new Promise((resolve, reject) => {
        cloudinary.uploader.destroy(publicId, (error, result) => {
          if (error) return reject(error);
          resolve(result);
        });
      });
    }

    return NextResponse.json(deletedTask);
  } catch (e) {
    console.log(e);
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
