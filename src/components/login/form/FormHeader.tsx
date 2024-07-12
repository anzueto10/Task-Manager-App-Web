import { APP_TITLE, LOGIN_FORM_DESCRIPTION, LOGIN_FORM_TITLE } from "@/consts";
import Image from "next/image";
import Link from "next/link";

const LoginFormHeader: React.FC = () => {
  return (
    <header className="flex flex-col w-full">
      <Link
        href="#"
        className="flex items-center mb-6 text-2xl w-full justify-start font-semibold text-gray-900 dark:text-white"
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
      <h1 className="text-6xl text-white font-bold mb-5">{LOGIN_FORM_TITLE}</h1>
      <p className="text-base text-white font-light">
        {LOGIN_FORM_DESCRIPTION}
      </p>
    </header>
  );
};

export default LoginFormHeader;
