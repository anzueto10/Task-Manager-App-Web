import { Project, User } from "@/types";
import EditProject from "@/components/projects/forms/EditProject";
import FolderIcon from "@/components/ui/icons/FolderIcon";
import FormModal from "@/components/ui/modal/FormModal";
import { useRemoveProject, useSelectProject } from "@/store/actions";
import { getActualProject } from "@/store/selectors";
import { useRecoilValue } from "recoil";
import { deleteProject } from "@/api/projects/crud";
import { useSession } from "next-auth/react";

interface Props {
  project: Project;
}

const ProjectCard: React.FC<Props> = ({ project }) => {
  const { data: session } = useSession();
  const selectProject = useSelectProject();
  const actualProject = useRecoilValue(getActualProject);
  const deleteStateProject = useRemoveProject();

  const { description, id, title } = project;

  const handleDelete = async () => {
    try {
      await deleteProject({
        userId: session?.user.id as User["id"],
        projectId: project.id,
      });
      deleteStateProject(project.id);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <li
      className={`inline-flex items-center rounded-md text-primary-light px-3 py-2 hover:bg-muted-light dark:text-primary-dark  dark:hover:bg-muted-dark cursor-pointer ${
        actualProject?.id === id && "bg-muted-light dark:bg-muted-dark"
      }`}
      onClick={() => selectProject(project.id)}
    >
      <FolderIcon />
      <h3 className="ml-3">{title}</h3>

      <FormModal
        modalFormName="ModalEditProjectForm"
        buttonText="Edit"
        Form={EditProject}
        positionButton="right"
        buttonActionText="Save Project"
        buttonCancelText="Cancel"
        modalTitle="Edit Project"
        modalDescription="Change the actual values to edit this project."
        formProps={{
          projectId: id,
          projectTitle: title,
          projectDescription: description,
        }}
        openButtonVariable="outline"
        typeOfForm="project"
        deleteAction={handleDelete}
        deleteIcon
      />
    </li>
  );
};

export default ProjectCard;
