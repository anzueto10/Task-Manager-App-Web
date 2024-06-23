import { type User, type FormUserFields } from "@/types";

const registerUser = async (userData: FormUserFields) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register/`,
      {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const data: User = await res.json();
    return data;
  } catch (e) {
    throw e;
  }
};

export default registerUser;
