import { NextResponse } from "next/server";

// Temporary static data for deployment
const projects = [
  {
    id: 1,
    num: 1,
    category: "Web Development",
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and React",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    image: "/assets/work/thumb1.png",
    live: "https://your-portfolio.vercel.app",
    github: "https://github.com/yourusername/portfolio"
  },
  {
    id: 2,
    num: 2,
    category: "Full Stack",
    title: "Chat Application",
    description: "Real-time chat application with AI integration",
    stack: ["React", "Node.js", "OpenAI API", "Socket.io"],
    image: "/assets/work/thumb2.png",
    live: "",
    github: ""
  }
];

export async function GET() {
  try {
    console.log("API route called - returning static data");
    return NextResponse.json(projects);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
