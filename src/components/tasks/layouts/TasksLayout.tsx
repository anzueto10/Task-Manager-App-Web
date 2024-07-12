import TasksCotainerCard from "@/components/tasks/containers/TasksCotainer";
import { getServerSession } from "next-auth";
import { getTasks } from "@/api/tasks/crud";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";

const TasksLayout: React.FC = async () => {
  const session = await getServerSession(authOptions);
  const tasks =
    (await getTasks({
      userId: session?.user.id as string,
    })) ?? [];

  return (
    <section className="w-full rounded-lg flex-1 overflow-y-auto">
      <TasksCotainerCard initialTasks={tasks} />
    </section>
  );
};

export default TasksLayout;
