import { projects } from "@/data/projects";
import { ProjectCard } from "./ProjectCard";

export function ProjectsGrid() {
  return (
    <div className="grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
      {projects.map((project) => (
        <ProjectCard
          key={`${project.title}-${project.location}`}
          project={project}
        />
      ))}
    </div>
  );
}