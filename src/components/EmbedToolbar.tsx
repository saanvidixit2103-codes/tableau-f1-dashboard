import { ExternalLink, Maximize2, Minimize2 } from "lucide-react";

interface EmbedToolbarProps {
  openUrl: string;
  openLabel: string;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

const PLACEHOLDER_MARKER = "[PASTE";

export default function EmbedToolbar({ openUrl, openLabel, isFullscreen, onToggleFullscreen }: EmbedToolbarProps) {
  const isConfigured = !openUrl.includes(PLACEHOLDER_MARKER);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3">
      <a
        href={isConfigured ? openUrl : undefined}
        target="_blank"
        rel="noopener noreferrer"
        aria-disabled={!isConfigured}
        className={`btn-ghost text-sm ${isConfigured ? "" : "pointer-events-none opacity-50"}`}
      >
        <ExternalLink className="h-4 w-4" aria-hidden="true" />
        {openLabel}
      </a>
      <button type="button" onClick={onToggleFullscreen} className="btn-ghost text-sm" aria-pressed={isFullscreen}>
        {isFullscreen ? <Minimize2 className="h-4 w-4" aria-hidden="true" /> : <Maximize2 className="h-4 w-4" aria-hidden="true" />}
        {isFullscreen ? "Exit fullscreen" : "Fullscreen"}
      </button>
    </div>
  );
}
