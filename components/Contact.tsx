import React, { useRef, useState } from "react";

const EMAIL = "groupbonelli@gmail.com";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(EMAIL);
    setCopied(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-8 px-4 bg-black text-white fade-in-section border-t border-zinc-800">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">Contact</h2>
        <p className="mb-2 text-lg font-medium">Email us:</p>
        <a
          href={`mailto:${EMAIL}`}
          className="text-blue-400 underline text-lg font-mono break-all"
        >
          {EMAIL}
        </a>
        <div className="mt-4 flex flex-col items-center">
          <button
            className="bg-zinc-900 text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-zinc-800 transition border border-zinc-700"
            onClick={handleCopy}
          >
            {copied ? "Copied!" : "Copy Email"}
          </button>
        </div>
      </div>
    </section>
  );
}
