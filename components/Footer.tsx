"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { PRODUCT_LINKS } from "../lib/productLinks";

export default function Footer() {
  const pathname = usePathname();
  const isSuperior = pathname === "/superior";

  return (
    <footer
      className={
        isSuperior
          ? "border-t border-cyan-400/15 bg-[#03040a] px-6 py-8"
          : "border-t border-slate-200 bg-white/80 px-6 py-8 backdrop-blur"
      }
    >
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-sm sm:flex-row ${
          isSuperior ? "text-cyan-100/70" : "text-slate-500"
        }`}
      >
        <span>Bonelli Labs</span>
        <a
          href={PRODUCT_LINKS.githubProfile}
          target="_blank"
          rel="noopener noreferrer"
          className={isSuperior ? "hover:text-white" : "hover:text-slate-950"}
        >
          GitHub
        </a>
      </div>
    </footer>
  );
}
