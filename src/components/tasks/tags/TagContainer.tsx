import { TASK_FIELDS } from "@/consts";
import { Task } from "@/types";
import TagCard from "@/components/tasks/tags/TagCard";

interface Props {
  tags: Task[typeof TASK_FIELDS.TAGS];
}

const TagContainer: React.FC<Props> = ({ tags }) => {
  return (
    <ul className="gap-3 flex flex-wrap w-full">
      {tags.map((tag, index) => (
        <TagCard tag={tag} key={index} />
      ))}
    </ul>
  );
};

export default TagContainer;
