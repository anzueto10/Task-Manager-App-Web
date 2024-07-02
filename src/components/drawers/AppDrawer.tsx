"use client";
import { ADD_BUTTONS_TEXT, APP_TITLE } from "@/consts";
import ProjectModal from "@/components/modals/projects/Modal";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import MenuIcon from "@mui/icons-material/Menu";
import { Suspense, useEffect } from "react";
import ProjectsContainer from "@/components/projects/ProjectsContainer";
import { Project } from "@/types";
import { useSetRecoilState } from "recoil";
import { projectsState } from "@/store/atoms";
import CreateForm from "../modals/projects/CreateForm";

interface Props {
  initialProjects: Array<Project>;
}

const AppDrawer: React.FC<Props> = ({ initialProjects }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const setProjects = useSetRecoilState(projectsState);

  useEffect(() => {
    setProjects(initialProjects);
  }, [initialProjects, setProjects]);
  return (
    <>
      <button
        className="text-primary-light bg-background-light border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-ring font-medium disabled:opacity-50 disabled:pointer-events-none border-input-light hover:bg-accent-light rounded-md text-sm px-3 py-2 dark:text-primary-dark dark:bg-background-dark dark:hover:bg-accent-dark  dark:border-input-dark focus:outline-none"
        type="button"
        onClick={onOpen}
      >
        <MenuIcon />
        <span className="sr-only">Toggle Drawer</span>
      </button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent className="bg-background-light border-r  dark:bg-background-dark">
          <DrawerHeader>
            <h5
              id="drawer-navigation-label"
              className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
            >
              {APP_TITLE}
            </h5>

            <DrawerCloseButton className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white">
              <svg
                aria-hidden="true"
                className="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <span className="sr-only">Close menu</span>
            </DrawerCloseButton>
          </DrawerHeader>
          <DrawerBody>
            <div className="py-4 overflow-y-auto">
              <Suspense>
                <ProjectsContainer />
              </Suspense>
              <ProjectModal
                buttonText={ADD_BUTTONS_TEXT.PROJECT}
                Form={CreateForm}
              />
            </div>
          </DrawerBody>
          <DrawerFooter></DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default AppDrawer;
