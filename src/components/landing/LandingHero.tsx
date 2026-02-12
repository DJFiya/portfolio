import { Link } from "react-router-dom"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.35,
      delayChildren: 0.4,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1.1,
      ease: [0.33, 1, 0.68, 1],
    },
  },
}

export function LandingHero() {
  return (
    <motion.section
      className="relative z-10 flex h-full w-full flex-col items-center justify-center px-4 py-6 sm:px-6 md:px-8"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <div className="space-y-2 text-center">
        <h1 className="font-zodiak text-3xl font-semibold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          <motion.span variants={item} className="block">
            Yours Truly,
          </motion.span>
        </h1>
        <p className="font-zodiak text-3xl font-extralight tracking-tight text-white/90 sm:text-xl md:text-2xl">
          <motion.span variants={item} className="block">
            Daevik Jain
          </motion.span>
        </p>
      </div>

      <motion.div
        variants={item}
        className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 md:bottom-10 md:right-10"
      >
        <Button
          asChild
          size="icon"
          className="group h-14 w-14 rounded-full border-0 bg-transparent p-0 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl"
        >
          <Link
            to="/dashboard"
            aria-label="Go to dashboard"
            className="relative flex h-14 w-14 items-center justify-center rounded-full transition-all duration-300"
          >
            {/* Gradient ring (outline) */}
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-pink-400 via-purple-500 to-blue-500 p-[2px]">
              <span className="flex h-full w-full items-center justify-center rounded-full bg-black/85 backdrop-blur-sm">
                {/* Gradient arrow via mask */}
                <span className="relative h-6 w-6 shrink-0">
                  <span
                    className="absolute inset-0 bg-gradient-to-r from-pink-400 to-blue-500 transition-transform duration-300 group-hover:translate-x-0.5 [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]"
                    style={{
                      WebkitMaskImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>')}")`,
                      maskImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>')}")`,
                    }}
                  />
                  {/* Shine overlay */}
                  <span
                    className="absolute inset-0 opacity-50 [mask-size:contain] [mask-repeat:no-repeat] [mask-position:center]"
                    style={{
                      background: "linear-gradient(105deg, transparent 0%, transparent 34%, rgba(255,255,255,0.45) 48%, transparent 62%, transparent 100%)",
                      WebkitMaskImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>')}")`,
                      maskImage: `url("data:image/svg+xml,${encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>')}")`,
                    }}
                  />
                </span>
              </span>
            </span>
          </Link>
        </Button>
      </motion.div>
    </motion.section>
  )
}
