"use client";
import useToggleTheme from "@/hooks/useToggleTheme";
import SoonIcon from "./icons/SoonIcon";
import MoonIcon from "./icons/MoonIcon";

const ToggleTheme = () => {
  const { toggleTheme, darkMode } = useToggleTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-primary-light dark:text-primary-dark w-full h-full inline-flex items-center justify-center"
    >
      {darkMode ? (
        <>
          <SoonIcon />
          <span className="ml-1">Light Mode</span>
        </>
      ) : (
        <>
          <MoonIcon /> <span className="ml-1">Dark Mode</span>
        </>
      )}
    </button>
  );
};

export default ToggleTheme;
