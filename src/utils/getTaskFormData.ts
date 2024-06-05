import { TASK_FIELDS } from "@/consts";
import { type FormTaskFields, type Status } from "@/types";

const getTaskFormData = ({
  form,
}: {
  form: HTMLFormElement;
}): FormTaskFields => {
  const data = new FormData(form);

  const title = data.get(TASK_FIELDS.TITLE) as string;
  const description = data.get(TASK_FIELDS.DESCRIPTION) as string;
  const tagsString = data.get(TASK_FIELDS.TAGS) as string;
  const tags = tagsString ? tagsString.split(",") : [];
  const status = data.get(TASK_FIELDS.STATUS) as Status;
  const project = new Number(data.get(TASK_FIELDS.PROJECT)) as number;
  const image = data.get(TASK_FIELDS.IMAGE) as File;

  //TODO hacer validaciones y lanzar errores

  return {
    title,
    description,
    tags,
    status,
    project,
    image,
  };
};

export default getTaskFormData;
