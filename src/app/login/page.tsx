import ExternalSignLinks from "@/components/auth/ExternalSignLinks";
import LoginUser from "@/components/login/forms/LoginUser";
import Button from "@/components/ui/button/Button";
import HorizontalRuleForm from "@/components/ui/dividers/HorizontalRuleOr";
import { APP_TITLE, LOGIN_FORM_DESCRIPTION, LOGIN_FORM_TITLE } from "@/consts";
import Image from "next/image";
import Link from "next/link";

const LoginPage: React.FC = () => {
  return (
    <main className="w-full h-full flex flex-grow flex-row p-6 md:p-16 xl:p-32">
      <section className="flex flex-col lg:w-1/2 w-full items-center justify-center px-6 py-8 mx-auto rounded-lg shadow border">
        <div className="w-full h-full md:mt-0 xl:p-0 bg-transparent">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold mb-4 leading-tight tracking-tight md:text-2xl">
              Log in to your account
            </h1>
            <ExternalSignLinks />
            <HorizontalRuleForm />
            <LoginUser formName="FormLoginUser" />
            <Button type="submit" forForm="FormLoginUser" full>
              Log In
            </Button>
            <p className="text-base text-mutedForeground-light dark:text-mutedForeground-dark">
              Don’t have an account yet?{" "}
              <Link
                href="/signup/"
                className="font-medium text-primary-light underline dark:text-primary-dark"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      </section>
      <section className="w-1/2 hidden lg:flex p-12 lg:flex-col lg:justify-center mx-auto">
        <header className="flex flex-col w-full">
          <Link
            href="#"
            className="flex items-center mb-6 text-2xl w-full justify-start font-semibold"
          >
            <Image
              width={80}
              height={80}
              className="w-20 h-auto mr-2 rounded-full"
              src="https://res.cloudinary.com/dmdjzoset/image/upload/v1718737631/tasker/logoscuro.png"
              alt="logo"
            />
            {APP_TITLE}
          </Link>
          <h1 className="text-6xl font-bold mb-5">{LOGIN_FORM_TITLE}</h1>
          <p className="text-base text-mutedForeground-light dark:text-mutedForeground-dark">
            {LOGIN_FORM_DESCRIPTION}
          </p>
        </header>
      </section>
    </main>
  );
};

export default LoginPage;
