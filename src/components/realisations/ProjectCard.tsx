import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  project: {
    image: string;
    title: string;
    location: string;
    category: string;
    slug: string;
  };
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link
      href={`/realisations/${project.slug}`}
      className="group block"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="mt-4">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#f58213]">
          {project.category}
        </p>

        <h2 className="mt-1 font-heading text-2xl font-bold uppercase leading-tight text-[#071522]">
          {project.title}
        </h2>

        <p className="mt-1 text-sm text-zinc-500">
          {project.location}
        </p>
      </div>
    </Link>
  );
}