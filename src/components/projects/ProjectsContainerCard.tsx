import { Project } from "@/types";
import ProjectCard from "@/components/projects/ProjectCard";

interface Props {
  projects: Array<Project>;
}
const ProjectsContainerCard: React.FC<Props> = ({ projects }) => {
  return (
    <ul className="flex flex-col space-y-2 font-medium">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </ul>
  );
};

export default ProjectsContainerCard;
