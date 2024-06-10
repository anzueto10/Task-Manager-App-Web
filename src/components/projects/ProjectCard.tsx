import { Project } from "@/types";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { description, id, title } = project;
  return (
    <li className="p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group hover:cursor-pointer">
      <h3 className="">{title}</h3>
    </li>
  );
};

export default ProjectCard;
