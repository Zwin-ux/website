import Link from "next/link";

export default function Home() {
  return (
    <div className="homepage-shell">
      <section className="mx-auto flex min-h-[calc(100svh-5rem)] max-w-6xl flex-col items-center justify-center px-6 py-20">
        <div className="max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-slate-500">
            Bonelli Labs
          </p>
          <h1 className="mt-6 text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
            Two tools.
          </h1>
          <p className="mt-5 text-base text-slate-600 sm:text-lg">
            One clean interface for AI script detection. One neon console for
            market scanning.
          </p>
        </div>

        <div className="mt-14 grid w-full gap-6 lg:grid-cols-2">
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

          <Link href="/superior" className="product-card superior-card group">
            <div className="relative flex h-full flex-col gap-10">
              <img
                src="/logos/superior.svg"
                alt="Superior pixel logo"
                className="h-20 w-auto"
              />
              <div className="space-y-3">
                <p className="pixel-label text-sm uppercase tracking-[0.32em] text-cyan-300">
                  Superior
                </p>
                <h2 className="pixel-title text-3xl text-white">
                  Market Scanner
                </h2>
                <p className="text-base text-cyan-100/78">Arbitrage Bot</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
}
