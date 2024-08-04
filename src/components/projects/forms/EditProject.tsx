"use client";
import { PROJECT_FIELDS_TEXT, STATUS_TEXTS, TASK_FIELDS_TEXTS } from "@/consts";
import InternalServerError from "@/errors/InternalServerError";
import PrismaError from "@/errors/PrismaError";
import ResponseError from "@/errors/ResponseError";
import type {
  ModalFormDefaultProps,
  ProjectFormProps,
  ProjectFormInitialVales,
  User,
} from "@/types";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useSession } from "next-auth/react";
import Input from "@/components/ui/fields/Input";
import { ChangeEvent, KeyboardEvent, useRef, useState } from "react";
import { object, string } from "yup";
import { useEditProject } from "@/store/actions";
import { useRecoilValue } from "recoil";
import { getActualProject } from "@/store/selectors";
import Select from "@/components/ui/fields/SelectInput";
import FileInput from "@/components/ui/fields/FileInput";
import TextArea from "@/components/ui/fields/TextArea";
import SpinnerLoader from "@/components/ui/loaders/SpinnerLoader";
import LoaderModal from "@/components/ui/modal/LoaderModal";
import { editProject } from "@/api/projects/crud";

const EditProject: React.FC<
  ModalFormDefaultProps<ProjectFormProps> & ProjectFormProps
> = ({ closeModal, formName, projectDescription, projectId, projectTitle }) => {
  const { data: session } = useSession();
  const formikRef = useRef<any>(null);
  const [submitted, setSubmitted] = useState<boolean | null>();
  const [loading, setLoading] = useState<boolean>(false);

  const editProjectState = useEditProject();
  const [error, setError] = useState<string | null>();

  const actualProject = useRecoilValue(getActualProject);
  if (!actualProject) return;

  const initialValues: ProjectFormInitialVales = {
    title: projectTitle || "",
    description: projectDescription || "",
  };

  const validationSchema = object({
    title: string().required("Please, enter a title for the project."),
    description: string().required(
      "Please, enter a description for the project.",
    ),
  });

  const handleSubmit = async (values: ProjectFormInitialVales) => {
    setSubmitted(true);
    setLoading(true);

    const { description, title } = values;

    if (description === projectDescription && title === projectTitle) {
      return closeModal();
    }

    const data = new FormData();
    data.set("title", title);
    data.set("description", description);

    try {
      if (projectId) {
        const editedProject = await editProject({
          projectData: data,
          projectId,
          userId: session?.user.id as User["id"],
        });

        editProjectState({ projectData: editedProject, projectId });

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
                  {PROJECT_FIELDS_TEXT.TITLE}
                </label>
                <Field
                  as={Input}
                  name="title"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
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
                  {PROJECT_FIELDS_TEXT.DESCRIPTION}
                </label>
                <Field
                  as={TextArea}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("title", e.currentTarget.value)
                  }
                  name="description"
                  placeholder={PROJECT_FIELDS_TEXT.DESCRIPTION_HOLDER}
                  rows={6}
                  value={values.description}
                />
              </div>
              <ErrorMessage
                name="description"
                component="span"
                className="text-red-500 text-right"
              />
            </div>
          </Form>
        )}
      </Formik>
      {loading && (
        <LoaderModal loader={SpinnerLoader} text="Saving your project" />
      )}
    </>
  );
};

export default EditProject;
