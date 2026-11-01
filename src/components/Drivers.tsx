import { Flag } from "lucide-react";
import Reveal from "@/components/Reveal";
import { drivers } from "@/data/drivers";

export default function Drivers() {
  const leaderPoints = Math.max(...drivers.map((d) => d.points));

  return (
    <section id="drivers" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <p className="eyebrow">Drivers</p>
        <h2 className="section-title mt-4">Championship contenders</h2>
      </Reveal>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {drivers.map((driver, i) => {
          const share = Math.round((driver.points / leaderPoints) * 100);
          return (
            <Reveal key={driver.name} delay={(i % 4) * 0.08} className="h-full">
              <li className="glass-card group flex h-full flex-col p-6">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl font-black text-white/15 transition-colors group-hover:text-accent/60">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <Flag className="h-5 w-5 text-accent-light opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </div>
                <h3 className="mt-6 text-lg font-semibold text-white">{driver.name}</h3>
                <p className="text-sm text-neutral-400">{driver.team}</p>

                <div className="mt-auto pt-6">
                  <div className="flex items-baseline justify-between">
                    <span className="text-xs uppercase tracking-widest text-neutral-500">Points</span>
                    <span className="font-display text-xl font-bold text-white">{driver.points}</span>
                  </div>
                  <div
                    className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/10"
                    role="progressbar"
                    aria-label={`${driver.name} points relative to the leader`}
                    aria-valuenow={share}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <div className="h-full rounded-full bg-gradient-to-r from-accent-dark to-accent-light" style={{ width: `${share}%` }} />
                  </div>
                </div>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
