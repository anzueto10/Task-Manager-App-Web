"use client";
import { createProject } from "@/api/projects/crud";
import { createTask } from "@/api/tasks/crud";
import FileInput from "@/components/ui/FileInput";
import Input from "@/components/ui/Input";
import Select from "@/components/ui/SelectInput";
import {
  PROJECT_FIELDS_TEXT,
  STATUS_TEXTS,
  STATUS_TEXTS_CLIENT,
  TASK_FIELDS,
  TASK_FIELDS_TEXTS,
} from "@/consts";
import InternalServerError from "@/errors/InternalServerError";
import PrismaError from "@/errors/PrismaError";
import ResponseError from "@/errors/ResponseError";
import useProjectManagement from "@/hooks/projects/useProjectManagment";
import type {
  ModalFormDefaultProps,
  TaskFormInitialValues,
  TaskFormProps,
} from "@/types";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import { mixed, object, string } from "yup";

const CreateTask: React.FC<
  ModalFormDefaultProps<TaskFormProps> & TaskFormProps
> = ({ closeModal, formName }) => {
  const { data: session } = useSession();
  if (!session) {
    return;
  }
  const [error, setError] = useState<string | null>();

  const formikRef = useRef<any>(null);
  const [submitted, setSubmitted] = useState<boolean | null>();
  const { addProject } = useProjectManagement();
  const [taskImage, setTaskImage] = useState<File>();

  const initialValues: TaskFormInitialValues = {
    title: "",
    description: "",
    status: "backlog",
    image: undefined,
    tags: [],
  };

  const validationSchema = object({
    title: string().required("Please, enter a title for the task."),
    description: string().required("Please, enter a description for the task."),
    status: string()
      .required("Please, enter a status for the task")
      .oneOf(
        ["backlog", "inProgress", "inReview", "completed"],
        "Invalid status"
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
    const { status, title, description, tags } = values;

    const data = new FormData();
    data.set("title", title);
    data.set("description", description || "");
    data.set("status", status);
    if (tags) data.set("tags", JSON.stringify(tags));

    if (taskImage) data.set("image", taskImage);

    try {
      const newTask = await createTask({
        taskData: data,
        projectId: "3729f857-f183-4e20-8e7d-b0cb39102608",
        userId: session.user.id,
      });

      closeModal();
    } catch (e) {
      setError(`error --.-- `);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      innerRef={formikRef}
    >
      {({ setFieldValue }) => (
        <Form className="p-4 md:p-5" name={formName} id={formName}>
          {error && error}
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label
                htmlFor="project-title"
                className=" text-base font-medium text-right"
              >
                {PROJECT_FIELDS_TEXT.TITLE}
              </label>
              <Input
                as={Field}
                name="title"
                placeholder={PROJECT_FIELDS_TEXT.TITLE_HOLDER}
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
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                {TASK_FIELDS_TEXTS.DESCRIPTION}
              </label>
              <Input
                as={Field}
                name="description"
                placeholder={TASK_FIELDS_TEXTS.DESCRIPTION_HOLDER}
                textarea
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
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
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
                className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
              >
                {TASK_FIELDS_TEXTS.IMAGE}
              </label>
              <FileInput
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
  );
};

export default CreateTask;
