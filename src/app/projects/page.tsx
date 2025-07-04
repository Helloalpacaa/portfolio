"use client";

import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import Link from "next/link";
import Image from "next/image";

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
  createdAt: string;
  stack?: string[];
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
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
        console.log("Frontend received projects:", data); // Debug line
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An error occurred");
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

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
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-[42px] xl:text-[72px] leading-[1.1] font-semibold text-white mb-4">
            My Projects<span className="text-[#00ff99]">.</span>
          </h1>
          <p className="max-w-[600px] text-white/80 mx-auto text-lg">
            A collection of projects that showcase my skills in web development,
            from frontend designs to full-stack applications.
          </p>
        </motion.div>

        {/* Projects Grid with Scrollbar */}
        <ScrollArea className="h-[600px] w-full rounded-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 p-4">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.8 + index * 0.1 }}
                className="group"
              >
                {/* Project Card */}
                <div className="bg-[#232329] rounded-xl overflow-hidden hover:bg-[#2a2a32] transition-all duration-300">
                  {/* Project Image */}
                  <div className="relative h-[250px] overflow-hidden">
                    {project.image ? (
                      <Image
                        src={project.image}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                        alt={project.title}
                      />
                    ) : (
                      <div className="w-full h-full bg-[#1a1a1f] flex items-center justify-center">
                        <span className="text-white/60">No image</span>
                      </div>
                    )}
                    {/* Project Number Overlay */}
                    <div className="absolute top-4 left-4 w-12 h-12 bg-[#00ff99] rounded-full flex items-center justify-center">
                      <span className="text-[#1c1c22] font-bold text-lg">
                        {project.num}
                      </span>
                    </div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Category */}
                    <div className="mb-3">
                      <span className="text-[#00ff99] text-sm font-medium uppercase tracking-wider">
                        {project.category} project
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-white text-xl font-semibold mb-3 group-hover:text-[#00ff99] transition-colors">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-white/70 text-sm mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    {/* Technologies */}
                    {(() => {
                      console.log(
                        "Project:",
                        project.title,
                        "Stack:",
                        project.stack
                      );
                      return null; // Return null so it doesn't render anything
                    })()}
                    {project.stack && project.stack.length > 0 ? (
                      <div className="mb-4">
                        <p className="text-white text-xs mb-2">Technologies:</p>
                        <div className="flex flex-wrap gap-2">
                          {project.stack.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-3 py-1 bg-[#00ff99]/10 text-[#00ff99] text-xs rounded-full border border-[#00ff99]/20"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    ) : (
                      <div className="mb-4 text-white/50 text-xs">
                        No technologies
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex items-center gap-4">
                      {/* Live Project Button */}
                      {project.liveUrl && (
                        <Link
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-12 h-12 rounded-full bg-white/5 flex justify-center items-center group/btn hover:bg-[#00ff99] transition-all">
                                <BsArrowUpRight className="text-white text-lg group-hover/btn:text-[#1c1c22]" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>Live Demo</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                      )}

                      {/* GitHub Button */}
                      {project.githubUrl && (
                        <Link
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-12 h-12 rounded-full bg-white/5 flex justify-center items-center group/btn hover:bg-[#00ff99] transition-all">
                                <BsGithub className="text-white text-lg group-hover/btn:text-[#1c1c22]" />
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>GitHub repository</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </Link>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </div>
    </motion.section>
  );
};

export default Projects;
