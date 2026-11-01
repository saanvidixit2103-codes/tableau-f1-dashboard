import { Gauge } from "lucide-react";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-track-900">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 py-8 text-sm text-neutral-400 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Gauge className="h-4 w-4 text-accent" aria-hidden="true" />
          <span>
            Built by <span className="font-semibold text-white">Saanvi Dixit</span> · Powered by Tableau
          </span>
        </div>
        <p className="text-xs text-neutral-500">Formula 1 Race Intelligence Dashboard</p>
      </div>
    </footer>
  );
}
