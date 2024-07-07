"use client";
import { createProject } from "@/api/projects/crud";
import Input from "@/components/ui/Input";
import { PROJECT_FIELDS_TEXT } from "@/consts";
import InternalServerError from "@/errors/InternalServerError";
import PrismaError from "@/errors/PrismaError";
import ResponseError from "@/errors/ResponseError";
import useProjectManagement from "@/hooks/projects/useProjectManagment";
import type {
  ProjectFormProps,
  ProjectFormInitialVales,
  ModalFormDefaultProps,
} from "@/types";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import { object, string } from "yup";

const CreateProject: React.FC<
  ModalFormDefaultProps<ProjectFormProps> & ProjectFormProps
> = ({ closeModal, formName }) => {
  const { data: session } = useSession();

  if (!session) {
    return;
  }
  const [error, setError] = useState<string | null>();

  const formikRef = useRef<any>(null);
  const [submitted, setSubmitted] = useState<boolean | null>();
  const { addProject } = useProjectManagement();

  const initialValues: ProjectFormInitialVales = { title: "", description: "" };

  const validationSchema = object({
    title: string().required("Please, enter a title for the project."),
    description: string().required(
      "Please, enter a description for the project."
    ),
  });

  const handleSubmit = async (values: ProjectFormInitialVales) => {
    setSubmitted(true);
    try {
      const newProject = await createProject({
        projectData: values,
        userId: session.user.id,
      });

      addProject(newProject);

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
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}
      innerRef={formikRef}
    >
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
              {PROJECT_FIELDS_TEXT.DESCRIPTION}
            </label>

            <Input
              as={Field}
              name="description"
              placeholder={PROJECT_FIELDS_TEXT.DESCRIPTION_HOLDER}
              textarea
            />
          </div>
          <ErrorMessage
            name="description"
            component="span"
            className="text-red-500 text-right"
          />
        </div>
      </Form>
    </Formik>
  );
};

export default CreateProject;
