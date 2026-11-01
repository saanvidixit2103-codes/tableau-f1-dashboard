import { useEffect, useRef, useState } from "react";
import EmbedToolbar from "@/components/EmbedToolbar";
import { useFullscreen } from "@/hooks/useFullscreen";

const VIZ_API_SCRIPT = "https://public.tableau.com/javascripts/api/viz_v1.js";

export interface TableauVizSource {
  params: Record<string, string>;
  layout: "fixed" | "fluid";
}

interface TableauVizProps {
  source: TableauVizSource;
  title: string;
  openUrl: string;
  openLabel: string;
}

function sizeViz(viz: HTMLObjectElement, width: number, layout: TableauVizSource["layout"]) {
  if (layout === "fluid") {
    viz.style.width = "100%";
    viz.style.height = `${width * 0.75}px`;
    return;
  }
  const isDesktop = width > 500;
  viz.style.minWidth = isDesktop ? "1920px" : "1016px";
  viz.style.maxWidth = "100%";
  viz.style.minHeight = isDesktop ? "1130px" : "2650px";
  viz.style.maxHeight = `${width * (isDesktop ? 0.75 : 1.77)}px`;
}

export default function TableauViz({ source, title, openUrl, openLabel }: TableauVizProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const { isFullscreen, toggle } = useFullscreen(containerRef);
  const isFixed = source.layout === "fixed";

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const placeholder = document.createElement("div");
    placeholder.className = "tableauPlaceholder";
    placeholder.style.position = "relative";
    container.replaceChildren(placeholder);

    const viz = document.createElement("object");
    viz.className = "tableauViz";
    viz.style.display = "none";
    for (const [name, value] of Object.entries(source.params)) {
      const param = document.createElement("param");
      param.setAttribute("name", name);
      param.setAttribute("value", value);
      viz.appendChild(param);
    }
    placeholder.appendChild(viz);
    sizeViz(viz, placeholder.offsetWidth, source.layout);

    const script = document.createElement("script");
    script.src = VIZ_API_SCRIPT;
    placeholder.insertBefore(script, viz);

    const observer = new MutationObserver(() => {
      if (container.querySelector("iframe")) setLoaded(true);
    });
    observer.observe(container, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      container.replaceChildren();
    };
  }, [source]);

  return (
    <div className="space-y-4">
      <EmbedToolbar openUrl={openUrl} openLabel={openLabel} isFullscreen={isFullscreen} onToggleFullscreen={toggle} />

      <div className="glass-card relative overflow-hidden rounded-2xl p-2 hover:translate-y-0 hover:shadow-none sm:p-3">
        {!loaded && (
          <div
            className="pointer-events-none absolute inset-2 animate-pulse rounded-xl bg-gradient-to-br from-track-800 via-track-700 to-track-800 sm:inset-3"
            role="status"
            aria-label={`Loading ${title}`}
          />
        )}
        <div
          ref={containerRef}
          className={`overflow-x-auto ${isFixed ? "min-h-[600px] sm:min-h-[900px]" : ""}`}
        />
      </div>
      {isFixed && <p className="text-xs text-neutral-500 sm:hidden">Swipe sideways to explore the full view.</p>}
    </div>
  );
}
