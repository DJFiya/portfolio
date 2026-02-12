import { motion } from "framer-motion"

const wavePath1 =
  "M0 80 Q120 40 240 80 T480 80 T720 80 T960 80 T1200 80 T1440 80 T1680 80 T1920 80 T2160 80 T2400 80 V160 H0 Z"
const wavePath2 =
  "M0 120 Q180 60 360 120 T720 120 T1080 120 T1440 120 T1800 120 T2160 120 T2520 120 V200 H0 Z"
const wavePath3 =
  "M0 160 Q150 100 300 160 T600 160 T900 160 T1200 160 T1500 160 T1800 160 T2100 160 T2400 160 V240 H0 Z"

export function WaveBackground() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-black">
      <svg
        className="absolute inset-0 h-full w-full min-h-full min-w-full object-cover"
        viewBox="0 0 2400 240"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="wave1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0a0a0a" />
            <stop offset="50%" stopColor="#171717" />
            <stop offset="100%" stopColor="#0a0a0a" />
          </linearGradient>
          <linearGradient id="wave2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0f0f0f" />
            <stop offset="50%" stopColor="#262626" />
            <stop offset="100%" stopColor="#0f0f0f" />
          </linearGradient>
          <linearGradient id="wave3" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#141414" />
            <stop offset="50%" stopColor="#1f1f1f" />
            <stop offset="100%" stopColor="#141414" />
          </linearGradient>
        </defs>
        <motion.path
          d={wavePath1}
          fill="url(#wave1)"
          initial={{ x: 0 }}
          animate={{ x: [0, -60, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d={wavePath2}
          fill="url(#wave2)"
          initial={{ x: 0 }}
          animate={{ x: [0, 40, 0] }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.path
          d={wavePath3}
          fill="url(#wave3)"
          initial={{ x: 0 }}
          animate={{ x: [0, -40, 0] }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  )
}
