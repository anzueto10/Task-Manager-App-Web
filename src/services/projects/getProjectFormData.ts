import { PROJECT_FIELDS } from "@/consts";
import { type FormProjectFields } from "@/types";

const getProjectFormData = ({
  form,
}: {
  form: HTMLFormElement;
}): FormProjectFields => {
  const data = new FormData(form);

  const title = data.get(PROJECT_FIELDS.TITLE) as string;
  const description = data.get(PROJECT_FIELDS.DESCRIPTION) as string;

  //TODO hacer validaciones y lanzar errores

  return {
    title,
    description,
  };
};

export default getProjectFormData;
