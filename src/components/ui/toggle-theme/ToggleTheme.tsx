"use client";
import useToggleTheme from "@/hooks/useToggleTheme";
import SoonIcon from "@/components/ui/icons/SoonIcon";
import MoonIcon from "@/components/ui/icons/MoonIcon";

interface Props {
  onlyIcons?: boolean;
}

const ToggleTheme: React.FC<Props> = ({ onlyIcons }) => {
  const { toggleTheme, darkMode } = useToggleTheme();

  return (
    <button
      onClick={toggleTheme}
      className="text-primary-light dark:text-primary-dark w-full h-full inline-flex items-center justify-center"
    >
      {darkMode ? (
        <>
          <SoonIcon />
          {!onlyIcons && <span className="ml-1">Light Mode</span>}
        </>
      ) : (
        <>
          <MoonIcon />
          {!onlyIcons && <span className="ml-1">Dark Mode</span>}
        </>
      )}
    </button>
  );
};

export default ToggleTheme;
