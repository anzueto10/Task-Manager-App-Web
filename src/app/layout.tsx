import { type Metadata } from "next";
import "./globals.css";
import { montserrat, roboto, inter, opensans, poppins } from "./fonts";
import SessionProviderWrapper from "@/components/SessionProviderWrapper";
import { getServerSession } from "next-auth";

export const metadata: Metadata = {
  title: "Task Manager App",
  description:
    "App for TODOS, task manager differents states and seccion for to save your tasks",
  authors: {
    name: "Anzueto",
  },
  icons: "../../public/icons",
};

const RootLayout = async ({
  children,
}: Readonly<{ children: React.ReactNode }>) => {
  const session = await getServerSession();
  return (
    <html className="dark">
      <body
        className={`${inter.className} h-dvh w-screen bg-blue-50 dark:bg-gray-900`}
      >
        <SessionProviderWrapper session={session}>
          {children}
        </SessionProviderWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
