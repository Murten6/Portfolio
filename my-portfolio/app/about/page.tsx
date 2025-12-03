import Image from "next/image";
import NavBar from "../_components/navigation/NavBar";

// Data voor About-sectie en Contact
const aboutBlock = {
  title: "Over mij",
  description:
    "Ik ben een frontend developer met passie voor design en interactie.",
  role: "Developer & Designer",
  image: "/images/about1.jpg",
  background: "#16A34A", // bg-green-600
};

export default function AboutPage() {
  return (
    <div className="w-screen h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
      {/* Over mij sectie */}
      <section
        className="w-screen h-screen snap-start flex items-center justify-center relative"
        style={{ backgroundColor: aboutBlock.background }}
      >
        <NavBar className="absolute top-6 right-6" />
        <div className="flex flex-col md:flex-row items-center justify-center w-full h-full max-w-6xl gap-10 px-6 md:px-20">
          {/* Afbeelding links */}
          <div className="relative w-full md:w-1/2 h-[50vh] md:h-[70vh] p-8">
            <Image
              src={aboutBlock.image}
              alt={aboutBlock.title}
              fill
              className="object-cover rounded-lg"
            />
          </div>

          {/* Tekstblok rechts */}
          <div className="flex flex-col justify-center w-full md:w-1/2 h-full text-white p-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              {aboutBlock.title}
            </h2>
            <p className="text-lg md:text-xl mb-4 leading-relaxed">
              {aboutBlock.description}
            </p>
            <p className="text-md md:text-lg font-semibold">
              {aboutBlock.role}
            </p>
          </div>
        </div>
      </section>

      {/* Contact sectie */}
      <section className="w-screen h-screen snap-start flex flex-col items-center justify-center px-6 md:px-20 bg-green-500">
        <h2 className="text-5xl font-bold text-white mb-6">Contact</h2>
        <p className="text-lg md:text-xl text-white mb-4">
          Je kunt me bereiken via e-mail of socials.
        </p>
        {/* Voeg hier eventueel contactformulier of buttons toe */}
      </section>
    </div>
  );
}
