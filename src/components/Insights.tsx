import { Trophy, Factory, CircleDot, Wrench, Globe, Medal } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Reveal from "@/components/Reveal";

interface Insight {
  title: string;
  body: string;
  icon: LucideIcon;
}

const insights: Insight[] = [
  {
    title: "Driver championship",
    body: "Verstappen leads the driver points leaderboard, with Hamilton second.",
    icon: Trophy,
  },
  {
    title: "Team ranking",
    body: "Red Bull Racing tops the team ranking, ahead of Mercedes and Ferrari.",
    icon: Factory,
  },
  {
    title: "Tyre strategy",
    body: "Tyre usage is balanced across Soft, Medium and Hard compounds.",
    icon: CircleDot,
  },
  {
    title: "Reliability",
    body: "Reliability (DNFs) varies a lot between drivers.",
    icon: Wrench,
  },
  {
    title: "Global footprint",
    body: "Race participation is concentrated in a few countries.",
    icon: Globe,
  },
  {
    title: "Podium concentration",
    body: "Podium finishes are concentrated in a small group of drivers and teams.",
    icon: Medal,
  },
];

export default function Insights() {
  return (
    <section id="insights" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <p className="eyebrow">Key insights</p>
        <h2 className="section-title mt-4">What the data reveals</h2>
      </Reveal>

      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {insights.map((insight, i) => {
          const Icon = insight.icon;
          return (
            <Reveal key={insight.title} delay={(i % 3) * 0.1} className="h-full">
              <li className="glass-card group flex h-full flex-col p-8">
                <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-accent/15 text-accent-light transition-colors duration-300 group-hover:bg-accent group-hover:text-track-950">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </span>
                <h3 className="mt-6 font-display text-base font-bold uppercase tracking-wide text-white">
                  {insight.title}
                </h3>
                <p className="mt-3 leading-relaxed text-neutral-400">{insight.body}</p>
              </li>
            </Reveal>
          );
        })}
      </ul>
    </section>
  );
}
