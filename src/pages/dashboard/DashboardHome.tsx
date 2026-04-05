import { Link } from "react-router-dom"
import { Briefcase, FolderKanban } from "lucide-react"

const cards = [
  {
    to: "/dashboard/experiences",
    title: "Experiences",
    description: "Roles, teams, and what I have shipped in the wild.",
    icon: Briefcase,
  },
  {
    to: "/dashboard/projects",
    title: "Projects",
    description: "Selected builds, experiments, and open source.",
    icon: FolderKanban,
  },
] as const

export function DashboardHome() {
  return (
    <div className="space-y-10">
      <header className="space-y-2">
        <h1 className="font-zodiak text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Dashboard
        </h1>
        <p className="max-w-xl text-neutral-400">
          Pick a section below or use the sidebar to move around the portfolio.
        </p>
      </header>

      <ul className="grid gap-4 sm:grid-cols-2">
        {cards.map(({ to, title, description, icon: Icon }) => (
          <li key={to}>
            <Link
              to={to}
              className="group flex h-full flex-col rounded-xl border border-neutral-800 bg-neutral-900/50 p-5 transition-colors hover:border-pink-500/40 hover:bg-neutral-900"
            >
              <span className="mb-3 inline-flex size-10 items-center justify-center rounded-lg bg-gradient-to-br from-pink-500/20 to-blue-500/20 text-pink-300">
                <Icon className="size-5" />
              </span>
              <span className="font-zodiak text-lg font-medium text-white group-hover:text-pink-100">
                {title}
              </span>
              <span className="mt-1 text-sm text-neutral-500 group-hover:text-neutral-400">
                {description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
