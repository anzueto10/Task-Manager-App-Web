import { Task } from "@/types";
import TagContainer from "./tags/TagContainer";

interface Props {
  task: Task;
}

const TaskCard: React.FC<Props> = ({ task }) => {
  const { description, image, tags, title } = task;
  return (
    <li className="flex flex-col px-3 py-5 bg-taskCard text-white rounded-lg bg-gray-900">
      <header className="mb-4 ">
        <h3 className="text-center mb-5 text-xl">{title}</h3>

        {image && (
          //eslint-disable-next-line @next/next/no-img-element
          <img
            src={image}
            alt={`Image from task ${title}`}
            className="w-full h-auto rounded-md"
          />
        )}
      </header>

      {description && <p className="text-lg mb-5">{description} </p>}

      {tags && (
        <footer className="flex flex-row justify-start gap-4">
          <TagContainer tags={tags} />
        </footer>
      )}
    </li>
  );
};

export default TaskCard;
