import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Landing from "@/pages/Landing"
import { DashboardLayout } from "@/pages/dashboard/DashboardLayout"
import { DashboardHome } from "@/pages/dashboard/DashboardHome"
import { ExperiencesPage } from "@/pages/dashboard/ExperiencesPage"
import { ProjectsPage } from "@/pages/dashboard/ProjectsPage"

export function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/dashboard" element={<DashboardLayout />}>
          <Route index element={<DashboardHome />} />
          <Route path="experiences" element={<ExperiencesPage />} />
          <Route path="projects" element={<ProjectsPage />} />
          <Route path="*" element={<Navigate to="/dashboard" replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
