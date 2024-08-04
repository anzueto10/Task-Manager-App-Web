"use client";

import { SIGN_UP_FORM_FIELDS } from "@/consts";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Providers, SignupInitialValues } from "@/types";
import registerUser from "@/api/user/registerUser";
import ResponseError from "@/errors/ResponseError";
import { signIn } from "next-auth/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { bool, object, string } from "yup";
import ExternalSignLinks from "@/components/auth/ExternalSignLinks";
import HorizontalRuleForm from "@/components/ui/dividers/HorizontalRuleOr";
import EmailAlredyInUseError from "@/errors/signup/EmailAlredyInUseError";
import UsernameAlredyInUse from "@/errors/signup/UsernameAlredyInUseError";
import InvalidFieldsUserLogin from "@/errors/login/InvalidFieldsUserLogin";
import PrismaError from "@/errors/PrismaError";
import InternalServerError from "@/errors/InternalServerError";
import LoaderModal from "@/components/ui/modal/LoaderModal";
import SpinnerLoader from "@/components/ui/loaders/SpinnerLoader";

const SignupFormBody: React.FC = () => {
  const [errorRegisterUser, setErrorRegisterUser] = useState<string | null>();
  const [loading, setLoading] = useState(false);
  const formikRef = useRef<any>(null);
  const [submitted, setSubmitted] = useState<boolean | null>();

  const router = useRouter();

  const handleSignUpSubmit = async (values: SignupInitialValues) => {
    setSubmitted(true);
    setLoading(true);
    const { email, password, username } = values;
    const data = new FormData();

    data.set("email", email);
    data.set("password", password);
    data.set("username", username);
    try {
      await registerUser(data);

      const res = await signIn("credentials", {
        emailOrUsername: email || username,
        password,
        redirect: false,
      });

      if (!res) throw new ResponseError("The server do not response", 500);
      // All is good
      if (!(!res.ok || res.error)) {
        router.push("/app/");
        return;
      }

      const error = res.error as string;
      const status = res.status as number;

      if (error === "Internal Server Error.") throw new InternalServerError();
      throw new ResponseError(error, status);
    } catch (e: unknown) {
      console.log(e);
      if (e instanceof ResponseError) {
        setErrorRegisterUser(e.message);
      } else if (
        e instanceof EmailAlredyInUseError ||
        e instanceof UsernameAlredyInUse ||
        e instanceof InvalidFieldsUserLogin
      ) {
        setErrorRegisterUser(e.message);
      } else if (e instanceof PrismaError || e instanceof InternalServerError) {
        if (!formikRef.current) return;
        if (!submitted) formikRef.current.submitForm();
      } else {
        setErrorRegisterUser("An unexpected error occurred, please try again");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleExternalSignIn = async (provider: Providers) => {
    setLoading(true);
    try {
      const response = await signIn(`${provider}`, {
        callbackUrl: "/",
        redirect: false,
      });
    } catch (e) {
      console.error(`Error al iniciar sesión con ${provider}`, e);
      router.push("/login/");
    } finally {
      setLoading(false);
    }
  };

  const initialValues: SignupInitialValues = {
    username: "",
    email: "",
    password: "",
    termsAndConditions: false,
  };

  const signupValidationSchema = object({
    email: string()
      .email("Please enter a valid email.")
      .required("Please enter your email."),
    username: string()
      .min(5, "Your password must have 5 characters or more.")
      .required("Please enter your username"),
    password: string()
      .min(8, "Your password must have 8 characters or more.")
      .required("Please enter your password."),
    termsAndConditions: bool()
      .oneOf([true], "Please accept the terms and conditions.")
      .required("Please accept the terms and conditions."),
  });
  return (
    <>
      <div className="w-full h-full flex flex-col bg-background-light dark:bg-background-dark rounded-lg shadow dark:border">
        <h1 className="text-xl font-bold mb-5 leading-tight tracking-tight ">
          Create an account
        </h1>
        <p className="text-sm  font-light mb-7">
          Start manage your Projects in seconds. Already have an account?{" "}
          <Link
            href="/login/"
            className="font-medium text-primary-600 hover:underline dark:text-primary-500"
          >
            Login here
          </Link>
        </p>
        {errorRegisterUser && (
          <span className="text-red-500 mb-3">{errorRegisterUser}</span>
        )}

        <Formik
          initialValues={initialValues}
          onSubmit={handleSignUpSubmit}
          validationSchema={signupValidationSchema}
          innerRef={formikRef}
        >
          {({ isSubmitting }) => (
            <Form>
              {Object.entries(SIGN_UP_FORM_FIELDS).map(([key, field]) => (
                <div className="mb-5" key={key}>
                  <label
                    htmlFor={field.value}
                    className="block mb-2 text-base font-medium "
                  >
                    {field.text}
                  </label>
                  <Field
                    type={
                      field.value === "email"
                        ? "email"
                        : field.value === "password"
                          ? "password"
                          : "text"
                    }
                    name={field.value}
                    id={field.value}
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder={field.placeholder}
                  />
                  <ErrorMessage
                    name={field.value}
                    className="text-red-500"
                    component="span"
                  ></ErrorMessage>
                </div>
              ))}
              <div className="flex items-start mb-5 w-full">
                <div className="flex items-center h-5">
                  <Field
                    id="termsAndConditions"
                    aria-describedby="termsAndConditions"
                    type="checkbox"
                    name="termsAndConditions"
                    className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="termsAndConditions"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <Link
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="#"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                  <ErrorMessage
                    name="termsAndConditions"
                    className="text-red-500 text-sm ml-5"
                    component="span"
                  ></ErrorMessage>
                </div>
              </div>

              <button
                type="submit"
                className="w-full mb-4 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 disabled:hover:cursor-not-allowed disabled:opacity-60 disabled:hover:bg-primary-600 dark:disabled:hover:bg-primary-600"
                disabled={isSubmitting}
              >
                Create an account
              </button>
              <p className="text-sm  font-light w-full text-center">
                Already have an account?{" "}
                <Link
                  href="/login/"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Login here
                </Link>
              </p>
            </Form>
          )}
        </Formik>
        <HorizontalRuleForm />

        <ExternalSignLinks />
      </div>

      {loading && <LoaderModal loader={SpinnerLoader} text="Sign in" />}
    </>
  );
};

export default SignupFormBody;
