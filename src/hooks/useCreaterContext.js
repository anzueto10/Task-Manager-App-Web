import { useState } from "react";

const useCreaterContext = () => {
  const [logoSelect, setLogoSelect] = useState(null);
  const [show, setShow] = useState("");

  return { logoSelect, setLogoSelect, show, setShow };
};

export default useCreaterContext;
