import type { Metadata } from "next";
import Image from "next/image";

const features = [
  {
    title: "AI detection",
    description:
      "Flag generated passages quickly with lightweight document scoring.",
  },
  {
    title: "Structure analysis",
    description:
      "Break down patterns, pacing, and repeated constructions across a page.",
  },
  {
    title: "Script fingerprinting",
    description:
      "Track recurring signatures and compare suspicious copy at a glance.",
  },
  {
    title: "Browser integration",
    description:
      "Surface findings inside Chrome without disrupting the reading flow.",
  },
];

export const metadata: Metadata = {
  title: "Synergy",
  description:
    "Synergy by Bonelli Labs brings ScriptLens AI script detection into a clean browser workflow.",
};

export default function SynergyPage() {
  return (
    <div className="synergy-page">
      <section className="mx-auto max-w-6xl px-6 py-20 sm:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-8">
            <Image
              src="/logos/scriptlens.svg"
              alt="ScriptLens logo"
              width={340}
              height={112}
              priority
              className="h-14 w-auto sm:h-16"
            />
            <div className="space-y-5">
              <h1 className="max-w-xl text-5xl font-semibold tracking-tight text-slate-950 sm:text-6xl">
                Understand where scripts come from.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-600">
                Detect AI generated content instantly with a browser-native tool
                that keeps the interface clean, fast, and readable.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="https://github.com/Zwin-ux"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_50px_rgba(47,124,246,0.28)] hover:-translate-y-0.5 hover:bg-blue-500"
              >
                Install Chrome Extension
              </a>
              <div className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm text-slate-600">
                Browser-native analysis with instant inline checks
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-white/80 bg-white/90 p-6 shadow-[0_30px_120px_rgba(15,23,42,0.12)] backdrop-blur">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-5 shadow-inner shadow-slate-200/70">
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-slate-400">
                    Live document
                  </p>
                  <h2 className="mt-2 text-lg font-semibold text-slate-950">
                    ScriptLens panel
                  </h2>
                </div>
                <div className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-medium text-emerald-700">
                  Active
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-white p-4 shadow-sm shadow-slate-200/80">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    AI confidence
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">
                    82%
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Pattern alignment with known generated phrasing.
                  </p>
                </div>
                <div className="rounded-2xl bg-white p-4 shadow-sm shadow-slate-200/80">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-400">
                    Source trail
                  </p>
                  <p className="mt-2 text-3xl font-semibold text-slate-950">
                    4 hits
                  </p>
                  <p className="mt-2 text-sm text-slate-500">
                    Matching structures mapped across indexed samples.
                  </p>
                </div>
              </div>

              <div className="mt-4 rounded-2xl bg-white p-4 shadow-sm shadow-slate-200/80">
                <div className="flex items-center justify-between text-sm text-slate-500">
                  <span>Fingerprint trace</span>
                  <span>Browser overlay ready</span>
                </div>
                <div className="mt-4 h-28 rounded-2xl bg-[linear-gradient(180deg,#eff6ff_0%,#dbeafe_100%)] p-4">
                  <div className="flex h-full items-end gap-2">
                    {[24, 44, 34, 62, 48, 74, 56, 80].map((height) => (
                      <div
                        key={height}
                        className="flex-1 rounded-t-full bg-blue-500/80"
                        style={{ height: `${height}%` }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="rounded-[2.5rem] border border-slate-200 bg-[#f8fafc] p-8 shadow-[0_24px_80px_rgba(15,23,42,0.08)] sm:p-10">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-blue-600">
              Features
            </p>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950 sm:text-4xl">
              Clean analysis without leaving the page.
            </h2>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((feature) => (
              <article
                key={feature.title}
                className="rounded-[1.75rem] border border-white bg-white p-6 shadow-[0_18px_50px_rgba(15,23,42,0.06)]"
              >
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600">
                  {feature.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
