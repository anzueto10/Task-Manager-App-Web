import NextAuth, { type AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/libs/prisma";
import bcrypt from "bcrypt";
import InvalidFieldsUserLogin from "@/errors/login/InvalidFieldsUserLogin";
import UserNotFoundError from "@/errors/login/UserNotFoundError";
import {
  PrismaClientInitializationError,
  PrismaClientKnownRequestError,
  PrismaClientValidationError,
} from "@prisma/client/runtime/library";
import PasswordsDoNotMatchesError from "@/errors/login/PasswordsDoNotMatchesError";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
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

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID!,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET!,
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
        emailOrUsername: {
          label: "email or username",
          placeholder: "example@gmail.com",
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
                username: credentials.emailOrUsername,
              },
            })) ||
            (await prisma.user.findUnique({
              where: {
                email: credentials.emailOrUsername,
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
