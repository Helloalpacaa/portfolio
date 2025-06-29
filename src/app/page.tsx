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
    <main className="max-w-3xl mx-auto p-6">
      <h1 className="text-4xl font-bold">My Projects</h1>

      {projects.length === 0 ? (
        <p className="text-gray-500">No projects yet.</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((project: any) => (
            <li key={project.id} className="border p-4 rounded shadow">
              <h2 className="text-2xl font-semibold">{project.title}</h2>
              <p className="text-gray-700">{project.description}</p>
              <a
                href={project.link}
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}
