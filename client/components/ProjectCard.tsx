import Image from "next/image";
import Link from "next/link";

export interface Project {
  id: number;
  title: string;
  category: "Photo/Video";
  imageUrl: string;
  projectUrl: string;
}

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link
      href={project.projectUrl}
      className="group block relative overflow-hidden rounded-2xl"
    >
      <Image
        src={project.imageUrl}
        alt={`Project: ${project.title}`}
        width={800}
        height={600}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute top-4 left-4">
        <span className="bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
          {project.category}
        </span>
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
        <div className="flex justify-between items-end">
          <p className="text-sm font-medium">{project.title}</p>
          <div className="flex items-center gap-1 text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
            <span>View Project</span>
            <span className="text-lg">▸</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
