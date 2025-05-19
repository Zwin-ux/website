import { memo, useMemo } from "react";

// Memoized orb component to prevent unnecessary re-renders
const GradientOrb = memo(({ size, colors, style }: { size: number; colors: string[]; style?: React.CSSProperties }) => (
  <div 
    className="absolute rounded-full"
    style={{
      width: `${size}px`,
      height: `${size}px`,
      background: `radial-gradient(circle at 30% 30%, ${colors[0]}, ${colors[1]})`,
      boxShadow: `0 0 ${size}px ${colors[0]}80`,
      opacity: 0.7,
      ...style,
    }}
    aria-hidden="true"
  />
));
GradientOrb.displayName = 'GradientOrb';

// Pre-defined color sets for consistent theming
const COLOR_SETS: readonly string[][] = [
  ["#6366F1", "#D946EF"], // Purple to pink
  ["#3B82F6", "#8B5CF6"], // Blue to purple
  ["#EC4899", "#F43F5E"], // Pink to red
  ["#10B981", "#3B82F6"], // Green to blue
  ["#F59E0B", "#EC4899"], // Yellow to pink
];

// Animation keyframes moved to global CSS (see below)

export default function TeamHighlight() {
  // Generate orbs data once on mount
  const orbs = useMemo(() => 
    Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      size: 8 + Math.random() * 16,
      x: 10 + Math.random() * 80,
      y: 10 + Math.random() * 80,
      colors: COLOR_SETS[Math.floor(Math.random() * COLOR_SETS.length)],
      duration: 5 + Math.random() * 10,
      delay: Math.random() * 5,
    })),
  []);

  return (
    <section className="py-12 bg-gradient-to-b from-zinc-900 to-black text-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
          A Collective of 10+ Creators
        </h2>
        <p className="text-zinc-400 mb-8 text-sm md:text-base max-w-2xl mx-auto">
          A distributed team of designers, developers, and dreamers building the future.
        </p>
        
        <div className="relative w-full max-w-md mx-auto h-64 mb-8">
          {orbs.map(({ id, size, x, y, colors, duration, delay }) => (
            <GradientOrb
              key={id}
              size={size}
              colors={colors}
              style={{
                left: `${x}%`,
                top: `${y}%`,
                animation: `float ${duration}s ease-in-out ${delay}s infinite`,
              }}
            />
          ))}
        </div>
      </div>
      
      <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-10px) translateX(5px); }
          50% { transform: translateY(0) translateX(10px); }
          75% { transform: translateY(10px) translateX(5px); }
        }
        @media (prefers-reduced-motion: reduce) {
          * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
}
