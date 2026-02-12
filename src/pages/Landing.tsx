import { HyperspeedBackground } from "@/components/landing/HyperspeedBackground"
import { LandingHero } from "@/components/landing/LandingHero"

export default function Landing() {
  return (
    <div className="relative h-dvh w-full min-h-dvh bg-black text-white overflow-hidden">
      <HyperspeedBackground />
      <LandingHero />
    </div>
  )
}
