export interface Experience {
  id: string
  company: string
  role: string
  description: string
  location?: string | null
  start_date?: string | null
  end_date?: string | null
  current?: boolean | null
  company_url?: string | null
  created_at?: string
}
