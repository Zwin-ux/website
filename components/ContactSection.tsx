"use client";

import React, { useState } from "react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "",
    type: "",
    description: "",
    amount: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(
      `Assisted Funding Request — ${form.name}`
    );
    const body = encodeURIComponent(
      `Name: ${form.name}\nType: ${form.type}\nAmount needed: ${form.amount}\nContact email: ${form.email}\n\n${form.description}`
    );
    window.location.href = `mailto:mzwin3545@gmail.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <section className="py-16 px-6 border-t border-zinc-800">
      <div className="mx-auto max-w-4xl">
        <h2 className="text-2xl font-bold mb-2">Assisted Funding</h2>
        <p className="text-zinc-400 mb-8 max-w-xl">
          We help independent artists and creators get off the ground. If you
          need funding, tools, or technical support for a project, tell us about
          it below.
        </p>

        {submitted ? (
          <div className="border border-zinc-800 rounded-lg p-6 text-center">
            <p className="text-zinc-300">
              Your email client should have opened with the request. If not,
              reach out to us directly and we&apos;ll get back to you.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-5 max-w-lg">
            <div>
              <label htmlFor="name" className="block text-sm text-zinc-400 mb-1">
                Your name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label htmlFor="type" className="block text-sm text-zinc-400 mb-1">
                What kind of creator are you?
              </label>
              <select
                id="type"
                name="type"
                required
                value={form.type}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:border-accent"
              >
                <option value="">Select one</option>
                <option value="Artist">Artist</option>
                <option value="Musician">Musician</option>
                <option value="Game Developer">Game Developer</option>
                <option value="Software Developer">Software Developer</option>
                <option value="Content Creator">Content Creator</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="description"
                className="block text-sm text-zinc-400 mb-1"
              >
                Tell us about your project and what you need help with
              </label>
              <textarea
                id="description"
                name="description"
                required
                rows={4}
                value={form.description}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:border-accent resize-y"
              />
            </div>

            <div>
              <label
                htmlFor="amount"
                className="block text-sm text-zinc-400 mb-1"
              >
                Estimated funding or support needed (optional)
              </label>
              <input
                id="amount"
                name="amount"
                type="text"
                value={form.amount}
                onChange={handleChange}
                placeholder="e.g. $500, hosting costs, design help"
                className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-foreground placeholder:text-zinc-600 focus:outline-none focus:border-accent"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm text-zinc-400 mb-1"
              >
                Your email (so we can follow up)
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="w-full bg-zinc-900 border border-zinc-800 rounded px-3 py-2 text-sm text-foreground focus:outline-none focus:border-accent"
              />
            </div>

            <button
              type="submit"
              className="px-5 py-2 bg-accent text-white hover:bg-blue-600 transition-colors rounded text-sm"
            >
              Submit Request
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
