export interface CardPosition {
  x: number;
  y: number;
}

const CARD_WIDTH = 340;
const CARD_HEIGHT = 260;
const GAP = 32;
const COLS = 3;

// Deterministic pseudo-random jitter based on index
function jitter(index: number, seed: number): number {
  const x = Math.sin(index * 9301 + seed * 49297) * 49297;
  return (x - Math.floor(x)) * 2 - 1; // -1 to 1
}

export function computeInitialPositions(count: number): CardPosition[] {
  const positions: CardPosition[] = [];

  for (let i = 0; i < count; i++) {
    const col = i % COLS;
    const row = Math.floor(i / COLS);

    const baseX = col * (CARD_WIDTH + GAP) + 40;
    const baseY = row * (CARD_HEIGHT + GAP) + 40;

    // Add subtle jitter (up to +/- 12px) for organic feel
    const jx = jitter(i, 1) * 12;
    const jy = jitter(i, 2) * 12;

    positions.push({
      x: Math.round(baseX + jx),
      y: Math.round(baseY + jy),
    });
  }

  return positions;
}

export { CARD_WIDTH, CARD_HEIGHT };
