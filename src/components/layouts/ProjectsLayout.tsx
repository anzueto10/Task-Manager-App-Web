import ProjectsSideBar from "@/components/sidebars/ProjectsSideBar";

interface Props {
  isShow: boolean;
  handleOcult: () => void;
}

const ProjectsLayout: React.FC<Props> = ({ isShow, handleOcult }) => {
  return (
    <>
      <ProjectsSideBar isShow={isShow} ocult={handleOcult} />
    </>
  );
};

export default ProjectsLayout;
