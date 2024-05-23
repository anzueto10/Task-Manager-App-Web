import { useState } from "react";

const useTasksDropdown = () => {
  const [drop, setDrop] = useState(false);

  const showTasks = () => setDrop(true);

  const ocultTasks = () => setDrop(false);

  return { drop, showTasks, ocultTasks };
};

export default useTasksDropdown;
