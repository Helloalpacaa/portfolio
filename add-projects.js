const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

async function addProjects() {
  try {
    console.log('Adding projects to Neon database...');

    // Project 1
    const project1 = await prisma.project.create({
      data: {
        title: "Portfolio Website",
        category: "Web Development", 
        description: "A modern portfolio website showcasing my projects and skills",
        stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
        num: "1",
        featured: true,
        liveUrl: "https://your-portfolio.vercel.app",
        githubUrl: "https://github.com/yourusername/portfolio",
        image: "/assets/work/thumb1.png"
      }
    });

    // Project 2  
    const project2 = await prisma.project.create({
      data: {
        title: "E-commerce Platform",
        category: "Full Stack",
        description: "A complete e-commerce solution with payment integration",
        stack: ["React", "Node.js", "MongoDB", "Stripe"],
        num: "2", 
        featured: false,
        liveUrl: "",
        githubUrl: "",
        image: "/assets/work/thumb2.png"
      }
    });

    // Project 3
    const project3 = await prisma.project.create({
      data: {
        title: "Task Management App",
        category: "Mobile Development",
        description: "A mobile app for managing daily tasks and productivity",
        stack: ["React Native", "Firebase", "Redux"],
        num: "3",
        featured: false, 
        liveUrl: "",
        githubUrl: "",
        image: "/assets/work/thumb3.png"
      }
    });

    console.log('✅ Successfully added projects:');
    console.log('1.', project1.title);
    console.log('2.', project2.title); 
    console.log('3.', project3.title);

  } catch (error) {
    console.error('❌ Error adding projects:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addProjects();