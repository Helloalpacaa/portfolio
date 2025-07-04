"use client";

import {
  FaPython,
  FaReact,
  FaJs,
  FaGitAlt,
  FaNodeJs,
  FaSwift,
  FaLaptopCode,
  FaUser,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaDocker,
  FaAws,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiXcode,
  SiIos,
  SiFirebase,
  SiMongodb,
  SiPostman,
  SiPandas,
  SiNumpy,
  SiDjango,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";
import Image from "next/image";

// experience data
const experience = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "My journey as a Computer Science student, including internships, research, and academic experiences.",
  items: [
    {
      company: "Adobe",
      position: "Software Engineering Intern",
      duration: "May 2025 - Aug 2025",
    },
    {
      company: "Georgia Institute of Technology",
      position: "Machine Learning Teaching Assistant",
      duration: "Fall 2023 - Present",
    },
    {
      company: "Georgia Tech iOS Club",
      position: "Senior Developer & Bootcamp Instructor",
      duration: "Spring 2024 - Present",
    },
    {
      company: "Georgia Tech WebDev Club",
      position: "Fullstack Developer",
      duration: "Spring 2024 - Present",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "My academic journey in Computer Science and related coursework.",
  items: [
    {
      institution: "Georgia Institute of Technology",
      degree: "Master of Science in Computer Science",
      duration: "2024 - 2026 (Expected)",
    },
    {
      institution: "Georgia Institute of Technology",
      degree: "Bachelor of Science in Computer Science",
      duration: "2022 - 2024",
    },
  ],
};

// skills and about data (keep the same as before)
const skills = {
  icon: <FaLaptopCode />,
  title: "My skills",
  description:
    "Technologies and programming languages I've learned through coursework, projects, and internships.",
  skillList: [
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiTypescript />,
      name: "typescript",
    },
    {
      icon: <FaSwift />,
      name: "swift",
    },
    {
      icon: <FaHtml5 />,
      name: "HTML",
    },
    {
      icon: <FaCss3Alt />,
      name: "CSS",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwind.css",
    },
    {
      icon: <FaNodeJs />,
      name: "node.js",
    },
    {
      icon: <SiDjango />,
      name: "Django.js",
    },
    {
      icon: <TbSql />,
      name: "SQL",
    },
    {
      icon: <SiPostgresql />,
      name: "postgresql",
    },
    {
      icon: <SiFirebase />,
      name: "Firebase",
    },
    {
      icon: <SiMongodb />,
      name: "MongoDB",
    },
    {
      icon: <SiXcode />,
      name: "Xcode",
    },
    {
      icon: <SiIos />,
      name: "iOS",
    },
    {
      icon: <FaDocker />,
      name: "Docker",
    },
    {
      icon: <FaAws />,
      name: "AWS",
    },
    {
      icon: <SiPostman />,
      name: "Postman",
    },
    {
      icon: <SiPandas />,
      name: "Pandas",
    },
    {
      icon: <SiNumpy />,
      name: "Numpy",
    },
    {
      icon: <FaGitAlt />,
      name: "git",
    },
  ],
};

const about = {
  icon: <FaUser />,
  title: "About me",
  description:
    "I'm a passionate Computer Science graduate student focused on software development and research.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Heidi Pan",
    },
    {
      fieldName: "Email",
      fieldValue: "helloalpacaa@gmail.com",
    },
    {
      fieldName: "Experience",
      fieldValue: "1+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "United States",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Mandarin",
    },
    {
      fieldName: "Phone",
      fieldValue: "+1 (346) 442-5302",
    },
    {
      fieldName: "Location",
      fieldValue: "Atlanta, Goergia",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {/* Title with icon */}
                <div className="flex items-center gap-4 justify-center xl:justify-start">
                  <Image
                    src={experience.icon}
                    alt="Experience"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <h3 className="text-4xl font-bold">{experience.title}</h3>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-[#00ff99]">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]"></span>
                            <p className="text-white/60">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                {/* Title with icon */}
                <div className="flex items-center gap-4 justify-center xl:justify-start">
                  <Image
                    src={education.icon}
                    alt="Education"
                    width={32}
                    height={32}
                    className="w-8 h-8"
                  />
                  <h3 className="text-4xl font-bold">{education.title}</h3>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-[#00ff99]">
                            {item.duration}
                          </span>
                          <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            <span className="w-[6px] h-[6px] rounded-full bg-[#00ff99]"></span>
                            <p className="text-white/60">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  {/* Title with icon */}
                  <div className="flex items-center gap-4 justify-center xl:justify-start">
                    <div className="text-[#00ff99] text-[32px]">
                      {skills.icon}
                    </div>
                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                  </div>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-[#00ff99] transition-all duration-300">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name}</p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left"
            >
              <div className="flex flex-col gap-[30px]">
                {/* Title with icon */}
                <div className="flex items-center gap-4 justify-center xl:justify-start">
                  <div className="text-[#00ff99] text-[32px]">{about.icon}</div>
                  <h3 className="text-4xl font-bold">{about.title}</h3>
                </div>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
