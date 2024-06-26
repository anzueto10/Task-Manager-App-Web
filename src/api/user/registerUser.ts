import ResponseError from "@/errors/ResponseError";
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

    if (!res.ok) {
      const errorResponse: { error: string; status: number } = await res.json();
      throw new ResponseError(errorResponse.error, errorResponse.status);
    }

    const data: User = await res.json();
    console.log(res, data);

    return data;
  } catch (e) {
    throw e;
  }
};

export default registerUser;
