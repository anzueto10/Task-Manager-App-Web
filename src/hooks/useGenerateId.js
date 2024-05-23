import { useRef } from "react";

const useGenerateId = () => {
  const id = useRef(0);

  const generateId = () => {
    id.current += 1;
    return id.current;
  };

  return { generateId };
};

export default useGenerateId;
