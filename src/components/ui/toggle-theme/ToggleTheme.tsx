"use client";
import useToggleTheme from "@/hooks/useToggleTheme";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";

interface Props {
  onlyIcons?: boolean;
}

const ToggleTheme: React.FC<Props> = ({ onlyIcons }) => {
  const { toggleTheme, darkMode } = useToggleTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-primary-light dark:text-primary-dark inline-flex items-center justify-center"
    >
      {darkMode ? (
        <>
          <SunIcon className="size-6" />
          {!onlyIcons && <span className="ml-1">Light Mode</span>}
        </>
      ) : (
        <>
          <MoonIcon className="size-6" />
          {!onlyIcons && <span className="ml-1">Dark Mode</span>}
        </>
      )}
    </button>
  );
};

export default ToggleTheme;
