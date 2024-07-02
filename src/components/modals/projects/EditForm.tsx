"use client";
import { createProject } from "@/api/projects/crud";
import { PROJECT_FIELDS_TEXT } from "@/consts";
import InternalServerError from "@/errors/InternalServerError";
import PrismaError from "@/errors/PrismaError";
import ResponseError from "@/errors/ResponseError";
import useProjectManagement from "@/hooks/projects/useProjectManagment";
import { type ProjectFormInitialVales } from "@/types";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import { useRef, useState } from "react";
import { object, string } from "yup";

interface Props {
  closeModal: () => void;
}

const EditForm: React.FC<Props> = ({ closeModal }) => {
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
      console.log(e);
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
      <Form className="p-4 md:p-5">
        {error && error}
        <div className="grid gap-4 mb-4 grid-cols-2">
          <div className="col-span-2">
            <label
              htmlFor="project-title"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              {PROJECT_FIELDS_TEXT.TITLE}
            </label>
            <Field
              type="text"
              name="title"
              id="project-title"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
              placeholder={PROJECT_FIELDS_TEXT.TITLE_HOLDER}
            />
            <ErrorMessage
              name="title"
              component="span"
              className="text-red-500 font-bold"
            />
          </div>

          <div className="col-span-2">
            <label
              htmlFor="description"
              className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
            >
              {PROJECT_FIELDS_TEXT.DESCRIPTION}
            </label>
            <Field
              as="textarea"
              id="description"
              rows={4}
              name="description"
              className="block p-2.5 w-full text-base resize-none text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder={PROJECT_FIELDS_TEXT.DESCRIPTION_HOLDER}
            />
            <ErrorMessage
              name="description"
              component="span"
              className="text-red-500 font-bold"
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white w-full inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="me-1 -ms-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
              clipRule="evenodd"
            ></path>
          </svg>
          {PROJECT_FIELDS_TEXT.BUTTON}
        </button>
      </Form>
    </Formik>
  );
};

export default EditForm;
