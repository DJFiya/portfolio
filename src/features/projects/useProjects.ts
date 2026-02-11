import { useEffect, useState } from "react"
import { fetchProjects } from "@/lib/queries/projects"
import type { Project } from "@/features/projects/types"

export function useProjects() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchProjects()
      .then((data) => setProjects(data ?? []))
      .finally(() => setLoading(false))
  }, [])

  return { projects, loading }
}