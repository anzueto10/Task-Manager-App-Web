import {
  APP_TITLE,
  FORM_SIGNUP_EXTERNAL_LINKS,
  SIGN_UP_FORM_FIELDS,
} from "@/consts";

const SignupPage: React.FC = () => {
  return (
    <section className="w-full h-full flex flex-row items-center justify-center">
      <article className="flex flex-col items-center justify-center px-6 py-8 h-fit mx-auto w-full md:w-3/4 lg:w-2/4">
        <div className="w-full h-full bg-white rounded-lg shadow dark:border p-6 dark:bg-gray-800 dark:border-gray-700">
          <h1 className="text-xl font-bold mb-5 leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
            Create an account
          </h1>
          <p className="text-sm text-black dark:text-white font-light mb-7">
            Start manage your Projects in seconds. Already have an account?{" "}
            <a
              href=""
              className="font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Login here
            </a>
          </p>
          <form className="" action="#">
            {Object.entries(SIGN_UP_FORM_FIELDS).map(([key, field]) => (
              <div className="mb-5">
                <label
                  htmlFor={field.value}
                  className="block mb-2 text-base font-medium text-gray-900 dark:text-white"
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
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder={field.placeholder}
                  required={field.required}
                />
              </div>
            ))}
            <div className="flex items-start mb-5 w-full">
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
              className="w-full text-white mb-5 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Create an account
            </button>
            <p className="text-sm text-black dark:text-white font-light w-full text-center">
              Already have an account?{" "}
              <a
                href="#"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Login here
              </a>
            </p>
          </form>
          <div className="inline-flex relative items-center justify-center w-full my-5">
            <hr className="w-full h-px my-3" />
            <span className="absolute px-5 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-800">
              Or
            </span>
          </div>

          <div className="flex flex-col w-full h-fit">
            {Object.entries(FORM_SIGNUP_EXTERNAL_LINKS).map(([key, link]) => (
              <a
                href={link.href}
                className="p-3 flex flex-row justify-center items-center font-medium text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 me-2 mb-5 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
              >
                <link.Icon h="auto" w="25" />
                <span className="ml-3">{link.text}</span>
              </a>
            ))}
          </div>
        </div>
      </article>
      <article className="w-2/4 hidden lg:flex">
        <div className="p-20">
          <img
            src="https://res.cloudinary.com/dmdjzoset/image/upload/v1718737744/tasker/svg/hjbl0dznlvdaagq6ad46.svg"
            alt=""
            className="dark:hidden"
          />

          <img
            src="
          https://res.cloudinary.com/dmdjzoset/image/upload/v1718748698/tasker/svg/pmcp73kozwplgqmsyomb.svg"
            alt=""
            className="hidden dark:block"
          />
        </div>
      </article>
    </section>
  );
};

export default SignupPage;
