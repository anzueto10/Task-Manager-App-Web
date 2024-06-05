"use client";
import ProjectsLayout from "@/components/layouts/ProjectsLayout";
import TaskLayouts from "@/components/layouts/TasksLayout";

const TaskAppPage: React.FC = () => {
  return (
    <div className="min-h-dvh min-w-screen flex flex-col xl:flex-row dark:bg-darkTheme p-5 gap-10 text-white">
      <ProjectsLayout />
      <TaskLayouts />
    </div>
  );
};

export default TaskAppPage;
