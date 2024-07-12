import { TaskTag } from "@/types";

interface Props {
  tag: TaskTag;
}

const TagCard: React.FC<Props> = ({ tag }) => {
  return (
    <li className="rounded-lg bg-tag text-blue-600 py-1 px-2 text-sm font-bold ">
      {tag.name}
    </li>
  );
};

export default TagCard;
