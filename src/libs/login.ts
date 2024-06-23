import { encryptData } from "@/utils/encrypt/encryption";
import getUserFormData from "@/utils/user/getUserFormData";
import { cookies } from "next/headers";

export const login = async (formData: FormData) => {
  const user = getUserFormData(formData);

  const expires = new Date(Date.now() + 10 * 1000);
  const session = encryptData(user);
  cookies().set("session", session, { expires: expires, httpOnly: true });
};
