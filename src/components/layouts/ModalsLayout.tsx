import ModalPortal from "@/components/modals/ModalPortal";
import ProjectModal from "@/components/modals/ProjectModal";
import TaskModal from "@/components/modals/TaskModal";

const ModalsLayout = () => {
  return (
    <ModalPortal>
      <ProjectModal />
      <TaskModal />
    </ModalPortal>
  );
};

export default ModalsLayout;
