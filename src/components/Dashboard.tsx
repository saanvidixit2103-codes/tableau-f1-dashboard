import { Activity } from "lucide-react";
import Reveal from "@/components/Reveal";
import TableauViz from "@/components/TableauViz";
import type { TableauVizSource } from "@/components/TableauViz";
import { TABLEAU_DASHBOARD_URL } from "@/config";

const DASHBOARD_SOURCE: TableauVizSource = {
  layout: "fixed",
  params: {
    host_url: "https%3A%2F%2Fpublic.tableau.com%2F",
    embed_code_version: "3",
    path: "shared/6NWQ3TC4W",
    toolbar: "yes",
    static_image: "https://public.tableau.com/static/images/6N/6NWQ3TC4W/1.png",
    animate_transition: "yes",
    display_static_image: "yes",
    display_spinner: "yes",
    display_overlay: "yes",
    display_count: "yes",
    language: "en-US",
  },
};

export default function Dashboard() {
  return (
    <section id="dashboard" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <p className="eyebrow flex items-center gap-2">
          <Activity className="h-4 w-4" aria-hidden="true" />
          Interactive dashboard
        </p>
        <h2 className="section-title mt-4">Race performance explorer</h2>
        <p className="mt-4 max-w-2xl text-neutral-400">
          Filter by season, driver and team to compare results, points and reliability.
        </p>
      </Reveal>
      <Reveal delay={0.1} className="mt-10">
        <TableauViz
          source={DASHBOARD_SOURCE}
          title="Formula 1 Race Intelligence Dashboard"
          openUrl={TABLEAU_DASHBOARD_URL}
          openLabel="Open in Tableau Public"
        />
      </Reveal>
    </section>
  );
}
