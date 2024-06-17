import ProjectsSideBar from "@/components/sidebars/ProjectsSideBar";
import useProjectsStore from "@/store/projects";

interface Props {
  isShow: boolean;
  handleOcult: () => void;
}

const ProjectsLayout: React.FC<Props> = ({ isShow, handleOcult }) => {
  const projects = useProjectsStore((state) => state.projects);
  return (
    <>
      <ProjectsSideBar
        isShow={isShow}
        ocult={handleOcult}
        projects={projects}
      />
    </>
  );
};

export default ProjectsLayout;
