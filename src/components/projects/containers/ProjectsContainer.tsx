"use client";
import ProjectCard from "@/components/projects/cards/ProjectCard";
import { projectsState } from "@/store/atoms";
import { useRecoilValue } from "recoil";

const ProjectsContainer: React.FC = () => {
  const projects = useRecoilValue(projectsState);

  return (
    <>
      {projects.length > 0 && (
        <ul className="flex flex-col space-y-2 font-medium">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </ul>
      )}
    </>
  );
};

export default ProjectsContainer;
