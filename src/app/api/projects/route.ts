// import the PrismaClient, connect PostgreSQL database
import { PrismaClient } from "@prisma/client";
// build a HTTP response
import { NextResponse } from "next/server";

// Createsa new instance of the prisma client, so we can start sending queries to the database
const prisma = new PrismaClient();

// GET HTTP method. Next.js automatically maps this to GET /api/projects.
export async function GET() {
  try {
    // Find all rows in the Project table, and sort them by createdAt — newest first
    const projects = await prisma.project.findMany({
      orderBy: { createdAt: "desc" },
    });
    // Send the fetched data as a JSON response to the browser or frontend.
    return NextResponse.json(projects);
  } catch (error) {
    //  If something goes wrong (like DB connection issues), we catch it and send an error response with HTTP status 500 (Internal Server Error).
    return NextResponse.json(
      { error: "Failed to fetch projects" },
      { status: 500 }
    );
  }
}
