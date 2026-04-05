import { useEffect, useState } from "react"
import { fetchExperiences } from "@/lib/queries/experiences"
import type { Experience } from "@/features/experiences/types"

export function useExperiences() {
  const [experiences, setExperiences] = useState<Experience[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchExperiences()
      .then((data) => setExperiences(data ?? []))
      .finally(() => setLoading(false))
  }, [])

  return { experiences, loading }
}
