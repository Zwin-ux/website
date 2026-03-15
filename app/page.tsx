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
              <a
                href={PRODUCT_LINKS.synergyApp}
                target="_blank"
                rel="noreferrer"
                aria-label="Open Synergy live app"
                className="product-card synergy-card group"
              >
                <div className="product-card-body synergy-card-body flex h-full flex-col justify-between gap-10">
                  <img
                    src="/logos/scriptlens.svg"
                    alt="Synergy logo"
                    className="synergy-mark h-20 w-auto"
                  />
                  <div className="product-card-copy space-y-3">
                    <p className="product-card-path synergy-card-path">
                      Live app
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
              </a>
              <div className="product-link-row">
                <span className="product-hint product-hint-light">Live app</span>
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
                <div className="product-card-body superior-card-body">
                  <div className="superior-card-headerband" aria-hidden>
                    <div className="superior-card-brand">
                      <span className="superior-card-brand-icon">
                        <span className="superior-card-brand-orb superior-card-brand-orb-outer" />
                        <span className="superior-card-brand-orb superior-card-brand-orb-middle" />
                        <span className="superior-card-brand-orb superior-card-brand-orb-core" />
                      </span>
                      <span className="superior-card-brand-copy">
                        <span className="superior-card-brand-name">Superior</span>
                        <span className="superior-card-brand-tag">
                          Paper-first bot cabinet
                        </span>
                      </span>
                    </div>
                    <div className="superior-card-nav">
                      <span>Features</span>
                      <span>Product</span>
                      <span>Docs</span>
                      <span>Download</span>
                    </div>
                  </div>

                  <div className="superior-card-stage">
                    <div className="superior-card-artframe" aria-hidden>
                      <p className="superior-card-art-label">
                        Superior cartridge art
                      </p>
                      <div className="superior-card-art-window">
                        <img
                          src="/logos/superior.svg"
                          alt="Superior pixel logo"
                          className="superior-mark superior-mark-large"
                        />
                      </div>
                    </div>

                    <div className="product-card-copy superior-card-copy">
                      <p className="superior-card-kicker">
                        Open-source prediction-market desktop app
                      </p>
                      <h2 className="superior-card-title">
                        <span>Equip</span>
                        <span>Polymarket.</span>
                      </h2>
                      <p className="superior-card-subtitle">
                        Record books. Build a paper score.
                      </p>
                    </div>

                    <div className="superior-card-scoreboard" aria-hidden>
                      <div className="superior-card-score-item">
                        <span className="superior-card-score-label">
                          Paper score
                        </span>
                        <strong>Active</strong>
                      </div>
                      <div className="superior-card-score-item">
                        <span className="superior-card-score-label">
                          Live score
                        </span>
                        <strong>Reserved</strong>
                      </div>
                      <div className="superior-card-score-item">
                        <span className="superior-card-score-label">Loadout</span>
                        <strong>Equipped</strong>
                      </div>
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
