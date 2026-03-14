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
            Synergy + Superior
          </h1>
          <div className="homepage-contrast-note mt-8">
            <span className="contrast-chip contrast-chip-light">Synergy</span>
            <span className="contrast-chip contrast-chip-dark">Superior</span>
          </div>
        </div>

        <div className="homepage-showcase mt-10 w-full">
          <div className="homepage-showcase-grid">
            <article className="product-shell product-shell-light">
              <Link href="/synergy" className="product-card synergy-card group">
                <div className="flex flex-col gap-10">
                  <img
                    src="/logos/scriptlens.svg"
                    alt="Synergy logo"
                    className="synergy-mark h-20 w-auto"
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
                    alt="Superior pixel logo"
                    className="superior-mark h-20 w-auto"
                  />
                  <div className="space-y-3">
                    <p className="pixel-label text-sm uppercase tracking-[0.32em] text-cyan-300">
                      Superior
                    </p>
                    <h2 className="pixel-title text-3xl text-white">
                      8-Bit Market Scanner
                    </h2>
                    <p className="text-base text-cyan-100/78">
                      Arbitrage tracking
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
