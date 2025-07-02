"use client";

import { FiDownload } from "react-icons/fi";
import Photo from "@/components/Photo";
import Social from "@/components/Social";
import Stats from "@/components/Stats";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text section */}
          <div className="text-center xl:text-left order-2 xl:order-1 xl:max-w-[45%]">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I'm <br /> <span className="text-[#00ff99]">Heidi Pan</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I'm a software developer passionate about building clean,
              intuitive apps that solve real-world problems.
            </p>

            {/* btn and socials */}
            <div className="flex flex-col xl:flex-row items-center gap-8 text-[#00ff99]">
              <button
                className="uppercase flex items-center gap-2 border border-accent 
  rounded-full px-6 py-3 text-accent hover:bg-accent hover:text-primary transition-all 
  duration-500"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center 
  items-center text-accent text-base hover:bg-accent hover:text-primary transition-all duration-500"
                />
              </div>
            </div>
          </div>

          {/* photo section */}
          <div className="order-1 xl:order-2 mb-8 xl:mb-0 xl:max-w-[45%]">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
