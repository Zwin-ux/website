export default function NotFound() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6 py-12">
      <div className="max-w-3xl w-full border border-white/10 bg-zinc-900/70 backdrop-blur rounded-2xl p-8 md:p-10 shadow-2xl">
        <div className="text-center space-y-4">
          <p className="text-xs tracking-[0.3em] text-white/60">
            404 - ON HIATUS
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold">
            Currently working on other projects
          </h1>
          <p className="text-white/70 text-base md:text-lg leading-relaxed">
            This site is on hiatus. Please check back later.
          </p>
        </div>
      </div>
    </div>
  );
}
