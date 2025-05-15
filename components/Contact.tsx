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
    <section id="contact" className="py-16 px-6 bg-white text-black fade-in-section">
      <div className="max-w-xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
        <p className="mb-4 text-lg font-medium">Email us at:</p>
        <a
          href={`mailto:${EMAIL}`}
          className="text-blue-600 underline text-lg font-mono break-all"
        >
          {EMAIL}
        </a>
        <div className="mt-6 flex flex-col items-center">
          <button
            className="flex items-center gap-2 bg-black text-white px-5 py-2 rounded-lg font-semibold shadow hover:bg-gray-900 transition"
            onClick={handleCopy}
          >
            <span role="img" aria-label="Copy">📋</span> {copied ? "Copied!" : "Copy Email"}
          </button>
        </div>
      </div>
    </section>
  );
}
