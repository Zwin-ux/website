import React from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 z-50 shadow-sm">
      <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <span className="font-bold text-xl tracking-wide text-white">Bonelli Labs</span>
        <ul className="flex space-x-6">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-white hover:text-blue-400 transition-colors duration-200 font-medium"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
