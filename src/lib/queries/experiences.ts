import { supabase } from "@/lib/supabase"

export async function fetchExperiences() {
  const { data, error } = await supabase
    .from("experiences")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) throw error
  return data
}
