import { useContext } from "react";
import { CreaterContext } from "../context/creater";

const useCreater = () => {
  const { logoSelect, setLogoSelect, show, setShow } =
    useContext(CreaterContext);

  return { logoSelect, setLogoSelect, show, setShow };
};

export default useCreater;
