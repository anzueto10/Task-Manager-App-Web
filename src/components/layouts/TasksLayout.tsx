import { Task } from "@/types";
import AddTaskButton from "../AddTaskButton";
import TasksCotainerCard from "@/components/tasks/TasksCotainer";
import tasks from "@/mocks/tasks.json";

const TasksLayout: React.FC = () => {
  return (
    <main className="grow dark:bg-darkThemeTasksLayout rounded-lg p-5 flex flex-col">
      <TasksCotainerCard tasks={tasks as Array<Task>} />
      <footer className="w-full lg:hidden self-end mt-auto">
        <AddTaskButton />
      </footer>
    </main>
  );
};

export default TasksLayout;
