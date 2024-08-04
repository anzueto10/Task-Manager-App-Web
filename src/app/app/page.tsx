import TaskLayouts from "@/components/tasks/layouts/TasksLayout";
import NavbarApp from "@/components/app/navbars/NavbarApp";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/authOptions";
import { redirect } from "next/navigation";

const TaskAppPage: React.FC = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/login/");

  return (
    <>
      <div className="flex flex-row 2xl:max-h-screen min-h-screen 2xl:h-full">
        <main className="flex flex-col bg-background-light dark:bg-background-dark p-5 gap-10 grow">
          <NavbarApp />
          <TaskLayouts />
        </main>
      </div>
    </>
  );
};

export default TaskAppPage;
