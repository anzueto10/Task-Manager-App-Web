import TaskLayouts from "@/components/layouts/TasksLayout";
import ModalsLayout from "@/components/layouts/ModalsLayout";
import NavbarApp from "@/components/ui/navbars/NavbarApp";
import AsideProjects from "@/components/projects/Aside";

const TaskAppPage: React.FC = () => {
  return (
    <>
      <ModalsLayout />
      <div className="flex flex-row 2xl:max-h-screen min-h-screen 2xl:h-full">
        <AsideProjects />
        <main className="flex flex-col dark:bg-darkTheme p-5 gap-10 text-white grow">
          <NavbarApp />
          <TaskLayouts />
        </main>
      </div>
    </>
  );
};

export default TaskAppPage;
