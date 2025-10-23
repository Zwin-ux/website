type Props = { className?: string; title?: string };

export default function BonelliMark({ className = "w-40 h-40", title = "Bonelli" }: Props) {
  return (
    <svg
      viewBox="0 0 256 256"
      role="img"
      aria-label={title}
      className={className}
    >
      <defs>
        <linearGradient id="bonelli-grad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#F2A65A" />
          <stop offset="50%" stopColor="#D88338" />
          <stop offset="100%" stopColor="#A35A22" />
        </linearGradient>

        {/* Rounded cap for circuit tips */}
        <marker id="dot" markerWidth="8" markerHeight="8" refX="4" refY="4">
          <circle cx="4" cy="4" r="4" fill="url(#bonelli-grad)" />
        </marker>

        <style>
          {`
            .trunk{stroke:url(#bonelli-grad); stroke-width:10; fill:none; stroke-linecap:round; stroke-linejoin:round}
            .branch{stroke:url(#bonelli-grad); stroke-width:8; fill:none; stroke-linecap:round; stroke-linejoin:round; marker-end:url(#dot)}
            .crown{fill:none; stroke:url(#bonelli-grad); stroke-width:10}
            .shine{opacity:.0}
            @media (prefers-reduced-motion: no-preference){
              .shine{opacity:.25; animation: shine 3s ease-in-out infinite}
              @keyframes shine{ 0%{opacity:.05} 50%{opacity:.35} 100%{opacity:.05} }
            }
          `}
        </style>
      </defs>

      {/* Crown outline (stylized tree canopy) */}
      <path
        className="crown"
        d="M50 120
           C50 70, 95 40, 128 40
           C161 40, 206 70, 206 120
           C206 160, 176 188, 128 188
           C80 188, 50 160, 50 120Z"
      />

      {/* Trunk */}
      <path className="trunk" d="M128 188 L128 230" />

      {/* Symmetric branches (left) */}
      <path className="branch" d="M128 160 L96 160 L80 144" />
      <path className="branch" d="M128 140 L92 140 L72 120" />
      <path className="branch" d="M128 120 L90 120 L66 98"  />
      <path className="branch" d="M128 100 L98 100 L82 84"  />

      {/* Symmetric branches (right) */}
      <path className="branch" d="M128 160 L160 160 L176 144" />
      <path className="branch" d="M128 140 L164 140 L184 120" />
      <path className="branch" d="M128 120 L166 120 L190 98"  />
      <path className="branch" d="M128 100 L158 100 L174 84"  />

      {/* Subtle animated glow overlay */}
      <ellipse cx="128" cy="120" rx="78" ry="64" fill="url(#bonelli-grad)" className="shine" />

      {/* Wordmark */}
      <text
        x="128" y="252"
        textAnchor="middle"
        fontFamily="Inter, system-ui, sans-serif"
        fontWeight="800"
        fontSize="28"
        fill="url(#bonelli-grad)"
      >
        BONELLI
      </text>
    </svg>
  );
}
