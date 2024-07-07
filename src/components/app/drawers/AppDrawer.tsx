"use client";
import { ADD_BUTTONS_TEXT } from "@/consts";
import { Suspense, useEffect, useState } from "react";
import ProjectsContainer from "@/components/projects/containers/ProjectsContainer";
import { Project } from "@/types";
import { useSetRecoilState } from "recoil";
import { projectsState } from "@/store/atoms";
import CreateForm from "../../projects/forms/CreateForm";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
  TransitionChild,
} from "@headlessui/react";
import MenuIcon from "../../ui/icons/MenuIcon";
import Button from "../../ui/Button";
import Squares from "../../ui/icons/Squares";
import FormModal from "@/components/ui/FormModal";

interface Props {
  initialProjects: Array<Project>;
}

const AppDrawer: React.FC<Props> = ({ initialProjects }) => {
  const [open, setOpen] = useState(false);
  const setProjects = useSetRecoilState(projectsState);

  useEffect(() => {
    setProjects(initialProjects);
  }, [initialProjects, setProjects]);
  return (
    <>
      <Button onClick={() => setOpen(true)} variable="outline">
        <span className="sr-only">Toggle Drawer</span>
        <MenuIcon />
      </Button>
      <Dialog className="relative z-10" open={open} onClose={setOpen}>
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-background-light dark:bg-background-dark bg-opacity-75 dark:bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
        />

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 left-0 flex max-w-full">
              <DialogPanel
                transition
                className="pointer-events-auto relative w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:-translate-x-full sm:duration-700"
              >
                <TransitionChild>
                  <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 duration-500 ease-in-out data-[closed]:opacity-0 sm:-ml-10 sm:pr-4"></div>
                </TransitionChild>
                <aside className="flex h-full flex-col overflow-y-auto bg-background-light border-r dark:bg-background-dark py-6 shadow-xl">
                  <DialogTitle
                    as="header"
                    className="text-base inline-flex font-semibold items-center leading-6 text-gray-900 px-4 sm:px-6"
                  >
                    <Squares />
                    <h5
                      id="drawer-navigation-label"
                      className="text-base font-semibold uppercase ml-2"
                    >
                      Projects
                    </h5>
                    <Button
                      onClick={() => setOpen(false)}
                      position="right"
                      variable="close"
                    />
                  </DialogTitle>
                  <hr className="my-5 h-0.5 border-t-0 bg-secondary-light dark:bg-secondary-dark" />
                  <main className="relative flex-1 px-4 sm:px-6 overflow-y-auto">
                    <Suspense>
                      <ProjectsContainer />
                    </Suspense>
                    <FormModal
                      modalFormName="ModalCreateProjectForm"
                      buttonText={ADD_BUTTONS_TEXT.PROJECT}
                      Form={CreateForm}
                      modalDescription="Fill out the form to create a new project."
                      modalTitle={ADD_BUTTONS_TEXT.PROJECT}
                      buttonActionText="Create Project"
                      buttonCancelText="Cancel"
                      openButtonVariable="outline"
                    />
                  </main>
                  <footer></footer>
                </aside>
              </DialogPanel>
            </div>
          </div>
        </div>
      </Dialog>
    </>
  );
};

export default AppDrawer;
