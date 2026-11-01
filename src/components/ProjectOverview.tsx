import { Database, Eraser, BarChart3, LayoutDashboard, BookOpen, Gauge, Layers, Globe, Rocket } from "lucide-react";
import Reveal from "@/components/Reveal";

const steps = [
  { label: "Data Collection", icon: Database },
  { label: "Data Preparation", icon: Eraser },
  { label: "Data Visualization", icon: BarChart3 },
  { label: "Dashboard", icon: LayoutDashboard },
  { label: "Story", icon: BookOpen },
  { label: "Performance Testing", icon: Gauge },
  { label: "Web Integration", icon: Globe },
  { label: "Publishing", icon: Rocket },
];

const tools = [
  { name: "Tableau", role: "Interactive dashboards and data story" },
  { name: "Python", role: "Collecting and cleaning race data" },
  { name: "Flask", role: "Lightweight backend for the data pipeline" },
];

export default function ProjectOverview() {
  return (
    <section id="project" className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <p className="eyebrow">The project</p>
        <h2 className="section-title mt-4">From raw race data to a shareable story</h2>
      </Reveal>

      <div className="mt-12 grid gap-8 lg:grid-cols-5">
        <Reveal className="lg:col-span-3">
          <div className="glass-card h-full p-8">
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">The problem</h3>
            <p className="mt-4 leading-relaxed text-neutral-300">
              Decades of Formula 1 results are scattered across tables, seasons and teams. It is hard to see who is
              really driving performance, how strategy shapes outcomes, or where championships are won. This project
              turns that raw history into clear, interactive visuals that answer those questions.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-2">
          <div className="glass-card h-full p-8">
            <h3 className="font-display text-lg font-bold uppercase tracking-wide text-white">Tools used</h3>
            <ul className="mt-4 space-y-4">
              {tools.map((tool) => (
                <li key={tool.name} className="flex items-start gap-4">
                  <span className="mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-accent/15 text-accent-light">
                    <Layers className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span>
                    <span className="block font-semibold text-white">{tool.name}</span>
                    <span className="block text-sm text-neutral-400">{tool.role}</span>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-16">
        <h3 className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-neutral-400">
          Project timeline
        </h3>
        <div className="-mx-4 mt-8 overflow-x-auto px-4 pb-4 sm:mx-0 sm:px-0">
          <ol className="relative flex min-w-[900px] items-start justify-between">
            <span
              className="absolute left-6 right-6 top-6 h-px bg-gradient-to-r from-accent via-accent/60 to-white/10"
              aria-hidden="true"
            />
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <li key={step.label} className="group relative flex w-28 flex-col items-center text-center">
                  <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-accent/50 bg-track-950 text-accent-light transition-all duration-300 group-hover:scale-110 group-hover:bg-accent group-hover:text-track-950 group-hover:shadow-glow">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="mt-4 text-xs font-semibold text-neutral-500">{String(i + 1).padStart(2, "0")}</span>
                  <span className="mt-1 text-sm font-medium leading-snug text-neutral-200">{step.label}</span>
                </li>
              );
            })}
          </ol>
        </div>
      </Reveal>
    </section>
  );
}
