import { BookOpen } from "lucide-react";
import Reveal from "@/components/Reveal";
import TableauViz from "@/components/TableauViz";
import type { TableauVizSource } from "@/components/TableauViz";
import { TABLEAU_STORY_URL } from "@/config";

const STORY_SOURCE: TableauVizSource = {
  layout: "fluid",
  params: {
    host_url: "https%3A%2F%2Fpublic.tableau.com%2F",
    embed_code_version: "3",
    site_root: "",
    name: "f1raceintelligencedashboardfinal/Story1",
    tabs: "yes",
    toolbar: "yes",
    static_image: "https://public.tableau.com/static/images/f1/f1raceintelligencedashboardfinal/Story1/1.png",
    animate_transition: "yes",
    display_static_image: "yes",
    display_spinner: "yes",
    display_overlay: "yes",
    display_count: "yes",
    language: "en-GB",
  },
};

export default function Story() {
  return (
    <section id="story" className="mx-auto max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal>
        <p className="eyebrow flex items-center gap-2">
          <BookOpen className="h-4 w-4" aria-hidden="true" />
          Data story
        </p>
        <h2 className="section-title mt-4">The story behind the numbers</h2>
        <p className="mt-4 max-w-3xl leading-relaxed text-neutral-300">
          The story walks through the main findings in sequence, from who leads the championship to how teams and
          countries shape the sport. Scroll through it as a guided narrative.
        </p>
      </Reveal>
      <Reveal delay={0.1} className="mt-10">
        <TableauViz
          source={STORY_SOURCE}
          title="Formula 1 Race Intelligence Story"
          openUrl={TABLEAU_STORY_URL}
          openLabel="Open story in Tableau Public"
        />
      </Reveal>
    </section>
  );
}
