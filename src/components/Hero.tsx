import { motion } from "framer-motion";
import { ArrowDown, Flag } from "lucide-react";

const SKYLINE_IMAGE =
  "https://images.pexels.com/photos/618610/pexels-photo-618610.jpeg?auto=compress&cs=tinysrgb&h=650&w=940";

export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden">
      <img
        src={SKYLINE_IMAGE}
        alt="Silhouetted city skyline at dusk under a warm orange sky"
        className="absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-track-950/70 via-track-950/85 to-track-950" aria-hidden="true" />
      <div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-transparent via-accent to-transparent" aria-hidden="true" />

      <div className="relative mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <motion.p
          initial={{ opacity: 0, x: -24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="eyebrow mb-6 flex items-center gap-3"
        >
          <Flag className="h-4 w-4" aria-hidden="true" />
          Data analytics project
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl font-black uppercase leading-[1.05] tracking-tight text-white sm:text-7xl lg:text-8xl"
        >
          Formula <span className="text-accent drop-shadow-[0_0_24px_rgba(34,211,238,0.6)]">1</span>
          <span className="mt-2 block text-2xl font-bold tracking-[0.2em] text-neutral-300 sm:text-3xl lg:text-4xl">
            Race Intelligence Dashboard
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-2xl text-base leading-relaxed text-neutral-300 sm:text-lg"
        >
          Deep-dive analytics into driver performance, team strategy and championship trends, turned into
          interactive Tableau dashboards.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a href="#dashboard" className="btn-primary">
            View Dashboard
          </a>
          <a href="#story" className="btn-ghost">
            Explore Story
          </a>
        </motion.div>
      </div>

      <a
        href="#project"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 rounded-full p-2 text-neutral-400 transition-colors hover:text-white"
        aria-label="Scroll to project overview"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <ArrowDown className="h-6 w-6" aria-hidden="true" />
        </motion.span>
      </a>
    </section>
  );
}
