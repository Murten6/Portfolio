import projects from "../data/projects.json";
import Image from "next/image";
import NavBar from "../_components/navigation/NavBar";
import Link from "next/link";

export const metadata = {
  title: "", // voorkomt kleine page title bovenaan
};

export default function ProjectsPage() {
  return (
    <div className="w-screen h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth relative">
      {/* NavBar altijd rechtsboven */}
      <div className="absolute top-6 right-6 z-50">
        <NavBar />
      </div>

      {/* Introductieblok */}
      <section className="w-screen h-screen snap-start flex items-center justify-start px-6 md:px-20 bg-purple-700">
        <div className="text-white max-w-2xl">
          <p className="text-5xl font-bold mb-4">Mijn projecten</p>
          <p className="text-xl">
            Hier vind je een selectie van projecten waarin ik mijn
            UX/UI-vaardigheden heb toegepast. Van interactieve prototypes tot
            gebruikerstests, elk project laat zien hoe ik complexe problemen
            vertaal naar toegankelijke en gebruiksvriendelijke digitale
            oplossingen.
          </p>
        </div>
      </section>

      {/* Projectsecties */}
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;

        return (
          <section
            key={index}
            className="w-screen h-screen snap-start flex items-center justify-center px-6 md:px-20"
            style={{ backgroundColor: project.background }}
          >
            <div
              className={`flex flex-col md:flex-row items-center justify-center w-full h-full max-w-6xl gap-16 ${
                isEven ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Tekstblok */}
              <div className="flex flex-col justify-center w-full md:w-1/2 h-full text-black p-8">
                <h2 className="text-4xl font-bold mb-4">{project.title}</h2>
                <p className="text-lg mb-2">{project.description}</p>
                <p className="text-md font-semibold mb-4">
                  Rol: {project.role}
                </p>

                {/* Contrasterende knop */}
                <Link
                  href={`/projects/${project.slug}`}
                  className="mt-6 inline-block bg-white bg-opacity-90 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-opacity-100 transition-transform duration-300 px-4 py-2 text-center"
                >
                  Bekijk case study
                </Link>
              </div>

              {/* Afbeelding */}
              <div className="flex justify-center items-center w-full md:w-1/2 p-8">
                <Image
                  src={project.image}
                  alt={project.title}
                  width={600} // stel maximale breedte in
                  height={400} // hoogte wordt geschaald met aspect ratio
                  className="object-contain rounded-lg"
                />
              </div>
            </div>
          </section>
        );
      })}
    </div>
  );
}
