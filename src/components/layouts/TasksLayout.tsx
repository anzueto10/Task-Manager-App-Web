import { Task } from "@/types";
import TasksCotainerCard from "@/components/tasks/TasksCotainer";
import tasks from "@/mocks/tasks.json";
import AddTaskButton from "@/components/FABs/AddTaskButton";

const TasksLayout: React.FC = () => {
  return (
    <section className="w-full dark:bg-darkThemeTasksLayout rounded-lg p-5 flex-1 2xl:overflow-y-auto">
      <TasksCotainerCard tasks={tasks as Array<Task>} />
      <AddTaskButton />
    </section>
  );
};

export default TasksLayout;
