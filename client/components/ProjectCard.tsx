import { Category } from "@/data/category";
import Image from "next/image";
import Link from "next/link";

const ProjectCard = ({ project }: { project: any }) => {
  return (
    <Link
      href={`/work/${project?.name?.toLowerCase() ?? ""}`}
      className="group block relative overflow-hidden rounded-2xl  max-w-[800px] max-h-[400px]"
    >
      <Image
        src={project.imageUrl}
        alt={`Project: ${project.name}`}
        width={800}
        height={400}
        className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>
      <div className="absolute top-4 left-4">
        <span className="bg-black/50 text-white text-xs font-semibold px-3 py-1 rounded-full backdrop-blur-sm">
          {project.type}
        </span>
      </div>
      <div className="absolute bottom-0 right-0 p-3 sm:p-5 text-white w-[70%] sm:w-[80%] ">
        <div className="flex flex-col items-end justify-end gap-1 text-sm font-semibold">
          <div className="text-xl sm:text-2xl">{project.name}</div>
          <div className="text-base sm:text-lg text-justify opacity-75 ">
            {project.description}
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 0 p-5 text-white">
        <div className="flex justify-between items-end">
          {/* <p className="text-sm font-medium">{project.title}</p> */}
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
