import { type Metadata } from "next";
import "./globals.css";
import { fontBody, fontHeading, fontDarkBody, fontDarkHeading } from "./fonts";
import { getServerSession } from "next-auth";
import { Providers } from "@/app/providers";
import cn from "@/libs/classNames";

export const metadata: Metadata = {
  title: "Task Manager App",
  description:
    "App for TODOS, task manager differents states and seccion for to save your tasks",
  authors: {
    name: "Anzueto",
  },
};

const RootLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const session = await getServerSession();
  return (
    <html>
      <body
        className={cn(
          "antialiased",
          fontHeading.variable,
          fontBody.variable,
          "flex flex-col min-h-dvh"
        )}
      >
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
