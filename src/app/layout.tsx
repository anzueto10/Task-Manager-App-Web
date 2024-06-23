import { type Metadata } from "next";
import "./globals.css";
import { montserrat, roboto, inter, opensans, poppins } from "./fonts";

export const metadata: Metadata = {
  title: "Task Manager App",
  description:
    "App for TODOS, task manager differents states and seccion for to save your tasks",
  authors: {
    name: "Anzueto",
  },
  icons: "../../public/icons",
};

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html className="dark">
      <head>
        <link rel="manifest" href="../../site.webmanifest" />
      </head>
      <body
        className={`${inter.className} h-dvh w-screen bg-blue-50 dark:bg-gray-900`}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
