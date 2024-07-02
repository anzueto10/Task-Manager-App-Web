import TasksCotainerCard from "@/components/tasks/TasksCotainer";
import { Task } from "@/types";
import TaskModal from "@/components/modals/tasks/Modal";

const TasksLayout: React.FC = async () => {
  const tasks: Array<Task> = [];
  return (
    <section className="w-full  rounded-lg p-5 flex-1 2xl:overflow-y-auto">
      <TasksCotainerCard tasks={tasks} />
      <div className="top-10 right-16 fixed">
        <TaskModal />
      </div>
    </section>
  );
};

export default TasksLayout;
