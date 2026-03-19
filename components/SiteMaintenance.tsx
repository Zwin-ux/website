type SiteMaintenanceProps = {
  label?: string;
};

export default function SiteMaintenance({
  label = "Bonelli Labs",
}: SiteMaintenanceProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#060b16] px-6 py-16 text-white">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.16),transparent_26%),radial-gradient(circle_at_80%_30%,rgba(217,70,239,0.14),transparent_22%),linear-gradient(180deg,#0a1020_0%,#060b16_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:100%_2.75rem,2.75rem_100%] opacity-40"
      />

      <div className="relative z-10 w-full max-w-2xl rounded-[2rem] border border-white/10 bg-white/[0.04] px-8 py-12 text-center shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-sm sm:px-12 sm:py-16">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
          {label}
        </p>
        <h1 className="text-4xl font-semibold tracking-[-0.06em] text-white sm:text-6xl">
          Currently working.
        </h1>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-slate-300 sm:text-base">
          The site is temporarily hidden while updates are in progress.
        </p>
      </div>
    </section>
  );
}
