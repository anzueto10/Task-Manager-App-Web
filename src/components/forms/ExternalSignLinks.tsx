import { FORM_SIGNUP_EXTERNAL_LINKS } from "@/consts";
import { Providers } from "@/types";
interface Props {
  handleSignIn: (provider: Providers) => void;
}
const ExternalSignLinks: React.FC<Props> = ({ handleSignIn }) => {
  return (
    <div className="flex flex-col lg:flex-row w-full h-fit">
      {Object.entries(FORM_SIGNUP_EXTERNAL_LINKS).map(([key, link]) => (
        <button
          onClick={() => handleSignIn(link.href as Providers)}
          key={key}
          className="p-3 flex flex-grow flex-row justify-center items-center font-medium text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 rounded-lg text-sm px-5 py-2.5 me-2 mb-5 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
        >
          <link.Icon h="25" w="25" />
          <span className="ml-3">{link.text}</span>
        </button>
      ))}
    </div>
  );
};

export default ExternalSignLinks;
