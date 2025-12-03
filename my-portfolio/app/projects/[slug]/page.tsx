import { notFound } from "next/navigation";
import projects from "../../data/projects.json"; // pas eventueel het pad aan
import Image from "next/image";
import Link from "next/link";

interface Props {
  params: {
    slug: string;
  };
}

export default function ProjectSlugPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center p-10"
      style={{ backgroundColor: project.background }}
    >
      <h1 className="text-5xl font-bold mb-6">{project.title}</h1>
      <p className="text-xl mb-4">{project.description}</p>
      <p className="text-lg font-semibold mb-6">Rol: {project.role}</p>
      <div className="relative w-full max-w-md h-80 mb-6">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <Link
        href="/projects"
        className="px-6 py-3 bg-white text-gray-900 font-semibold rounded-full shadow-md hover:scale-105 hover:shadow-xl transition-transform duration-300"
      >
        Terug naar projecten
      </Link>
    </div>
  );
}
