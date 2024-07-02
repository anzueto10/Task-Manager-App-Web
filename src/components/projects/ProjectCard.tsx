import { Project } from "@/types";
import Button from "@/components/ui/Button";
import ProjectModal from "@/components/modals/projects/Modal";
import EditForm from "../modals/projects/EditForm";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { description, id, title } = project;
  return (
    <li className="flex items-center justify-between rounded-md text-primary-light px-3 py-2 hover:bg-muted dark:text-primary-dark  dark:hover:bg-muted-dark cursor-pointer">
      <h3>{title}</h3>

      <ProjectModal buttonText="Edit" Form={EditForm} />
    </li>
  );
};

export default ProjectCard;
