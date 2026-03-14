import type { Metadata } from "next";
import Image from "next/image";
import { PRODUCT_LINKS } from "../../lib/productLinks";

const signals = [
  "STATUS: ONLINE",
  "SIGNALS FOUND: 3",
  "ARBITRAGE EDGE DETECTED",
];

export const metadata: Metadata = {
  title: "Superior",
  description:
    "Superior by Bonelli Labs is a retro-styled market scanner for arbitrage opportunities.",
};

export default function SuperiorPage() {
  return (
    <div className="superior-page">
      <section className="relative mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8 text-[#e8f9ff]">
            <Image
              src="/logos/superior.svg"
              alt="Superior logo"
              width={360}
              height={130}
              priority
              className="h-14 w-auto sm:h-16"
            />
            <div className="space-y-5">
              <h1 className="font-pixel text-4xl leading-tight text-white sm:text-5xl">
                Superior
              </h1>
              <p className="max-w-xl text-base leading-8 text-cyan-100/78">
                Track arbitrage opportunities inside a neon interface built
                like a live arcade console.
              </p>
            </div>
            <a
              href={PRODUCT_LINKS.superiorRepo}
              target="_blank"
              rel="noreferrer"
              className="retro-button"
            >
              View Superior on GitHub
            </a>

            <div className="grid gap-4 sm:grid-cols-3">
              {signals.map((signal) => (
                <div key={signal} className="retro-chip">
                  {signal}
                </div>
              ))}
            </div>
          </div>

          <div className="retro-panel">
            <div className="retro-panel-header">SUPERIOR</div>
            <pre className="arcade-frame">
{`+------------------------------+
| SUPERIOR                     |
|------------------------------|
| STATUS: ONLINE               |
| SIGNALS FOUND: 3             |
| ARBITRAGE EDGE DETECTED      |
+------------------------------+`}
            </pre>
            <div className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="retro-stat">
                <span>PAIR_01</span>
                <strong>+2.4%</strong>
              </div>
              <div className="retro-stat">
                <span>PAIR_02</span>
                <strong>+1.8%</strong>
              </div>
              <div className="retro-stat">
                <span>PAIR_03</span>
                <strong>+1.3%</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="retro-panel">
            <div className="retro-panel-header">SYSTEM STATE</div>
            <div className="space-y-4 text-sm leading-7 text-cyan-100/78">
              <p>
                Multi-market monitoring with high-contrast alerts, square UI
                frames, and a visual language built around the logo&apos;s arcade
                energy.
              </p>
              <div className="space-y-3">
                <div className="retro-row">
                  <span>Latency</span>
                  <span>12 ms</span>
                </div>
                <div className="retro-row">
                  <span>Spread Watch</span>
                  <span>Active</span>
                </div>
                <div className="retro-row">
                  <span>Scanner Mode</span>
                  <span>Continuous</span>
                </div>
              </div>
            </div>
          </div>

          <div className="retro-panel">
            <div className="retro-panel-header">ARCADE PANELS</div>
            <div className="grid gap-4 md:grid-cols-2">
              <div className="retro-card">
                <p className="font-pixel text-[0.65rem] uppercase tracking-[0.18em] text-fuchsia-300">
                  Neon Alerts
                </p>
                <p className="mt-4 text-sm leading-7 text-cyan-100/78">
                  Flash high-confidence signals with crisp square edges and a
                  deliberate pixel rhythm.
                </p>
              </div>
              <div className="retro-card">
                <p className="font-pixel text-[0.65rem] uppercase tracking-[0.18em] text-emerald-300">
                  Market Sweep
                </p>
                <p className="mt-4 text-sm leading-7 text-cyan-100/78">
                  Monitor multiple books, compare edges, and keep the scanner
                  readable under load.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
