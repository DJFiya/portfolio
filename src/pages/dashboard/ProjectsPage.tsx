import { ExternalLink, Github } from "lucide-react"
import { useProjects } from "@/features/projects/useProjects"
import { cn } from "@/lib/utils"

export function ProjectsPage() {
  const { projects, loading } = useProjects()

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="font-zodiak text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Projects
        </h1>
        <p className="max-w-xl text-neutral-400">
          Work pulled from your data source. Featured items are marked when
          available.
        </p>
      </header>

      {loading ? (
        <p className="text-sm text-neutral-500">Loading projects…</p>
      ) : projects.length === 0 ? (
        <p className="rounded-lg border border-dashed border-neutral-700 bg-neutral-900/40 px-4 py-8 text-center text-sm text-neutral-500">
          No projects yet. Add rows in Supabase or adjust the query when you wire
          the backend.
        </p>
      ) : (
        <ul className="space-y-4">
          {projects.map((project) => (
            <li
              key={project.id}
              className={cn(
                "rounded-xl border border-neutral-800 bg-neutral-900/50 p-5",
                project.featured && "ring-1 ring-pink-500/30"
              )}
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <h2 className="font-zodiak text-xl font-medium text-white">
                      {project.title}
                    </h2>
                    {project.featured ? (
                      <span className="rounded-full bg-pink-500/15 px-2 py-0.5 text-xs font-medium text-pink-300">
                        Featured
                      </span>
                    ) : null}
                  </div>
                  <p className="text-sm text-neutral-400">{project.description}</p>
                  {project.tech_stack?.length ? (
                    <ul className="flex flex-wrap gap-1.5 pt-2">
                      {project.tech_stack.map((tech) => (
                        <li
                          key={tech}
                          className="rounded-md bg-neutral-800 px-2 py-0.5 text-xs text-neutral-300"
                        >
                          {tech}
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
                <div className="flex shrink-0 gap-2">
                  {project.github_url ? (
                    <a
                      href={project.github_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex size-9 items-center justify-center rounded-lg border border-neutral-700 text-neutral-400 transition-colors hover:border-neutral-500 hover:text-white"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <Github className="size-4" />
                    </a>
                  ) : null}
                  {project.live_url ? (
                    <a
                      href={project.live_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex size-9 items-center justify-center rounded-lg border border-neutral-700 text-neutral-400 transition-colors hover:border-neutral-500 hover:text-white"
                      aria-label={`${project.title} live site`}
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  ) : null}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
