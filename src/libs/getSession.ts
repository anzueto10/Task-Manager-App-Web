import { decryptData } from "@/utils/encrypt/encryption";
import { cookies } from "next/headers";

const getSession = async () => {
  const session = cookies().get("session")?.value;
  if (!session) return null;
  return await decryptData(session);
};

export default getSession;
