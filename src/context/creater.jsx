/* eslint-disable react/prop-types */
import { createContext } from "react";
import useCreaterContext from "../hooks/useCreaterContext";

const CreaterContext = createContext();

const CreaterProvider = ({ children }) => {
  const { logoSelect, setLogoSelect, show, setShow } = useCreaterContext();

  return (
    <CreaterContext.Provider
      value={{
        logoSelect,
        setLogoSelect,
        show,
        setShow,
      }}
    >
      {children}
    </CreaterContext.Provider>
  );
};

export { CreaterContext, CreaterProvider };
