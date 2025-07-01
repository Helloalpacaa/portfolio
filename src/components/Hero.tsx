import Photo from "./Photo";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center text-center px-4 bg-black text-white">
      {/* Intro Text */}
      <p className="text-gray-400 text-sm tracking-widest">
        Software Developer
      </p>
      <h1 className="text-5xl md:text-6xl font-bold mt-2">
        Hello I'm <span className="text-emerald-400">Heidi Pan</span>
      </h1>
      <p className="mt-4 text-gray-300 max-w-xl">
        I'm a software developer passionate about building clean, intuitive apps
        that solve real-world problems.
      </p>

      <Photo />
    </section>
  );
}
