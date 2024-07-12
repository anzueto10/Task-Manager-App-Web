import InternalServerError from "@/errors/InternalServerError";
import PrismaError from "@/errors/PrismaError";
import ResponseError from "@/errors/ResponseError";
import InvalidFieldsUserLogin from "@/errors/login/InvalidFieldsUserLogin";
import EmailAlredyInUseError from "@/errors/signup/EmailAlredyInUseError";
import UsernameAlredyInUse from "@/errors/signup/UsernameAlredyInUseError";
import { type User } from "@/types";

const registerUser = async (userData: FormData) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register/`,
      {
        method: "POST",
        body: userData,
      }
    );

    if (res.ok) {
      const data: User = await res.json();

      return data;
    }

    const { error, status }: { error: string; status: number } =
      await res.json();

    if (error === "Prisma Error.") {
      throw new PrismaError({ message: error, status });
    } else if (error === "The email already has an associated account.") {
      throw new EmailAlredyInUseError();
    } else if (error === "The fields can't be null.") {
      throw new InvalidFieldsUserLogin();
    } else if (error === "The username is already in use.") {
      throw new UsernameAlredyInUse();
    } else if (error === "Internal Server Error.") {
      throw new InternalServerError();
    } else throw new ResponseError(error, status);
  } catch (e) {
    throw e;
  }
};

export default registerUser;
