import { supabase } from "@/lib/supabase"

export async function fetchProjects() {
  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) throw error
  return data
}