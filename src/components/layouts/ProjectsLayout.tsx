import ProjectsSideBar from "@/components/sidebars/ProjectsSideBar";

const ProjectsLayout: React.FC = () => {
  return (
    <>
      <ProjectsSideBar />
      <aside className="w-3/12 p-5 hidden lg:flex lg:flex-col">
        <h1>Task Manager App</h1>
        <ul></ul>
      </aside>
    </>
  );
};

export default ProjectsLayout;
