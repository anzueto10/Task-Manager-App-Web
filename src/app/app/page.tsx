"use client";
import ProjectsLayout from "@/components/layouts/ProjectsLayout";
import TaskLayouts from "@/components/layouts/TasksLayout";
import ModalPortal from "@/components/modals/ModalPortal";
import ProjectModal from "@/components/modals/ProjectModal";
import TaskModal from "@/components/modals/TaskModal";
import NavBarSideBar from "@/components/sidebars/NavBarSideBar";
import { useState } from "react";

const TaskAppPage: React.FC = () => {
  //TODO Terminar el side bar que tentga un tamaño fijo
  const [isShow, setIsShow] = useState<boolean>(false);

  const handleOcult = () => setIsShow(false);

  const handleShow = () => {
    setIsShow(!isShow);
  };

  return (
    <>
      <ModalPortal>
        <ProjectModal />
        <TaskModal />
      </ModalPortal>
      <div className="flex flex-row 2xl:max-h-screen min-h-screen 2xl:h-full">
        <ProjectsLayout isShow={isShow} handleOcult={handleOcult} />
        <main className="flex flex-col dark:bg-darkTheme p-5 gap-10 text-white grow">
          <NavBarSideBar handleShow={handleShow} />
          <TaskLayouts />
        </main>
      </div>
    </>
  );
};

export default TaskAppPage;
