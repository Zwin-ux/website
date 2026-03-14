import Link from "next/link";
import { PRODUCT_LINKS } from "../lib/productLinks";

export default function Home() {
  return (
    <div className="homepage-shell">
      <section className="homepage-hero mx-auto flex min-h-[calc(100svh-5rem)] max-w-[76rem] flex-col items-center justify-center px-6 py-16 sm:py-20">
        <div
          className="homepage-cursor-zone homepage-cursor-zone-left"
          aria-hidden
        />
        <div
          className="homepage-cursor-zone homepage-cursor-zone-right"
          aria-hidden
        />
        <div className="homepage-atmosphere" aria-hidden>
          <span className="homepage-aura homepage-aura-left" />
          <span className="homepage-aura homepage-aura-right" />
          <span className="homepage-memphis-orbit" />
          <span className="homepage-memphis-tiles" />
          <span className="homepage-memphis-arch" />
          <span className="homepage-memphis-beam" />
          <span className="homepage-memphis-dots" />
          <span className="homepage-memphis-triangle" />
          <span className="homepage-memphis-squiggle" />
          <span className="homepage-glitch-frame" />
          <span className="homepage-glitch-ladder" />
          <span className="homepage-glitch-bands" />
          <span className="homepage-glitch-column" />
          <span className="homepage-glitch-noise" />
        </div>
        <div className="homepage-seam" aria-hidden />

        <div className="homepage-intro">
          <div className="homepage-lockup" aria-label="Synergy and Superior">
            <span className="homepage-lockup-panel homepage-lockup-panel-left">
              <span className="homepage-lockup-name homepage-lockup-name-left">
                Synergy
              </span>
            </span>
            <span className="homepage-lockup-join" aria-hidden>
              <span className="homepage-lockup-join-halo" />
              <span className="homepage-lockup-join-glyph">+</span>
            </span>
            <span className="homepage-lockup-panel homepage-lockup-panel-right">
              <img
                src="/logos/superior.svg"
                alt="Superior logo"
                className="homepage-superior-lockup-mark"
              />
            </span>
          </div>
        </div>

        <div className="homepage-showcase mt-12 w-full">
          <div className="homepage-showcase-grid">
            <article className="product-shell product-shell-light">
              <Link href="/synergy" className="product-card synergy-card group">
                <div className="product-card-body synergy-card-body flex h-full flex-col justify-between gap-10">
                  <img
                    src="/logos/scriptlens.svg"
                    alt="Synergy logo"
                    className="synergy-mark h-20 w-auto"
                  />
                  <div className="product-card-copy space-y-3">
                    <p className="product-card-path synergy-card-path">
                      /synergy
                    </p>
                    <h2 className="synergy-card-title">Synergy</h2>
                  </div>
                  <div className="synergy-card-figure" aria-hidden>
                    <span className="synergy-figure-browser" />
                    <span className="synergy-figure-document" />
                    <span className="synergy-figure-lens" />
                    <span className="synergy-figure-grid" />
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
              <a
                href={PRODUCT_LINKS.superiorApp}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Superior live app"
                className="product-card superior-card group"
              >
                <div className="product-card-body superior-card-body flex h-full flex-col justify-between gap-8">
                  <img
                    src="/logos/superior.svg"
                    alt="Superior pixel logo"
                    className="superior-mark superior-mark-large h-24 w-auto"
                  />
                  <div className="product-card-copy superior-card-copy">
                    <p className="product-card-path superior-card-path">
                      Live app
                    </p>
                  </div>

                  <div className="superior-card-machine" aria-hidden>
                    <div className="superior-card-machine-header">
                      <span className="superior-card-machine-light superior-card-machine-light-cyan" />
                      <span className="superior-card-machine-marquee">
                        Market Scan Active
                      </span>
                      <span className="superior-card-machine-light superior-card-machine-light-magenta" />
                    </div>

                    <div className="superior-card-machine-screen">
                      <div className="superior-card-machine-readouts">
                        <span>Signals: 3</span>
                        <span>Spread: 4.2%</span>
                        <span>Markets: 17</span>
                      </div>

                      <div className="superior-card-radar">
                        <span className="superior-card-radar-ring superior-card-radar-ring-a" />
                        <span className="superior-card-radar-ring superior-card-radar-ring-b" />
                        <span className="superior-card-radar-sweep" />
                        <span className="superior-card-radar-dot superior-card-radar-dot-a" />
                        <span className="superior-card-radar-dot superior-card-radar-dot-b" />
                        <span className="superior-card-radar-dot superior-card-radar-dot-c" />
                      </div>
                    </div>

                    <div className="superior-card-console">
                      <span className="superior-card-console-dpad" aria-hidden>
                        <span className="superior-card-console-dpad-arm superior-card-console-dpad-arm-horizontal" />
                        <span className="superior-card-console-dpad-arm superior-card-console-dpad-arm-vertical" />
                        <span className="superior-card-console-dpad-core" />
                      </span>
                      <span className="superior-card-console-status">
                        1UP READY
                      </span>
                      <span
                        className="superior-card-console-buttons"
                        aria-hidden
                      >
                        <span className="superior-card-console-button superior-card-console-button-b" />
                        <span className="superior-card-console-button superior-card-console-button-a" />
                      </span>
                    </div>
                  </div>
                </div>
              </a>
              <div className="product-link-row">
                <span className="product-hint product-hint-dark">Live app</span>
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
