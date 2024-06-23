import { USER_FIELDS } from "@/consts";
import { type FormUserFields } from "@/types";

const getUserFormData = (formData: FormData): FormUserFields => {
  const username = formData.get(USER_FIELDS.USERNAME) as string;
  const email = formData.get(USER_FIELDS.EMAIL) as string;
  const password = formData.get(USER_FIELDS.PASSWORD) as string;

  if (username)
    return {
      username,
      email,
      password,
    };
  else {
    return {
      email,
      password,
    };
  }
};

export default getUserFormData;
