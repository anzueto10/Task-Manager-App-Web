import TasksCotainerCard from "@/components/tasks/containers/TasksCotainer";
import { getServerSession } from "next-auth";
import { getTasks } from "@/api/tasks/crud";
import { authOptions } from "@/app/api/auth/[...nextauth]/authOptions";
import FormModal from "@/components/ui/FormModal";
import CreateTask from "../forms/CreateTask";
import AddIcon from "@/components/ui/icons/AddIcon";

const TasksLayout: React.FC = async () => {
  const session = await getServerSession(authOptions);
  const tasks = await getTasks({
    projectId: "3729f857-f183-4e20-8e7d-b0cb39102608",
    userId: session?.user.id as string,
  });

  return (
    <section className="w-full rounded-lg flex-1 overflow-y-auto">
      <TasksCotainerCard tasks={tasks} />
      <article className="fixed bottom-5 right-5">
        <FormModal
          Form={CreateTask}
          openButtonVariable="outline"
          modalFormName="ModalCreateTaskForm"
          buttonActionText="Create"
          buttonCancelText="Cancel"
          modalDescription="Fill out the field to create a Task"
          modalTitle="Create Task"
          ModalIcon={AddIcon}
          openButtonRounded="full"
        />
      </article>
    </section>
  );
};

export default TasksLayout;
