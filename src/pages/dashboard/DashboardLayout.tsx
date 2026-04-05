import { NavLink, Outlet } from "react-router-dom"
import { ArrowLeft, Briefcase, FolderKanban, LayoutDashboard } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinkClass =
  "flex items-center gap-2 rounded-lg px-3 py-2 text-sm text-neutral-400 transition-colors hover:bg-white/5 hover:text-white"

function navLinkActive({ isActive }: { isActive: boolean }) {
  return cn(
    navLinkClass,
    isActive && "bg-white/10 text-white shadow-sm ring-1 ring-white/10"
  )
}

const navItems = [
  { to: "/dashboard", end: true, label: "Overview", icon: LayoutDashboard },
  { to: "/dashboard/experiences", end: false, label: "Experiences", icon: Briefcase },
  { to: "/dashboard/projects", end: false, label: "Projects", icon: FolderKanban },
] as const

export function DashboardLayout() {
  return (
    <div className="flex min-h-dvh flex-col bg-neutral-950 text-neutral-100 md:flex-row">
      <aside className="shrink-0 border-b border-neutral-800 md:w-56 md:border-b-0 md:border-r">
        <div className="flex h-full flex-col gap-6 p-4 md:p-6">
          <NavLink
            to="/"
            className="group flex items-center gap-2 text-sm text-neutral-500 transition-colors hover:text-white"
          >
            <ArrowLeft className="size-4 transition-transform group-hover:-translate-x-0.5" />
            <span className="font-zodiak tracking-tight">Back to landing</span>
          </NavLink>

          <nav className="flex flex-row gap-1 overflow-x-auto pb-1 md:flex-col md:gap-0.5 md:overflow-visible md:pb-0">
            {navItems.map(({ to, end, label, icon: Icon }) => (
              <NavLink key={label} to={to} end={end} className={navLinkActive}>
                <Icon className="size-4 shrink-0 opacity-80" />
                {label}
              </NavLink>
            ))}
          </nav>
        </div>
      </aside>

      <main className="min-h-0 flex-1 overflow-auto">
        <div className="mx-auto max-w-3xl px-4 py-8 md:px-8 md:py-12">
          <Outlet />
        </div>
      </main>
    </div>
  )
}
