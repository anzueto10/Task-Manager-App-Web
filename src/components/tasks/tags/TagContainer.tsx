import TagCard from "@/components/tasks/tags/TagCard";
import { TaskTag } from "@/types";

interface Props {
  tags: Array<TaskTag>;
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
