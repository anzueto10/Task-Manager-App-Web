import React, { ChangeEvent, useState } from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import Input from "@/components/ui/fields/Input";
import TextArea from "@/components/ui/fields/TextArea";
import SpinnerLoader from "@/components/ui/loaders/SpinnerLoader";
import LoaderModal from "@/components/ui/modal/LoaderModal";
import { PROJECT_FIELDS_TEXT } from "@/consts";
import { useSession } from "next-auth/react";
import { createProject } from "@/api/projects/crud";
import { useAddProject } from "@/store/actions";
import {
  ProjectFormInitialVales,
  ModalFormDefaultProps,
  ProjectFormProps,
  User,
} from "@/types";

const CreateProject: React.FC<
  ModalFormDefaultProps<ProjectFormProps> & ProjectFormProps
> = ({ closeModal, formName }) => {
  const { data: session } = useSession();
  const addProject = useAddProject();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>();

  const initialValues: ProjectFormInitialVales = {
    title: "",
    description: "",
  };

  const validationSchema = object({
    title: string().required("Please, enter a title for the project."),
    description: string().required(
      "Please, enter a description for the project.",
    ),
  });

  const handleSubmit = async (values: ProjectFormInitialVales) => {
    setLoading(true);
    const { description, title } = values;

    const data = new FormData();
    data.set("title", title);
    data.set("description", description);
    try {
      const newProject = await createProject({
        projectData: data,
        userId: session?.user.id as User["id"],
      });

      addProject(newProject);
      closeModal();
    } catch (e) {
      setError("An unexpected error occurred, please try again");
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
      >
        {({ setFieldValue }) => (
          <Form className="p-4 md:p-5" name={formName} id={formName}>
            {error && <div className="text-red-500">{error}</div>}
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="title" className="text-base font-medium">
                  {PROJECT_FIELDS_TEXT.TITLE}
                </label>
                <Field
                  as={Input}
                  name="title"
                  placeholder={PROJECT_FIELDS_TEXT.TITLE_HOLDER}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setFieldValue("title", e.currentTarget.value)
                  }
                />
              </div>
              <ErrorMessage
                name="title"
                component="div"
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
                  name="description"
                  placeholder={PROJECT_FIELDS_TEXT.DESCRIPTION_HOLDER}
                  rows={6}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setFieldValue("description", e.currentTarget.value)
                  }
                />
              </div>
              <ErrorMessage
                name="description"
                component="div"
                className="text-red-500 text-right"
              />
            </div>
          </Form>
        )}
      </Formik>
      {loading && (
        <LoaderModal loader={SpinnerLoader} text="Creating your project" />
      )}
    </>
  );
};

export default CreateProject;
