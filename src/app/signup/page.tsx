import {
  APP_TITLE,
  FORM_SIGNUP_EXTERNAL_LINKS,
  SIGN_UP_FORM_FIELDS,
} from "@/consts";

const SignupPage: React.FC = () => {
  return (
    <section className="w-full h-full flex flex-row">
      <article className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen w-2/4">
        <div className="w-full h-full bg-white rounded-lg shadow dark:border p-6 space-y-4 md:space-y-6 dark:bg-gray-800 dark:border-gray-700">
          <a
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img
              className="w-16 h-auto mr-2 rounded-full"
              src="https://res.cloudinary.com/dmdjzoset/image/upload/v1718737631/tasker/logoscuro.png"
              alt="logo"
            />
            {APP_TITLE}
          </a>
          <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <p className="text-sm text-black dark:text-white font-extralight">
            Start manage your Projects in seconds. Already have an account?{" "}
            <a
              href=""
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Login here
            </a>
          </p>
          <form className="space-y-4 md:space-y-6" action="#">
            {Object.entries(SIGN_UP_FORM_FIELDS).map(([key, field]) => (
              <div>
                <label
                  htmlFor={field.value}
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  {field.text}
                </label>
                <input
                  type={
                    field.value === "email"
                      ? "email"
                      : field.value === "password"
                      ? "password"
                      : "text"
                  }
                  name={field.value}
                  id={field.value}
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={field.placeholder}
                  required={field.required}
                />
              </div>
            ))}
            <div className="flex items-start">
              <div className="flex items-center h-5">
                <input
                  id="terms"
                  aria-describedby="terms"
                  type="checkbox"
                  className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
                  required
                />
              </div>
              <div className="ml-3 text-sm">
                <label
                  htmlFor="terms"
                  className="font-light text-gray-500 dark:text-gray-300"
                >
                  I accept the{" "}
                  <a
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                    href="#"
                  >
                    Terms and Conditions
                  </a>
                </label>
              </div>
            </div>
            <button
              type="submit"
              className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create an account
            </button>
            <p className="text-sm font-light text-black dark:text-white font-extralight w-full text-center">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login here
              </a>
            </p>
          </form>
          <div className="inline-flex relative items-center justify-center w-full">
            <hr className="w-full h-px my-3" />
            <span className="absolute px-5 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-800">
              Or
            </span>
          </div>

          <div className="flex flex-col w-full gap-5">
            {Object.entries(FORM_SIGNUP_EXTERNAL_LINKS).map(([key, link]) => (
              <a
                href={link.href}
                className="p-3 text-black flex flex-row justify-center items-center rounded-lg font-bold bg-white"
              >
                <link.Icon h="auto" w="25" />
                <span className="ml-3">{link.text}</span>
              </a>
            ))}
          </div>
        </div>
      </article>
      <article className="w-2/4">
        <img
          src="https://res.cloudinary.com/dmdjzoset/image/upload/v1718737744/tasker/svg/hjbl0dznlvdaagq6ad46.svg"
          alt=""
        />
      </article>
    </section>
  );
};

export default SignupPage;
