import { type StatusTextClient, type Task } from "@/types";
import TaskCard from "@/components/tasks/TaskCard";
import DropDownStatus from "@/components/tasks/status/DropDownStatus";
import { useState } from "react";

interface Props {
  tasks: Array<Task>;
  status: StatusTextClient;
  color: string;
}

const TasksStatusContainer: React.FC<Props> = ({ tasks, status, color }) => {
  const [dropDown, setDropDown] = useState<boolean>(false);

  const handleClick = () => setDropDown(!dropDown);
  return (
    <article className="flex-1 flex flex-col">
      <h2 className="text-lg font-medium mb-10 flex flex-row items-center">
        <span className={`block ${color} w-5 h-5 rounded-full mr-5`} />
        <span>
          {status} ({tasks.length})
        </span>
        <span className="ml-auto 2xl:hidden">
          <DropDownStatus onClick={handleClick} />
        </span>
      </h2>
      <ul className={`flex flex-col gap-5 ${!dropDown && "hidden 2xl:flex"}`}>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </ul>
    </article>
  );
};

export default TasksStatusContainer;
