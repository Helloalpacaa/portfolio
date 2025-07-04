// import the PrismaClient, connect PostgreSQL database
import { PrismaClient } from "@prisma/client";
// build a HTTP response
import { NextResponse } from "next/server";

// Createsa new instance of the prisma client, so we can start sending queries to the database
const prisma = new PrismaClient();

// GET HTTP method. Next.js automatically maps this to GET /api/projects.
export async function GET() {
  try {
    console.log("API route called");
    console.log("Prisma client created");
    const projects = await prisma.project.findMany({
      orderBy: { num: "asc" },
    });
    console.log("Raw projects from DB:", JSON.stringify(projects, null, 2));

    // Debug: Check what's being returned
    console.log("About to return:", JSON.stringify(projects, null, 2));

    return NextResponse.json(projects); // Debug line
  } catch (error) {
    console.error("API Error:", error);
    //  If something goes wrong (like DB connection issues), we catch it and send an error response with HTTP status 500 (Internal Server Error).
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
