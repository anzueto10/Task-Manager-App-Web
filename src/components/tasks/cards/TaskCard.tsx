import { Task, TaskTag, User } from "@/types";
import Image from "next/image";
import { formatDateDistance } from "@/utils/dateUtils";
import Button from "@/components/ui/button/Button";
import FormModal from "@/components/ui/modal/FormModal";
import EditTask from "../forms/EditTask";
import { deleteTask } from "@/api/tasks/crud";
import { useSession } from "next-auth/react";
import { useRemoveTask } from "@/store/actions";

interface Props {
  task: Task;
}

const TaskCard: React.FC<Props> = ({ task }) => {
  const { data: session } = useSession();

  const { description, image, tags, createdAt, title, status, id } = task;

  const formattedDate = formatDateDistance(createdAt);
  const deleteStateTask = useRemoveTask();

  const handdleDeleteTask = async () => {
    try {
      await deleteTask({
        userId: session?.user.id as User["id"],
        taskId: id,
      });
      deleteStateTask(id);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <li className="mt-2 ring-offset-background-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 py-4 dark:ring-offset-background-dark rounded-lg border border-border-light bg-card-light text-foreground-light shadow-sm p-4 dark:text-primary-dark dark:bg-card-dark dark:border-border-dark">
      <section className="flex items-center justify-between">
        <header>
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-mutedForeground-light dark:text-mutedForeground-dark">
            {description}
          </p>
        </header>
        <main className="flex items-center gap-2">
          <span className="text-mutedForeground-light dark:text-mutedForeground-dark">
            Date: {formattedDate}
          </span>
          <Button variable="outline">{status}</Button>
          <FormModal
            Form={EditTask}
            buttonActionText="Save Task"
            buttonCancelText="Cancel"
            modalFormName="ModalTaskEdit"
            typeOfForm="task"
            buttonText="Edit"
            openButtonVariable="outline"
            modalTitle="Edit task"
            modalDescription="Change the actual values to edit this task."
            formProps={{
              taskId: id,
              taskTitle: title,
              taskDescription: description,
              taskImage: image,
              taskStatus: status,
              taskTags: tags as unknown as Array<TaskTag>,
            }}
            deleteIcon
            deleteAction={handdleDeleteTask}
          />
        </main>
      </section>
      {image && (
        <section className="mt-4">
          <Image
            priority={false}
            src={image}
            alt={title}
            width="300"
            height="200"
            className="rounded-md"
            style={{ aspectRatio: "300 / 200", objectFit: "cover" }}
          />
        </section>
      )}
    </li>
  );
};

export default TaskCard;
