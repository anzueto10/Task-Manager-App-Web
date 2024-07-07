import { type StatusTextClient, type Task } from "@/types";
import TaskCard from "@/components/tasks/cards/TaskCard";
import { TabPanel } from "@headlessui/react";

interface Props {
  tasks: Array<Task>;
}

const TasksStatusContainer: React.FC<Props> = ({ tasks }) => {
  return (
    <TabPanel>
      {tasks.length > 0 ? (
        <ul className="flex-col gap-5 flex">
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
        </ul>
      ) : (
        <h1>No hay tareas bro</h1>
      )}
    </TabPanel>
  );
};

export default TasksStatusContainer;
