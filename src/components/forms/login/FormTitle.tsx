import { APP_TITLE } from "@/consts";
import Link from "next/link";

const LoginFormTitle: React.FC = () => {
  return (
    <Link
      href="#"
      className="flex items-center mb-6 text-2xl w-full justify-center font-semibold text-gray-900 dark:text-white"
    >
      <img
        className="w-20 h-auto mr-2 rounded-full"
        src="https://res.cloudinary.com/dmdjzoset/image/upload/v1718737631/tasker/logoscuro.png"
        alt="logo"
      />
      {APP_TITLE}
    </Link>
  );
};

export default LoginFormTitle;
