import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-1 items-center justify-center px-6 py-24">
      <div className="rounded-[2rem] border border-slate-200 bg-white/85 px-10 py-12 text-center shadow-[0_20px_80px_rgba(15,23,42,0.08)] backdrop-blur">
        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.28em] text-slate-400">
          404
        </p>
        <h1 className="mb-4 text-3xl font-semibold tracking-tight text-slate-950">
          Page not found
        </h1>
        <p className="mb-6 max-w-sm text-sm leading-6 text-slate-600">
          Bonelli Labs only has two product pages right now.
        </p>
        <Link
          href="/"
          className="inline-flex items-center rounded-full bg-slate-950 px-5 py-3 text-sm font-medium text-white hover:-translate-y-0.5"
        >
          Back to home
        </Link>
      </div>
    </div>
  );
}
