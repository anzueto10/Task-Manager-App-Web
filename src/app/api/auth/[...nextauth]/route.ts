import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";
import InvalidFieldsUserLogin from "@/errors/server/login/InvalidFieldsUserLogin";
import UserNotFoundError from "@/errors/server/login/UserNotFoundError";
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import PasswordsDoNotMatchesError from "@/errors/server/login/PasswordsDoNotMatchesError";

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "email",
          placeholder: "example@example.com",
          type: "email",
        },
        username: {
          label: "username",
          placeholder: "example10z",
          type: "text",
        },
        password: {
          label: "password",
          placeholder: "*******",
          type: "password",
        },
      },

      async authorize(credentials, req) {
        try {
          if (!credentials) throw new InvalidFieldsUserLogin();

          const userFound =
            (await prisma.user.findUnique({
              where: {
                email: credentials.email,
              },
            })) ||
            (await prisma.user.findUnique({
              where: {
                username: credentials.username,
              },
            }));

          if (!userFound) throw new UserNotFoundError();

          const matchedPassword = await bcrypt.compare(
            credentials.password,
            userFound.password
          );

          if (!matchedPassword) throw new PasswordsDoNotMatchesError();

          return {
            id: userFound.id,
            name: userFound.username,
            email: userFound.email,
          };
        } catch (e) {
          if (
            e instanceof InvalidFieldsUserLogin ||
            e instanceof UserNotFoundError ||
            e instanceof PasswordsDoNotMatchesError
          )
            throw e;
          else if (
            e instanceof PrismaClientKnownRequestError ||
            e instanceof PrismaClientValidationError ||
            e instanceof PrismaClientInitializationError
          )
            throw e;
          else throw new Error("Authorization error");
        }
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
