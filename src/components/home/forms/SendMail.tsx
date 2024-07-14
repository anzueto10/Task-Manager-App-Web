"use client";
import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/fields/Input";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import { object, string } from "yup";

const SendMail = () => {
  const [send, setSend] = useState(false);
  const initialValues = {
    email: "",
  };

  const validationSchema = object({
    email: string()
      .required("Please enter your email.")
      .email("Please enter a valid email."),
  });

  const handdleSubmit = (
    values: { email: string },
    { resetForm }: FormikHelpers<{ email: string }>
  ) => {
    //TODO Enviar a la api de enviar un correo
    console.log(values);
    resetForm();
    setSend(true);
    setTimeout(() => {
      setSend(false);
    }, 6000);
  };
  return (
    <Formik
      onSubmit={handdleSubmit}
      initialValues={initialValues}
      validationSchema={validationSchema}
    >
      <Form className="flex flex-col">
        <div className="flex flex-row gap-2">
          <Field as={Input} name="email" email placeholder="Enter your email" />

          <Button type="submit">Try Tasker</Button>
        </div>
        <ErrorMessage name="email" className="text-red-500" component="span" />
        {send && (
          <span className="text-green-500">
            A email has been sent to your mail, check it and join to tasker.
          </span>
        )}
      </Form>
    </Formik>
  );
};

export default SendMail;
