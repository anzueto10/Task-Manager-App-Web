"use client";
import getLocalTheme from "@/utils/getLocalStorageTheme";
import { useEffect, useState } from "react";

const useToggleTheme = () => {
  const [darkMode, setDark] = useState<boolean>(false);

  useEffect(() => {
    const theme = getLocalTheme();
    if (theme === "dark") setDark(true);
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("__Tasker_app_color_Theme__", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("__Tasker_app_color_Theme__", "light");
    }
  }, [darkMode]);

  const toggleTheme = () => {
    setDark(!darkMode);
  };

  return {
    toggleTheme,
    darkMode,
  };
};

export default useToggleTheme;
