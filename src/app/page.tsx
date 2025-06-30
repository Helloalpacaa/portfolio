import Hero from "@/components/Hero";

// Fetch data from API
// In Next.js App Router, src/app/api/projects/route.ts automatically maps to /api/projects
// When a GET request hits /api/projects, Next.js internally calls function GET(), which uses Prisma to fetch data and returns it as JSON
async function getProjects() {
  const res = await fetch("http://localhost:3000/api/projects", {
    cache: "no-store", // Always fetch fresh data from the server. Don’t cache anything. Don’t reuse old results.
  });

  if (!res.ok) {
    throw new Error("Failed to fetch projects");
  }

  return res.json();
}

export default async function Home() {
  const projects = await getProjects();

  return (
    <main>
      <Hero />
      {/* we'll add About, Projects, etc. below */}
    </main>
  );
}
