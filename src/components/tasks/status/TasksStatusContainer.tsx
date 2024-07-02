"use client";
import { type StatusTextClient, type Task } from "@/types";
import TaskCard from "@/components/tasks/TaskCard";
import DropDownStatus from "@/components/tasks/status/DropDownStatus";
import { useState } from "react";
import { TabPanel } from "@chakra-ui/react";

interface Props {
  tasks: Array<Task>;
  status: StatusTextClient;
}

const TasksStatusContainer: React.FC<Props> = ({ tasks, status }) => {
  const [dropDown, setDropDown] = useState<boolean>(false);

  const handleClick = () => setDropDown(!dropDown);
  return (
    <TabPanel>
      <ul className="flex-col gap-5 flex">
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </ul>
    </TabPanel>
  );
};

export default TasksStatusContainer;
