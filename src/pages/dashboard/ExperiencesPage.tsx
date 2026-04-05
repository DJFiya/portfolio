import { ExternalLink } from "lucide-react"
import { useExperiences } from "@/features/experiences/useExperiences"
import type { Experience } from "@/features/experiences/types"

function formatPeriod(exp: Experience): string {
  const start = exp.start_date
    ? formatMonthYear(exp.start_date)
    : null
  const end = exp.current
    ? "Present"
    : exp.end_date
      ? formatMonthYear(exp.end_date)
      : null

  if (start && end) return `${start} – ${end}`
  if (start) return start
  if (end) return end
  return ""
}

function formatMonthYear(iso: string) {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return iso
  return d.toLocaleDateString(undefined, { month: "short", year: "numeric" })
}

export function ExperiencesPage() {
  const { experiences, loading } = useExperiences()

  return (
    <div className="space-y-8">
      <header className="space-y-2">
        <h1 className="font-zodiak text-3xl font-semibold tracking-tight text-white md:text-4xl">
          Experiences
        </h1>
        <p className="max-w-xl text-neutral-400">
          Roles and teams loaded from Supabase, same pattern as projects.
        </p>
      </header>

      {loading ? (
        <p className="text-sm text-neutral-500">Loading experiences…</p>
      ) : experiences.length === 0 ? (
        <p className="rounded-lg border border-dashed border-neutral-700 bg-neutral-900/40 px-4 py-8 text-center text-sm text-neutral-500">
          No experiences yet. Add rows to the <code className="text-neutral-300">experiences</code>{" "}
          table in Supabase, or check RLS policies if the table exists but stays empty.
        </p>
      ) : (
        <ul className="space-y-4">
          {experiences.map((exp) => {
            const period = formatPeriod(exp)
            return (
              <li
                key={exp.id}
                className="rounded-xl border border-neutral-800 bg-neutral-900/50 p-5"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div className="min-w-0 flex-1 space-y-1">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <h2 className="font-zodiak text-xl font-medium text-white">
                        {exp.role}
                      </h2>
                      <span className="text-neutral-500">·</span>
                      <span className="font-medium text-pink-200/90">
                        {exp.company}
                      </span>
                    </div>
                    {period ? (
                      <p className="text-xs font-medium uppercase tracking-wide text-neutral-500">
                        {period}
                      </p>
                    ) : null}
                    {exp.location ? (
                      <p className="text-sm text-neutral-500">{exp.location}</p>
                    ) : null}
                    <p className="pt-1 text-sm text-neutral-400">
                      {exp.description}
                    </p>
                  </div>
                  {exp.company_url ? (
                    <a
                      href={exp.company_url}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg border border-neutral-700 text-neutral-400 transition-colors hover:border-neutral-500 hover:text-white"
                      aria-label={`${exp.company} website`}
                    >
                      <ExternalLink className="size-4" />
                    </a>
                  ) : null}
                </div>
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}
