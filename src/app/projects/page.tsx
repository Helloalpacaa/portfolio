"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

// TypeScript interface for project data
interface Project {
  id: string;
  num: string;
  category: string;
  title: string;
  description: string;
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  stack?: string[]; // We'll need to add this to your DB schema
  createdAt: string;
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [currentProject, setCurrentProject] = useState<Project | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch projects from your API
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch("/api/projects");
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        const data = await response.json();
        setProjects(data);
        if (data.length > 0) {
          setCurrentProject(data[0]); // Set first project as current
        }
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    if (projects[currentIndex]) {
      setCurrentProject(projects[currentIndex]);
    }
  };

  // Loading state
  if (loading) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[80vh] flex items-center justify-center"
      >
        <div className="text-white text-xl">Loading projects...</div>
      </motion.section>
    );
  }

  // Error state
  if (error) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[80vh] flex items-center justify-center"
      >
        <div className="text-red-500 text-xl">Error: {error}</div>
      </motion.section>
    );
  }

  // No projects state
  if (projects.length === 0) {
    return (
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-[80vh] flex items-center justify-center"
      >
        <div className="text-white text-xl">No projects found.</div>
      </motion.section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {currentProject?.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-[#00ff99] transition-all duration-500 capitalize">
                {currentProject?.category} project
              </h2>
              {/* project title */}
              <h3 className="text-[24px] font-semibold text-[#00ff99] leading-none">
                {currentProject?.title}
              </h3>
              {/* project description */}
              <p className="text-white/60">{currentProject?.description}</p>
              {/* stack - you'll need to add this field to your database */}
              {currentProject?.stack && (
                <ul className="flex gap-4 flex-wrap">
                  {currentProject.stack.map((tech, index) => (
                    <li key={index} className="text-xl text-[#00ff99]">
                      {tech}
                      {index !== currentProject.stack!.length - 1 && ","}
                    </li>
                  ))}
                </ul>
              )}
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {currentProject?.liveUrl && (
                  <Link
                    href={currentProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-[#00ff99]" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
                {/* github project button */}
                {currentProject?.githubUrl && (
                  <Link
                    href={currentProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGithub className="text-white text-3xl group-hover:text-[#00ff99]" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                )}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={project.id} className="w-full">
                  <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                    {/* overlay */}
                    <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                    {/* image container with aspect ratio */}
                    <div className="relative w-full h-full overflow-hidden rounded-lg">
                      {project.image ? (
                        <Image
                          src={project.image}
                          fill
                          className="object-cover transition-transform duration-300 group-hover:scale-105"
                          alt={project.title}
                          sizes="(max-width: 768px) 100vw, 50vw"
                        />
                      ) : (
                        <div className="w-full h-full bg-[#232329] flex items-center justify-center">
                          <span className="text-white/60">No image</span>
                        </div>
                      )}
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              {/* slider buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-[#00ff99] hover:bg-[#00e187] text-[#1c1c22] text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Projects;
