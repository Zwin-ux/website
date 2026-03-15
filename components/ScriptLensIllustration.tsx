const SCENES = [
  {
    key: "inspection",
    label: "Document inspection",
    title: "Document pass",
    note: "Primary clauses under review",
  },
  {
    key: "pattern",
    label: "Pattern detection",
    title: "Pattern match",
    note: "Repeated line structures surfaced",
  },
  {
    key: "comparison",
    label: "Script comparison",
    title: "Version delta",
    note: "Source lines aligned side-by-side",
  },
  {
    key: "cluster",
    label: "Knowledge clustering",
    title: "Cluster map",
    note: "Related evidence nodes grouped",
  },
  {
    key: "insight",
    label: "Insight extraction",
    title: "Insight summary",
    note: "Structured findings isolated",
  },
  {
    key: "anomaly",
    label: "Language anomaly detection",
    title: "Anomaly flag",
    note: "Unusual language markers detected",
  },
] as const;

export type ScriptLensScene = (typeof SCENES)[number]["key"];

type ScriptLensIllustrationProps = {
  scene: ScriptLensScene;
  className?: string;
  compact?: boolean;
};

export function ScriptLensIllustration({
  scene,
  className,
  compact = false,
}: ScriptLensIllustrationProps) {
  const activeScene = SCENES.find((item) => item.key === scene) ?? SCENES[0];
  const visibleScenes = compact
    ? [activeScene, ...SCENES.filter((item) => item.key !== scene).slice(0, 2)]
    : SCENES;
  const rootClassName = [
    "scriptlens-system",
    compact ? "scriptlens-system-compact" : "",
    className ?? "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={rootClassName} data-scene={scene} aria-hidden>
      <div className="scriptlens-toolbar">
        <span className="scriptlens-toolbar-dot scriptlens-toolbar-dot-red" />
        <span className="scriptlens-toolbar-dot scriptlens-toolbar-dot-yellow" />
        <span className="scriptlens-toolbar-dot scriptlens-toolbar-dot-blue" />
        <span className="scriptlens-toolbar-label">ScriptLens</span>
        <span className="scriptlens-toolbar-mode">{activeScene.label}</span>
      </div>

      <div className="scriptlens-canvas">
        <span className="scriptlens-structure scriptlens-structure-a" />
        <span className="scriptlens-structure scriptlens-structure-b" />
        <span className="scriptlens-structure scriptlens-structure-c" />

        <div className="scriptlens-document scriptlens-document-primary">
          <span className="scriptlens-line scriptlens-line-title" />
          <span className="scriptlens-line scriptlens-line-a" />
          <span className="scriptlens-line scriptlens-line-b scriptlens-line-highlight" />
          <span className="scriptlens-line scriptlens-line-c" />
          <span className="scriptlens-line scriptlens-line-d" />
        </div>

        <div className="scriptlens-document scriptlens-document-secondary">
          <span className="scriptlens-line scriptlens-line-title" />
          <span className="scriptlens-line scriptlens-line-a" />
          <span className="scriptlens-line scriptlens-line-b" />
          <span className="scriptlens-line scriptlens-line-c scriptlens-line-highlight-secondary" />
        </div>

        <span className="scriptlens-connector scriptlens-connector-a" />
        <span className="scriptlens-connector scriptlens-connector-b" />

        <span className="scriptlens-inspection-ring scriptlens-inspection-ring-a" />
        <span className="scriptlens-inspection-ring scriptlens-inspection-ring-b" />

        <span className="scriptlens-lens">
          <span className="scriptlens-lens-core" />
        </span>

        <span className="scriptlens-highlight scriptlens-highlight-a" />
        <span className="scriptlens-highlight scriptlens-highlight-b" />
        <span className="scriptlens-scanline" />

        <div className="scriptlens-node-cluster">
          <span className="scriptlens-node scriptlens-node-a" />
          <span className="scriptlens-node scriptlens-node-b" />
          <span className="scriptlens-node scriptlens-node-c" />
          <span className="scriptlens-node scriptlens-node-d" />
          <span className="scriptlens-node-link scriptlens-node-link-a" />
          <span className="scriptlens-node-link scriptlens-node-link-b" />
        </div>

        <div className="scriptlens-insight-card">
          <span className="scriptlens-insight-kicker">Detected</span>
          <span className="scriptlens-insight-title">{activeScene.title}</span>
          <span className="scriptlens-insight-note">{activeScene.note}</span>
        </div>
      </div>

      <div className="scriptlens-scene-rail">
        {visibleScenes.map((item) => (
          <span
            key={item.key}
            className="scriptlens-scene-chip"
            data-active={item.key === scene}
          >
            {item.label}
          </span>
        ))}
      </div>
    </div>
  );
}
