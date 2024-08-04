"use client";
import { PROJECT_FIELDS_TEXT, STATUS_TEXTS, TASK_FIELDS_TEXTS } from "@/consts";
import InternalServerError from "@/errors/InternalServerError";
import PrismaError from "@/errors/PrismaError";
import ResponseError from "@/errors/ResponseError";
import type {
  ModalFormDefaultProps,
  TaskFormProps,
  TaskFormInitialValues,
  User,
  Project,
} from "@/types";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import Input from "@/components/ui/fields/Input";
import { KeyboardEvent, useRef, useState } from "react";
import { mixed, object, string } from "yup";
import { useEditTask } from "@/store/actions";
import { editTask } from "@/api/tasks/crud";
import { useRecoilValue } from "recoil";
import { getActualProject } from "@/store/selectors";
import Select from "@/components/ui/fields/SelectInput";
import FileInput from "@/components/ui/fields/FileInput";
import TextArea from "@/components/ui/fields/TextArea";
import SpinnerLoader from "@/components/ui/loaders/SpinnerLoader";
import LoaderModal from "@/components/ui/modal/LoaderModal";

const EditTask: React.FC<
  ModalFormDefaultProps<TaskFormProps> & TaskFormProps
> = ({
  closeModal,
  formName,
  taskDescription,
  taskImage: initialTaskImage,
  taskStatus,
  taskTags,
  taskTitle,
  taskId,
}) => {
  const { data: session } = useSession();

  const actualProject = useRecoilValue(getActualProject);
  const [error, setError] = useState<string | null>();

  const formikRef = useRef<any>(null);
  const [submitted, setSubmitted] = useState<boolean | null>();
  const [loading, setLoading] = useState<boolean>(false);
  const [taskImage, setTaskImage] = useState<File>();

  const editStateTask = useEditTask();

  const initialValues: TaskFormInitialValues = {
    title: taskTitle || "",
    description: taskDescription || "",
    status: taskStatus || "backlog",
    image: undefined,
    tags: taskTags || undefined,
  };
  const validationSchema = object({
    title: string().required("Please, enter a title for the task."),
    description: string().required("Please, enter a description for the task."),
    status: string()
      .required("Please, enter a status for the task")
      .oneOf(
        ["backlog", "inProgress", "inReview", "completed"],
        "Invalid status",
      ),
    image: mixed()
      .nullable()
      .test("fileType", "Unsupported File Format", (value: any) => {
        if (!value) return true;
        return (
          value && (value.type === "image/png" || value.type === "image/jpeg")
        );
      }),
  });

  const handleSubmit = async (values: TaskFormInitialValues) => {
    setSubmitted(true);
    setLoading(true);

    const { status, title, description, tags } = values;

    if (
      title === taskTitle &&
      description === taskDescription &&
      tags === taskTags &&
      status === taskStatus &&
      !taskImage
    ) {
      return closeModal();
    }

    const data = new FormData();
    data.set("title", title);
    data.set("description", description || "");
    data.set("status", status);
    data.set("projectId", actualProject?.id as Project["id"]);
    if (tags) data.set("tags", JSON.stringify(tags));

    if (initialTaskImage) data.set("image", initialTaskImage);
    if (taskImage) data.set("newImage", taskImage);
    try {
      if (taskId) {
        const editedTask = await editTask({
          taskId,
          taskData: data,
          userId: session?.user.id as User["id"],
        });

        editStateTask({ taskData: editedTask, taskId });

        closeModal();
      } else {
        closeModal();
      }
    } catch (e) {
      if (e instanceof ResponseError) {
        setError(e.message);
      } else if (e instanceof PrismaError || e instanceof InternalServerError) {
        if (!formikRef.current) return;
        if (!submitted) formikRef.current.submitForm();
      } else {
        setError("An unexpected error occurred, please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
        innerRef={formikRef}
      >
        {({ setFieldValue, values }) => (
          <Form className="p-4 md:p-5" name={formName} id={formName}>
            {error && error}
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="title" className="text-base font-medium">
                  {TASK_FIELDS_TEXTS.TITLE}
                </label>
                <Field
                  as={Input}
                  name="title"
                  onInput={(e: KeyboardEvent<HTMLInputElement>) =>
                    setFieldValue("title", e.currentTarget.value)
                  }
                  placeholder={PROJECT_FIELDS_TEXT.TITLE_HOLDER}
                  value={values.title}
                />
              </div>
              <ErrorMessage
                name="title"
                component="span"
                className="text-red-500 text-right"
              />

              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="description"
                  className="block mb-2 text-base font-medium"
                >
                  {TASK_FIELDS_TEXTS.DESCRIPTION}
                </label>
                <Field
                  as={TextArea}
                  onInput={(e: KeyboardEvent<HTMLTextAreaElement>) =>
                    setFieldValue("description", e.currentTarget.value)
                  }
                  name="description"
                  placeholder={TASK_FIELDS_TEXTS.DESCRIPTION_HOLDER}
                  rows={6}
                  value={values.description}
                />
              </div>
              <ErrorMessage
                name="description"
                component="span"
                className="text-red-500 text-right"
              />

              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="status"
                  className="block mb-2 text-base font-medium"
                >
                  {TASK_FIELDS_TEXTS.STATUS}
                </label>
                <Select
                  as={Field}
                  options={Object.entries(STATUS_TEXTS).map(([key, value]) => ({
                    value: value.value,
                    text: value.text,
                  }))}
                  name="status"
                />
              </div>
              <ErrorMessage
                name="status"
                component="span"
                className="text-red-500 text-right"
              />

              <div className="grid grid-cols-4 items-center gap-4">
                <label
                  htmlFor="image"
                  className="block mb-2 text-base font-medium"
                >
                  {TASK_FIELDS_TEXTS.IMAGE}
                </label>
                <FileInput
                  initialImage={initialTaskImage}
                  name="image"
                  setImage={(image: File) => {
                    setFieldValue("image", image);
                    setTaskImage(image);
                  }}
                />
              </div>
              <ErrorMessage
                name="image"
                component="span"
                className="text-red-500 text-right"
              />
            </div>
          </Form>
        )}
      </Formik>
      {loading && (
        <LoaderModal loader={SpinnerLoader} text="Saving your task" />
      )}
    </>
  );
};

export default EditTask;
