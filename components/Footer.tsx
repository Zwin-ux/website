import { PRODUCT_LINKS } from "../lib/productLinks";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/80 px-6 py-8 backdrop-blur">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm text-slate-500 sm:flex-row">
        <span>Bonelli Labs</span>
        <a
          href={PRODUCT_LINKS.githubProfile}
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-slate-950"
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
