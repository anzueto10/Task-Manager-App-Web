import { StatusTextClient, Task } from "@/types";
import TasksStatusContainer from "./status/TasksStatusContainer";
import { STATUS_TEXTS, STATUS_TEXTS_CLIENT } from "@/consts";

interface Props {
  tasks: Array<Task>;
}
const TasksCotainerCard: React.FC<Props> = ({ tasks }) => {
  const backlogTasks: Array<Task> = tasks.filter(
    (task) => task.status === STATUS_TEXTS.BACK_LOG
  );

  const inProgressTasks: Array<Task> = tasks.filter(
    (task) => task.status === STATUS_TEXTS.IN_PROGRESS
  );

  const inReviewTasks: Array<Task> = tasks.filter(
    (task) => task.status === STATUS_TEXTS.IN_REVIEW
  );

  const completedTasks: Array<Task> = tasks.filter(
    (task) => task.status === STATUS_TEXTS.COMPLETED
  );

  return (
    <section className="flex flex-col xl:flex-row gap-5">
      <TasksStatusContainer
        tasks={backlogTasks}
        status={STATUS_TEXTS.BACK_LOG.text}
        color="bg-blue-700"
      />
      <TasksStatusContainer
        tasks={inProgressTasks}
        status={STATUS_TEXTS.IN_PROGRESS.text}
        color="bg-yellow-500"
      />
      <TasksStatusContainer
        tasks={inReviewTasks}
        status={STATUS_TEXTS.IN_REVIEW.text}
        color="bg-purple-800"
      />
      <TasksStatusContainer
        tasks={completedTasks}
        status={STATUS_TEXTS.COMPLETED.text}
        color="bg-green-500"
      />
    </section>
  );
};

export default TasksCotainerCard;
