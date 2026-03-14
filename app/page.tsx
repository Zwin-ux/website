import Link from "next/link";
import { PRODUCT_LINKS } from "../lib/productLinks";

export default function Home() {
  return (
    <div className="homepage-shell">
      <section className="homepage-hero mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl flex-col items-center justify-center px-6 py-16 sm:py-20">
        <div className="homepage-intro max-w-3xl text-center">
          <p className="homepage-kicker text-xs font-semibold uppercase tracking-[0.4em]">
            Bonelli Labs
          </p>
          <h1 className="homepage-title mt-6 text-5xl font-semibold tracking-tight sm:text-6xl">
            Two tools. One split view.
          </h1>
          <p className="homepage-summary mt-5 text-base sm:text-lg">
            ScriptLens keeps AI script detection clean and browser-native.
            Arbitrage Engine turns market scanning into a live neon console.
          </p>
          <div className="homepage-contrast-note mt-8">
            <span className="contrast-chip contrast-chip-light">ScriptLens</span>
            <span className="contrast-copy">
              Clean browser workflow on one side. Live arbitrage scanner on the
              other.
            </span>
            <span className="contrast-chip contrast-chip-dark">
              Arbitrage Engine
            </span>
          </div>
        </div>

        <div className="homepage-showcase mt-10 w-full">
          <div className="homepage-showcase-grid">
            <article className="product-shell product-shell-light">
              <Link href="/synergy" className="product-card synergy-card group">
                <div className="flex flex-col gap-10">
                  <img
                    src="/logos/scriptlens.svg"
                    alt="ScriptLens logo"
                    className="h-20 w-auto"
                  />
                  <div className="space-y-3">
                    <p className="text-sm font-semibold uppercase tracking-[0.32em] text-blue-600">
                      Synergy
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight text-slate-950">
                      AI Script Detection
                    </h2>
                    <p className="text-base text-slate-600">Chrome Extension</p>
                  </div>
                </div>
              </Link>
              <div className="product-link-row">
                <span className="product-hint product-hint-light">Product page</span>
                <a
                  href={PRODUCT_LINKS.synergyRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="product-repo-link product-repo-link-light"
                >
                  GitHub repo
                </a>
              </div>
            </article>

            <article className="product-shell product-shell-dark">
              <Link href="/superior" className="product-card superior-card group">
                <div className="relative flex h-full flex-col gap-10">
                  <img
                    src="/logos/superior.svg"
                    alt="Arbitrage Engine pixel logo"
                    className="h-20 w-auto"
                  />
                  <div className="space-y-3">
                    <p className="pixel-label text-sm uppercase tracking-[0.32em] text-cyan-300">
                      Arbitrage Engine
                    </p>
                    <h2 className="pixel-title text-3xl text-white">
                      Live Market Scanner
                    </h2>
                    <p className="text-base text-cyan-100/78">
                      Neon arbitrage tracking
                    </p>
                  </div>
                </div>
              </Link>
              <div className="product-link-row">
                <span className="product-hint product-hint-dark">Product page</span>
                <a
                  href={PRODUCT_LINKS.superiorRepo}
                  target="_blank"
                  rel="noreferrer"
                  className="product-repo-link product-repo-link-dark"
                >
                  GitHub repo
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </div>
  );
}
