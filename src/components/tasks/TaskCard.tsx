import { Task } from "@/types";
import Image from "next/image";

interface Props {
  task: Task;
}

const TaskCard: React.FC<Props> = ({ task }) => {
  const title = task.title;
  const description = task.description;
  const imageUrl = task.image;
  const status = task.status;
  const tags = task.tags;
  return (
    <li className="flex flex-col p-3">
      {/*eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={imageUrl}
        alt={`Image from task ${task.title}`}
        className="w-full h-auto"
      />
      <h3 className="text-center text-lg">{title}</h3>
      {description && <p>{description} </p>}
      <p>{tags} </p>
    </li>
  );
};

export default TaskCard;
