import { FormUserFields } from "@/types";
import { signIn } from "next-auth/react";

const loginUser = async (userData: FormUserFields) => {
  try {
    const signInData: {
      username?: string;
      email: string;
      password: string;
    } = {
      email: userData.email,
      password: userData.password,
    };

    if (userData.username) {
      signInData.username = userData.username;
    }

    const res = await signIn("credentials", {
      ...signInData,
      redirect: false,
    });

    return res;
  } catch (e) {
    throw e;
  }
};

export default loginUser;
