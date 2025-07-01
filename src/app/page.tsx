"use client";

import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
// import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full bg-black text-white">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* Text section */}
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl text-emerald-400">Software Developer</span>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Hello I'm <br />{" "}
              <span className="text-emerald-400">Heidi Pan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-gray-300">
              I'm a software developer passionate about building clean,
              intuitive apps that solve real-world problems.
            </p>

            {/* Button + Social */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <a
                href="/assets/resume.pdf"
                download
                className="uppercase border border-emerald-400 text-emerald-400 px-6 py-4 rounded-md flex items-center gap-2 hover:bg-emerald-400 hover:text-black transition-all duration-300"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </a>

              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-emerald-400 rounded-full flex justify-center items-center text-emerald-400 hover:bg-emerald-400 hover:text-black transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* Photo section */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>

      {/* Stats */}
      {/* <Stats /> */}
    </section>
  );
}
