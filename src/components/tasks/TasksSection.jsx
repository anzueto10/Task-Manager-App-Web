/* eslint-disable react/prop-types */
import Tasks from "./Tasks";
import LensIcon from "@mui/icons-material/Lens";
import { useMediaQuery } from "react-responsive";
import AddTaskButton from "./AddTaskButton";
import TasksDropdown from "./TasksDropdown";
import useTasksDropdown from "../../hooks/useTasksDropdown";

const TasksSection = ({ tasks, text, classes }) => {
  const smlg = useMediaQuery({ query: "(max-width: 1279px)" });
  const { drop, showTasks, ocultTasks } = useTasksDropdown();

  return (
    <section className="flex h-full xl:w-1/4 w-full p-4 flex-col">
      <h1 className="text-white text-xl mb-5 flex">
        <LensIcon className={`${classes} self-center mr-2`} />
        <span>
          {text} ({tasks.length})
        </span>
        {smlg && (
          <TasksDropdown
            classes="ml-auto"
            drop={drop}
            ocultTasks={ocultTasks}
            showTasks={showTasks}
          />
        )}
      </h1>

      <div className="flex flex-col gap-3 w-full xl:mb-3 transition-all ease-out">
        {smlg && drop && <Tasks tasks={tasks} />}
        {!smlg && <Tasks tasks={tasks} />}
      </div>

      {!smlg && text === "BackLog" && <AddTaskButton />}
    </section>
  );
};

export default TasksSection;
