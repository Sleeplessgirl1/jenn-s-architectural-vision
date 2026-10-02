import { Link } from "@tanstack/react-router";
import type { Project } from "@/lib/projects";

interface ProjectCardProps {
  project: Project;
  large?: boolean;
}

/** Tarjeta de proyecto: imagen hero en grande con el nombre centrado abajo. */
export function ProjectCard({ project, large = false }: ProjectCardProps) {
  return (
    <Link
      to="/proyectos/$slug"
      params={{ slug: project.slug }}
      className="group block"
      aria-label={`Ver proyecto ${project.shortName}`}
    >
      <div
        className={`image-slot w-full overflow-hidden transition-colors duration-300 ${
          large ? "aspect-[4/3] md:aspect-[16/9]" : "aspect-[4/5]"
        }`}
      >
        <span className="image-slot-label">Imagen hero · {project.shortName}</span>
      </div>
      <div className="hairline mt-0 pt-5 pb-2 text-center">
        <span className="eyebrow block mb-2">
          {project.index} — {project.type}
        </span>
        <h3
          className={`project-title text-foreground transition-colors duration-300 group-hover:text-muted-foreground ${
            large ? "text-4xl md:text-6xl" : "text-3xl md:text-4xl"
          }`}
        >
          {project.nameLines.map((line) => (
            <span key={line} className="block">
              {line}
            </span>
          ))}
        </h3>
      </div>
    </Link>
  );
}
