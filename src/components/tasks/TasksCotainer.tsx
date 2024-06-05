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
    <section className="flex flex-col">
      <TasksStatusContainer
        tasks={backlogTasks}
        status={STATUS_TEXTS_CLIENT.BACK_LOG as StatusTextClient}
      />
      <TasksStatusContainer
        tasks={inProgressTasks}
        status={STATUS_TEXTS_CLIENT.IN_PROGRESS as StatusTextClient}
      />
      <TasksStatusContainer
        tasks={inReviewTasks}
        status={STATUS_TEXTS_CLIENT.IN_REVIEW as StatusTextClient}
      />
      <TasksStatusContainer
        tasks={completedTasks}
        status={STATUS_TEXTS_CLIENT.COMPLETED as StatusTextClient}
      />
    </section>
  );
};

export default TasksCotainerCard;
