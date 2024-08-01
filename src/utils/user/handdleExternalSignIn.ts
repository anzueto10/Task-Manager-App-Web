import { Providers } from "@/types";
import { signIn } from "next-auth/react";
import { redirect } from "next/navigation";

const handleExternalSignIn = async (provider: Providers) => {
  try {
    await signIn(`${provider}`, {
      callbackUrl: "/",
      redirect: false,
    });
  } catch (e) {
    console.error(`Error al iniciar sesión con ${provider}`, e);
    redirect("/login");
  } finally {
  }
};

export default handleExternalSignIn;
