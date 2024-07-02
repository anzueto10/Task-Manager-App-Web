import { getProjects } from "@/api/projects/crud";
import TaskLayouts from "@/components/layouts/TasksLayout";
import NavbarApp from "@/components/ui/navbars/NavbarApp";

const TaskAppPage: React.FC = () => {
  return (
    <>
      <div className="flex flex-row 2xl:max-h-screen min-h-screen 2xl:h-full">
        <main className="flex flex-col dark:bg-background p-5 gap-10 text-white grow">
          <NavbarApp />
          <TaskLayouts />
        </main>
      </div>
    </>
  );
};

export default TaskAppPage;
