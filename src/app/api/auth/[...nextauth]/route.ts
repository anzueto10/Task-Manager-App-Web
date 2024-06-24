import NextAuth, { type AuthOptions } from "next-auth";
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
import GoogleProvider from "next-auth/providers/google";
import { PrismaAdapter } from "@next-auth/prisma-adapter";

export const authOptions: AuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
      profile(profile) {
        return {
          id: profile.sub,
          name: `${profile.given_name} ${profile.family_name}`,
          email: profile.email,
          image: profile.picture,
        };
      },
    }),
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
            userFound.password as string
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
            e instanceof PasswordsDoNotMatchesError ||
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
  pages: {
    signIn: "/login",
  },
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXT_AUTH_SECRET,
  callbacks: {
    async signIn({ user, account, email }) {
      return true;
    },
    async jwt({ token, user }) {
      return {
        ...token,
        ...user,
      };
    },

    async session({ session, token }) {
      return session;
    },
  },

  session: {
    strategy: "jwt",
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
