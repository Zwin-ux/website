import type { Metadata } from "next";
import Image from "next/image";
import { PRODUCT_LINKS } from "../../lib/productLinks";

const scannerStats = [
  { label: "Signals Found", value: "3" },
  { label: "Spread Detected", value: "4.2%" },
  { label: "Markets Monitored", value: "17" },
] as const;

const features = [
  {
    title: "Scan Engine",
    body: "Real-time market scanning inside a focused arcade-style interface.",
  },
  {
    title: "Paper Mode",
    body: "Simulate strategies safely before committing to a live move.",
  },
  {
    title: "Signal Detection",
    body: "Spot arbitrage windows quickly when price gaps open across books.",
  },
] as const;

const steps = [
  {
    title: "Watch Books",
    body: "Sweep active markets and keep the scan running in the background.",
  },
  {
    title: "Mark Gaps",
    body: "Highlight spreads the moment an opportunity starts to form.",
  },
  {
    title: "Move Fast",
    body: "Act with a clean readout instead of digging through cluttered panels.",
  },
] as const;

const superiorDownloadHref = `${PRODUCT_LINKS.superiorRepo}/archive/refs/heads/main.zip`;

export const metadata: Metadata = {
  title: "Superior",
  description:
    "Superior by Bonelli Labs is an arcade-styled market scanner built for arbitrage detection.",
};

export default function SuperiorPage() {
  return (
    <div className="superior-page">
      <section className="superior-hero mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[0.96fr_1.04fr]">
          <div className="superior-hero-copy">
            <div className="superior-logo-wrap">
              <Image
                src="/logos/superior.svg"
                alt="Superior logo"
                width={420}
                height={152}
                priority
                className="h-16 w-auto sm:h-20"
              />
            </div>

            <div className="space-y-5">
              <p className="superior-kicker">Prediction Market Arbitrage</p>
              <h1 className="font-pixel superior-page-title">SUPERIOR</h1>
              <p className="superior-page-subtitle">Arcade Market Scanner</p>
              <p className="superior-page-copy">
                Scan markets.
                <br />
                Detect arbitrage.
                <br />
                Act faster.
              </p>
            </div>

            <div className="superior-cta-row">
              <a
                href={superiorDownloadHref}
                className="arcade-action arcade-action-primary"
              >
                Download Superior
              </a>
              <a
                href={PRODUCT_LINKS.superiorRepo}
                target="_blank"
                rel="noreferrer"
                className="arcade-action arcade-action-secondary"
              >
                View GitHub
              </a>
            </div>
          </div>

          <div className="superior-cabinet">
            <div className="superior-cabinet-top">
              <span className="cabinet-light cabinet-light-cyan" />
              <span className="cabinet-marquee">MARKET SCAN ACTIVE</span>
              <span className="cabinet-light cabinet-light-magenta" />
            </div>

            <div className="superior-cabinet-screen">
              <div className="scanner-readouts">
                {scannerStats.map((stat) => (
                  <div key={stat.label} className="scanner-readout">
                    <span>{stat.label}</span>
                    <strong>{stat.value}</strong>
                  </div>
                ))}
              </div>

              <div className="scanner-stage">
                <div className="scanner-radar">
                  <span className="scanner-ring scanner-ring-outer" />
                  <span className="scanner-ring scanner-ring-inner" />
                  <span className="scanner-sweep" />
                  <span className="scanner-dot scanner-dot-a" />
                  <span className="scanner-dot scanner-dot-b" />
                  <span className="scanner-dot scanner-dot-c" />
                </div>

                <div className="scanner-signal-board">
                  <div className="scanner-signal-grid" />
                  <div className="scanner-signal-line scanner-signal-line-a" />
                  <div className="scanner-signal-line scanner-signal-line-b" />
                  <div className="scanner-signal-bars">
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                  </div>
                </div>
              </div>

              <div className="scanner-ticker">
                <span>MARKET SWEEP</span>
                <span>EDGE LOCKED</span>
                <span>READY</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="superior-section mx-auto max-w-6xl px-6 pb-10">
        <div className="superior-section-head">
          <p className="superior-section-kicker">Scanner Visualization</p>
          <h2 className="font-pixel superior-section-title">Arcade Display</h2>
        </div>

        <div className="superior-display-frame">
          <div className="superior-display-header">
            <span>MARKET SCAN ACTIVE</span>
            <span>Signal Channel 03</span>
          </div>

          <div className="superior-display-grid">
            <div className="superior-display-panel superior-display-panel-primary">
              <div className="display-panel-label">Signal Radar</div>
              <div className="display-radar-map">
                <span className="display-radar-ring display-radar-ring-a" />
                <span className="display-radar-ring display-radar-ring-b" />
                <span className="display-radar-sweep" />
                <span className="display-radar-point display-radar-point-a" />
                <span className="display-radar-point display-radar-point-b" />
                <span className="display-radar-point display-radar-point-c" />
              </div>
            </div>

            <div className="superior-display-panel superior-display-panel-secondary">
              <div className="display-panel-label">Signal Feed</div>
              <div className="display-feed-list">
                <div className="display-feed-row">
                  <span>Market A / Market B</span>
                  <strong>+4.2%</strong>
                </div>
                <div className="display-feed-row">
                  <span>Market C / Market D</span>
                  <strong>+2.8%</strong>
                </div>
                <div className="display-feed-row">
                  <span>Market E / Market F</span>
                  <strong>+1.9%</strong>
                </div>
              </div>
              <div className="display-graph">
                <span />
                <span />
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="superior-section mx-auto max-w-6xl px-6 py-10">
        <div className="superior-section-head">
          <p className="superior-section-kicker">Features</p>
          <h2 className="font-pixel superior-section-title">Arcade Panels</h2>
        </div>

        <div className="superior-feature-grid">
          {features.map((feature) => (
            <article key={feature.title} className="superior-feature-card">
              <p className="superior-feature-kicker">{feature.title}</p>
              <p className="superior-feature-body">{feature.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="superior-section mx-auto max-w-6xl px-6 py-10">
        <div className="superior-section-head">
          <p className="superior-section-kicker">How It Works</p>
          <h2 className="font-pixel superior-section-title">Three Moves</h2>
        </div>

        <div className="superior-steps-grid">
          {steps.map((step, index) => (
            <article key={step.title} className="superior-step-card">
              <span className="superior-step-number">{`0${index + 1}`}</span>
              <h3 className="superior-step-title">{step.title}</h3>
              <p className="superior-step-body">{step.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="superior-download mx-auto max-w-5xl px-6 pb-24 pt-12">
        <div className="superior-download-frame">
          <p className="superior-section-kicker">Download</p>
          <h2 className="font-pixel superior-section-title">Start The Scan</h2>
          <p className="superior-download-copy">
            Superior keeps the market readout tight, fast, and focused.
          </p>
          <div className="superior-cta-row justify-center">
            <a
              href={superiorDownloadHref}
              className="arcade-action arcade-action-primary"
            >
              Download Superior
            </a>
            <a
              href={PRODUCT_LINKS.superiorRepo}
              target="_blank"
              rel="noreferrer"
              className="arcade-action arcade-action-secondary"
            >
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
