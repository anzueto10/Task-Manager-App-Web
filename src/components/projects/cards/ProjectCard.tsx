import { Project } from "@/types";
import EditForm from "../forms/EditForm";
import FolderIcon from "../../ui/icons/FolderIcon";
import FormModal from "@/components/ui/FormModal";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { description, id, title } = project;
  return (
    <li className="inline-flex items-center rounded-md text-primary-light px-3 py-2 hover:bg-muted dark:text-primary-dark  dark:hover:bg-muted-dark cursor-pointer">
      <FolderIcon />
      <h3 className="ml-3">{title}</h3>

      <FormModal
        modalFormName="ModalEditProjectForm"
        buttonText="Edit"
        Form={EditForm}
        positionButton="right"
        buttonActionText="Save Project"
        buttonCancelText="Cancel"
        modalTitle="Edit Project"
        modalDescription="Change the actual values to edit this project."
        formProps={{ projectTitle: title, projectDescription: description }}
        openButtonVariable="outline"
      />
    </li>
  );
};

export default ProjectCard;
