"use client";
import Button from "@/components/ui/button/Button";
import CheckInput from "@/components/ui/fields/CheckInput";
import Input from "@/components/ui/fields/Input";
import SpinnerLoader from "@/components/ui/loaders/SpinnerLoader";
import LoaderModal from "@/components/ui/modal/LoaderModal";
import InternalServerError from "@/errors/InternalServerError";
import PrismaError from "@/errors/PrismaError";
import ResponseError from "@/errors/ResponseError";
import { LoginInitialValues, Providers } from "@/types";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { boolean, object, string } from "yup";

const LoginUser = ({ formName }: { formName: string }) => {
  const router = useRouter();

  const formikRef = useRef<any>(null);
  const [submitted, setSubmitted] = useState<boolean | null>();

  const [errorLogin, setErrorLogin] = useState<string | null>();

  const handleLogin = async (values: LoginInitialValues) => {
    setSubmitted(true);
    const { emailOrUsername, password } = values;

    try {
      const res = await signIn("credentials", {
        emailOrUsername,
        password,
        redirect: false,
      });
      if (!res) throw new Error("Response Error");

      if (!(!res.ok || res.error)) {
        router.push("/app");
        return;
      }

      const error = res.error as string;
      const status = res.status as number;

      if (error === "Internal Server Error.") throw new InternalServerError();
      throw new ResponseError(error, status);
    } catch (e) {
      if (e instanceof ResponseError) {
        setErrorLogin(e.message);
      } else if (e instanceof PrismaError || e instanceof InternalServerError) {
        if (!formikRef.current) return;
        if (!submitted) formikRef.current.submitForm();
      } else {
        setErrorLogin("An unexpected error occurred, please try again");
      }
    }
  };

  const loginValidationSchema = object({
    emailOrUsername: string().required("Please enter your email."),
    password: string()
      .min(8, "Your password must have 8 characters or more.")
      .required("Please enter your password."),
  });

  const initialValues: LoginInitialValues = {
    emailOrUsername: "",
    password: "",
    rememberMe: false,
  };

  return (
    <Formik
      innerRef={formikRef}
      initialValues={initialValues}
      onSubmit={handleLogin}
      validationSchema={loginValidationSchema}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4 md:space-y-6" name={formName} id={formName}>
          <div className="">
            <label
              htmlFor="emailOrUsername"
              className="block mb-2 text-base font-medium"
            >
              Email or Username
            </label>
            <Field
              type="text"
              id="emailOrUsername"
              name="emailOrUsername"
              placeholder="name@company.com"
              as={Input}
            />
            <ErrorMessage
              name="emailOrUsername"
              className="text-red-500"
              component="span"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-base font-medium"
            >
              Password
            </label>
            <Field
              type="password"
              id="password"
              password
              name="password"
              placeholder="••••••••"
              as={Input}
            />
            <ErrorMessage
              name="password"
              component="span"
              className="text-red-500"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <Field id="remember" name="remember" as={CheckInput} />
              </div>
              <label
                htmlFor="remember"
                className="text-mutedForeground-light dark:text-mutedForeground-dark ml-3 mb-3"
              >
                Remember me
              </label>
            </div>
            <Link href="#" className="text-base font-medium underline">
              Forgot password?
            </Link>
          </div>
          {isSubmitting && (
            <LoaderModal loader={SpinnerLoader} text="Loading" />
          )}
        </Form>
      )}
    </Formik>
  );
};

export default LoginUser;
