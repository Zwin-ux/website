import Link from "next/link";
import { PRODUCT_LINKS } from "../lib/productLinks";

export default function Home() {
  return (
    <div className="homepage-shell">
      <section className="homepage-hero mx-auto flex min-h-[calc(100svh-5rem)] max-w-[76rem] flex-col items-center justify-center px-6 py-16 sm:py-20">
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
            <span className="homepage-lockup-name homepage-lockup-name-left">
              Synergy
            </span>
            <span className="homepage-lockup-join" aria-hidden>
              <span className="homepage-lockup-join-halo" />
              <span className="homepage-lockup-join-glyph">+</span>
            </span>
            <span className="homepage-lockup-name homepage-lockup-name-right">
              Superior
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
              <Link href="/superior" className="product-card superior-card group">
                <div className="product-card-body superior-card-body flex h-full flex-col gap-10">
                  <img
                    src="/logos/superior.svg"
                    alt="Superior pixel logo"
                    className="superior-mark h-20 w-auto"
                  />
                  <div className="product-card-copy space-y-3">
                    <p className="product-card-path superior-card-path">
                      /superior
                    </p>
                    <h2 className="pixel-title superior-card-title">
                      Superior
                    </h2>
                  </div>
                  <div className="superior-card-sigils" aria-hidden>
                    <span />
                    <span />
                    <span />
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
