import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    console.log("API route called - fetching latest projects");
    console.log("Prisma client created");
    const projects = await prisma.project.findMany();
    
    // Sort projects numerically by num field (since it's stored as string)
    projects.sort((a, b) => parseInt(a.num) - parseInt(b.num));
    console.log("Raw projects from DB:", JSON.stringify(projects, null, 2));

    return NextResponse.json(projects);
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
