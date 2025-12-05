import Image from "next/image";
import NavBar from "../_components/navigation/NavBar";
import { FaEnvelope, FaLinkedin } from "react-icons/fa";

// Data voor About-sectie en Contact
const aboutBlock = {
  title: "Over mij",
  description:
    "Hoi, ik ben Marten Fleuren, derdejaars student Open ICT aan de Hogeschool Utrecht met een passie voor UX/UI-design. Ik ontwerp gebruiksvriendelijke en toegankelijke digitale producten, van interactieve prototypes tot usability-tests. Tijdens mijn studie en projecten heb ik ervaring opgedaan met Figma en het ontwerpen voor verschillende doelgroepen. Ik combineer design, techniek en analyse om producten te maken die zowel functioneel als aantrekkelijk zijn.",
  role: "3e Jaars student HU Open-ICT",
  image: "/images/about1.jpg",
  background: "#16A34A",
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

        <div
          className="
            flex flex-col md:flex-row
            items-center justify-center
            w-full h-full max-w-7xl
            gap-0 md:gap-4
            px-3 md:px-20
          "
        >
          {/* Afbeelding links */}
          <div
            className="
              relative 
              w-[150px] h-[150px] sm:w-[250px] sm:h-[250px] md:w-[400px] md:h-[400px]
              rounded-full
              overflow-hidden
              flex justify-center items-center
              p-2 md:p-4
            "
          >
            <Image
              src={aboutBlock.image}
              alt={aboutBlock.title}
              fill
              className="object-cover"
            />
          </div>

          {/* Tekstblok rechts */}
          <div className="flex flex-col justify-center w-full md:w-[600px] lg:w-[700px] text-white p-4 md:p-8">
            <h2 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold mb-2 md:mb-4">
              {aboutBlock.title}
            </h2>

            <p className="text-xs sm:text-sm md:text-lg lg:text-xl mb-2 md:mb-4 leading-relaxed">
              {aboutBlock.description}
            </p>

            <p className="text-xs sm:text-sm md:text-md lg:text-lg font-semibold">
              {aboutBlock.role}
            </p>
          </div>
        </div>
      </section>

      {/* Contact sectie */}
      <section className="w-screen h-screen snap-start flex flex-col items-center justify-center px-6 md:px-20 bg-green-500">
        <h2 className="text-5xl font-bold text-white mb-6">Contact</h2>

        <div className="flex flex-col md:flex-row items-center gap-6">
          {/* Mail Button */}
          <a
            href="/mailto"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-90 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-opacity-100 transition-transform duration-300"
          >
            <FaEnvelope />
            Mail mij
          </a>

          {/* LinkedIn Button */}
          <a
            href="https://www.linkedin.com/in/marten-fleuren-72767a313/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-90 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-opacity-100 transition-transform duration-300"
          >
            <FaLinkedin />
            LinkedIn
          </a>

          {/* GitHub Button */}
          <a
            href="https://github.com/Murten6/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-white bg-opacity-90 text-gray-900 font-semibold rounded-lg shadow-lg hover:scale-105 hover:bg-opacity-100 transition-transform duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 .296c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.387.6.113.82-.258.82-.577 0-.285-.01-1.04-.016-2.04-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.744.084-.729.084-.729 1.205.084 1.838 1.238 1.838 1.238 1.07 1.834 2.809 1.304 3.495.997.108-.775.418-1.304.762-1.604-2.665-.305-5.466-1.334-5.466-5.932 0-1.31.468-2.381 1.235-3.221-.123-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3-.403 11.5 11.5 0 0 1 3 .403c2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.241 2.874.118 3.176.77.84 1.233 1.911 1.233 3.221 0 4.609-2.804 5.624-5.475 5.921.43.37.823 1.096.823 2.21 0 1.595-.014 2.877-.014 3.269 0 .322.218.694.825.576C20.565 22.092 24 17.592 24 12.296c0-6.627-5.373-12-12-12" />
            </svg>
            GitHub
          </a>
        </div>
      </section>
    </div>
  );
}
