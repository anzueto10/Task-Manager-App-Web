"use client";
import Button from "@/components/ui/button/Button";
import Input from "@/components/ui/fields/Input";
import TextArea from "@/components/ui/fields/TextArea";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useState } from "react";
import { object, string } from "yup";

interface SendContactInitialValues {
  name: string;
  email: string;
  message: string;
}
const SendContact = () => {
  const [send, setSend] = useState(false);

  const initialValues: SendContactInitialValues = {
    email: "",
    message: "",
    name: "",
  };
  const handdleSubmit = (
    values: SendContactInitialValues,
    {
      resetForm,
    }: FormikHelpers<{ email: string; name: string; message: string }>,
  ) => {
    // TODO Enviar a la api de enviar un correo
    console.log(values);
    resetForm();
    setSend(true);
    setTimeout(() => {
      setSend(false);
    }, 6000);
  };

  const validationSchema = object({
    name: string().required("Please enter a name."),
    email: string()
      .required("Please enter your email.")
      .email("Please enter a valid email."),
    message: string().required("Please enter a message."),
  });
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handdleSubmit}
      validationSchema={validationSchema}
    >
      <Form className="flex flex-col gap-4">
        <Field as={Input} placeholder="Name" name="name" />
        <ErrorMessage name="name" component="span" className="text-red-500" />
        <Field as={Input} placeholder="Email" name="email" email />
        <ErrorMessage name="email" component="span" className="text-red-500" />

        <Field
          as={TextArea}
          placeholder="Message"
          cols={1}
          rows={4}
          name="message"
        />
        <ErrorMessage
          name="message"
          component="span"
          className="text-red-500"
        />

        <Button type="submit">Submit</Button>
        {send && (
          <span className="text-green-500">
            Thank You for Contacting Us! Your message has been successfully
            submitted. We will get back to you shortly.
          </span>
        )}
      </Form>
    </Formik>
  );
};

export default SendContact;
