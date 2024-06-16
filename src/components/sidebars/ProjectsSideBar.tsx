import { ADD_BUTTONS_TEXT, APP_TITLE } from "@/consts";
import saveProject from "@/services/projects/saveProject";
import ModalButton from "@/components/modals/ModalButton";
import ProjectsContainerCard from "@/components/projects/ProjectsContainerCard";
import projects from "@/mocks/projects.json";
import useModalsStore from "@/store/modals";

interface Props {
  isShow: boolean;
  ocult: () => void;
}

const ProjectsSideBar: React.FC<Props> = ({ isShow, ocult }) => {
  return (
    <>
      <aside
        id="drawer-navigation"
        className={`fixed 2xl:static top-0 left-0 z-40 w-64 h-screen 2xl:h-auto 2xl:w-2/12 p-4 overflow-y-auto transition-transform  bg-white dark:bg-gray-800 flex flex-col ${
          isShow ? "-translate-x-0" : "-translate-x-full 2xl:hidden"
        }`}
        tabIndex={-1}
        aria-labelledby="drawer-navigation-label"
      >
        <h5
          id="drawer-navigation-label"
          className="text-base font-semibold text-gray-500 uppercase dark:text-gray-400"
        >
          {APP_TITLE}
        </h5>

        <button
          type="button"
          data-drawer-hide="drawer-navigation"
          aria-controls="drawer-navigation"
          className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 absolute top-2.5 end-2.5 inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
          onClick={ocult}
        >
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
        </button>
        <div className="py-4 overflow-y-auto">
          <ProjectsContainerCard projects={projects} />
        </div>
        <ModalButton
          handleOpen={useModalsStore((state) => state.openProjectModal)}
          onSave={saveProject}
          text={ADD_BUTTONS_TEXT.PROJECT}
        />
      </aside>
    </>
  );
};

export default ProjectsSideBar;
