import { type StatusTextClient, type Task } from "@/types";
import TaskCard from "../TaskCard";

interface Props {
  tasks: Array<Task>;
  status: StatusTextClient;
}

const TasksStatusContainer: React.FC<Props> = ({ tasks, status }) => {
  return (
    <>
      <h2>{status}</h2>
      <ul>
        {tasks.map((task) => (
          <TaskCard key={task.id} task={task} />
        ))}
      </ul>
    </>
  );
};

export default TasksStatusContainer;
