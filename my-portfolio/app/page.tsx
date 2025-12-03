import NavBar from "./_components/navigation/NavBar";

export default function HomePage() {
  return (
    <div className="w-screen h-screen snap-y snap-mandatory overflow-y-scroll scroll-smooth relative">
      {/* NavBar altijd rechtsboven */}
      <div className="absolute top-6 right-6 z-50">
        <NavBar />
      </div>

      <section className="w-screen h-screen snap-start flex items-center justify-center bg-blue-500">
        <h1 className="text-white text-5xl font-bold">Homepage</h1>
      </section>
    </div>
  );
}
