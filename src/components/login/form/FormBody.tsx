"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import ResponseError from "@/errors/ResponseError";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { object, string } from "yup";
import { useRef, useState } from "react";
import PrismaError from "@/errors/PrismaError";
import { LoginInitialValues, Providers } from "@/types";
import InternalServerError from "@/errors/InternalServerError";
import ExternalSignLinks from "@/components/auth/ExternalSignLinks";
import HorizontalRuleForm from "@/components/ui/HorizontalRuleOr";

const LoginFormBody = () => {
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
        router.push("/app/");
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
  };

  const handleExternalSignIn = async (provider: Providers) => {
    try {
      const response = await signIn(`${provider}`, {
        callbackUrl: "/",
        redirect: false,
      });
    } catch (e) {
      console.error(`Error al iniciar sesión con ${provider}`, e);
      router.push("/login/");
    } finally {
    }
  };

  return (
    <div className="w-full rounded-lg shadow h-full md:mt-0 xl:p-0 bg-transparent">
      <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
        <h1 className="text-xl font-bold mb-4 leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
          Log in to your account
        </h1>
        <ExternalSignLinks handleSignIn={handleExternalSignIn} />

        <HorizontalRuleForm bgColor="bg-white" bgColorDark="bg-gray-900" />

        {errorLogin && <span className="text-red-500 mt-3">{errorLogin}</span>}
        <Formik
          innerRef={formikRef}
          initialValues={initialValues}
          onSubmit={handleLogin}
          validationSchema={loginValidationSchema}
        >
          {({ isSubmitting }) => (
            <Form className="space-y-4 md:space-y-6">
              <div className="">
                <label
                  htmlFor="emailOrUsername"
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  Email or Username
                </label>
                <Field
                  type="text"
                  id="emailOrUsername"
                  name="emailOrUsername"
                  placeholder="name@company.com"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <Field
                  type="password"
                  id="password"
                  name="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                    <Field
                      id="remember"
                      name="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                    />
                  </div>
                  <label
                    htmlFor="remember"
                    className="text-gray-500 dark:text-gray-300 ml-3 mb-3"
                  >
                    Remember me
                  </label>
                </div>
                <Link
                  href="#"
                  className="text-base font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:hover:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-primary-600 dark:disabled:hover:bg-primary-600"
                disabled={isSubmitting}
              >
                Log In
              </button>
              <p className="text-base font-light text-gray-500 dark:text-gray-400">
                Don’t have an account yet?{" "}
                <Link
                  href="/signup/"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Sign up
                </Link>
              </p>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default LoginFormBody;
