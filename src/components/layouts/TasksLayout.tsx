"use client";
import TasksCotainerCard from "@/components/tasks/TasksCotainer";
import AddTaskButton from "@/components/ui/FABs/AddTaskButton";
import { Task } from "@/types";

const TasksLayout: React.FC = () => {
  const tasks: Array<Task> = [];
  const projects = [];
  return (
    <section className="w-full dark:bg-darkThemeTasksLayout rounded-lg p-5 flex-1 2xl:overflow-y-auto">
      {projects.length > 1 ? (
        <>
          <TasksCotainerCard tasks={tasks} />
          <AddTaskButton />
        </>
      ) : (
        <h1>For to start create some project</h1>
      )}
    </section>
  );
};

export default TasksLayout;
