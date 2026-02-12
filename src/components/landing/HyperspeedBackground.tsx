import Hyperspeed from "@/components/Hyperspeed"
import { hyperspeedPresets } from "@/components/HyperSpeedPresets"

export function HyperspeedBackground() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-black">
      <Hyperspeed effectOptions={hyperspeedPresets.one} />
    </div>
  )
}
