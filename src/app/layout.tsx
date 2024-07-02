import { type Metadata } from "next";
import "./globals.css";
import { fontBody, fontHeading, fontDarkBody, fontDarkHeading } from "./fonts";
import { getServerSession } from "next-auth";
import { Providers } from "@/app/providers";

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
    <html
      className={`${fontBody.variable} ${fontHeading.variable} ${fontDarkBody.variable} ${fontDarkHeading.variable}`}
    >
      <body className="h-dvh w-screen bg-background-light dark:bg-background-dark">
        <Providers session={session}>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
