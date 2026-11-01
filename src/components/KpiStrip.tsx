import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import Reveal from "@/components/Reveal";

const stats = [
  { value: 29, label: "Circuits Showcased" },
  { value: 10, label: "Competing Teams" },
  { value: 6464, label: "Race Outcomes Logged" },
  { value: 17, label: "Seasons" },
];

function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration: 1.6,
      ease: "easeOut",
      onUpdate: (latest) => setDisplay(Math.round(latest)),
    });
    return () => controls.stop();
  }, [inView, to]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("en-US")}
    </span>
  );
}

export default function KpiStrip() {
  return (
    <section aria-label="Key project numbers" className="relative border-y border-white/10 bg-track-900">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px bg-white/10 lg:grid-cols-4">
        {stats.map((stat, i) => (
          <Reveal key={stat.label} delay={i * 0.08} className="bg-track-900">
            <div className="group flex flex-col items-center justify-center px-6 py-10 text-center transition-colors duration-300 hover:bg-f1-red/5">
              <p className="font-display text-4xl font-black text-white transition-colors group-hover:text-f1-redGlow sm:text-5xl">
                <CountUp to={stat.value} />
              </p>
              <p className="mt-3 text-xs font-semibold uppercase tracking-[0.2em] text-neutral-400 sm:text-sm">
                {stat.label}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
