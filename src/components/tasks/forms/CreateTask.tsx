"use client";
import { createTask } from "@/api/tasks/crud";
import FileInput from "@/components/ui/fields/FileInput";
import Input from "@/components/ui/fields/Input";
import Select from "@/components/ui/fields/SelectInput";
import TextArea from "@/components/ui/fields/TextArea";
import SpinnerLoader from "@/components/ui/loaders/SpinnerLoader";
import LoaderModal from "@/components/ui/modal/LoaderModal";
import { PROJECT_FIELDS_TEXT, STATUS_TEXTS, TASK_FIELDS_TEXTS } from "@/consts";
import InternalServerError from "@/errors/InternalServerError";
import PrismaError from "@/errors/PrismaError";
import ResponseError from "@/errors/ResponseError";
import { useAddTask } from "@/store/actions";
import { getActualProject } from "@/store/selectors";
import type {
  ModalFormDefaultProps,
  Project,
  TaskFormInitialValues,
  TaskFormProps,
  User,
} from "@/types";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { useRecoilValue } from "recoil";
import { mixed, object, string } from "yup";

const CreateTask: React.FC<
  ModalFormDefaultProps<TaskFormProps> & TaskFormProps
> = ({ closeModal, formName }) => {
  const { data: session } = useSession();

  const actualProject = useRecoilValue(getActualProject);

  const addTask = useAddTask();

  const [error, setError] = useState<string | null>();

  const formikRef = useRef<any>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const [submitted, setSubmitted] = useState<boolean | null>();
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
    setLoading(true);
    const { status, title, description, tags } = values;

    const data = new FormData();
    data.set("projectId", actualProject?.id as Project["id"]);
    data.set("title", title);
    data.set("description", description || "");
    data.set("status", status);
    if (tags) data.set("tags", JSON.stringify(tags));

    if (taskImage) data.set("image", taskImage);

    try {
      const newTask = await createTask({
        taskData: data,
        userId: session?.user.id as User["id"],
      });

      addTask(newTask);
      closeModal();
    } catch (e) {
      if (e instanceof ResponseError) {
        setError(e.message);
      } else if (e instanceof PrismaError || e instanceof InternalServerError) {
        if (!formikRef.current) return;
        if (!submitted) formikRef.current.submitForm();
      } else {
        setError("An unexpected error occurred, please try again");
      }
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
        {({ setFieldValue }) => (
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
                  placeholder={TASK_FIELDS_TEXTS.TITLE_HOLDER}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("title", e.currentTarget.value)
                  }
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
                <Field
                  as={TextArea}
                  name="description"
                  placeholder={TASK_FIELDS_TEXTS.DESCRIPTION_HOLDER}
                  rows={6}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("description", e.currentTarget.value)
                  }
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
                <Field
                  as={Select}
                  options={Object.entries(STATUS_TEXTS).map(([key, value]) => ({
                    value: value.value,
                    text: value.text,
                  }))}
                  name="status"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("status", e.currentTarget.value)
                  }
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
      {loading && (
        <LoaderModal loader={SpinnerLoader} text="Creating your task" />
      )}
    </>
  );
};

export default CreateTask;
