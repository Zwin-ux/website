"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import CommissionCard from "../../components/CommissionCard";
import { commissions, Commission } from "../../lib/commissions";
import Link from "next/link";
import OrderForm, { OrderFormData } from "../../components/OrderForm";
import OrderSuccessModal from "../../components/OrderSuccessModal";
import Footer from "../../components/Footer";
import PageTransition from "../../components/PageTransition";
import ScrollToTop from "../../components/ScrollToTop";

const FILTERS = ["All", "Web", "Marketing", "Custom"] as const;
type FilterType = typeof FILTERS[number];

export default function CommissionsPage() {
  const [filter, setFilter] = useState<FilterType>("All");
  const [selectedCommission, setSelectedCommission] = useState<Commission | null>(null);
  const [showOrderForm, setShowOrderForm] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [lastOrderedService, setLastOrderedService] = useState("");

  const filteredCommissions =
    filter === "All"
      ? commissions
      : commissions.filter((c) => c.tag === filter);
      
  const handleOrderClick = (commission: Commission) => {
    setSelectedCommission(commission);
    setShowOrderForm(true);
  };
  
  const handleCancelOrder = () => {
    setShowOrderForm(false);
    setSelectedCommission(null);
  };
  
  const handleOrderSubmit = (formData: OrderFormData) => {
    if (selectedCommission) {
      // Prepare email content
      const subject = encodeURIComponent(`Commission Order: ${selectedCommission.title}`);
      const body = encodeURIComponent(
        `Hi Bonelli Labs,\n\n` +
        `I'd like to order the following commission:\n\n` +
        `Service: ${selectedCommission.title}\n` +
        `Price: ${formData.budget}\n` +
        `Timeline: ${formData.timeline}\n\n` +
        `Details: ${formData.details}\n\n` +
        `Name: ${formData.name}\n` +
        `Email: ${formData.email}\n\n` +
        `Looking forward to working with you!`
      );
      
      // Close order form and show success modal
      setShowOrderForm(false);
      setLastOrderedService(selectedCommission.title);
      setShowSuccessModal(true);
      
      // Open email client
      window.open(`mailto:groupbonelli@gmail.com?subject=${subject}&body=${body}`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans flex flex-col">
      <PageTransition>
        <main className="flex-1 py-20">
          {/* Back to Home Link */}
          <div className="w-full max-w-5xl mx-auto px-4 mb-8">
            <Link href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Header + Subnav */}
          <section className="w-full max-w-5xl mx-auto pb-6 px-4">
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-center">Commissions</h1>
            <p className="text-zinc-400 text-lg mb-8 max-w-2xl mx-auto text-center">
              Need a site, app, or creative system? Commission a project directly from Bonelli Labs.
            </p>
        {/* Sub-navigation */}
        <nav className="flex gap-3 mb-8 justify-center md:justify-start flex-wrap">
          {FILTERS.map((cat) => (
            <button
              key={cat}
              className={`px-4 py-1 rounded-full text-sm font-semibold border transition-all duration-150 select-none ${
                filter === cat
                  ? "bg-gradient-to-r from-purple-400 to-pink-600 text-white border-purple-500 shadow"
                  : "bg-zinc-900 text-zinc-300 border-zinc-800 hover:border-purple-400 hover:text-white"
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </nav>
      </section>

      {/* Cards Grid */}
      <section className="w-full max-w-5xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="contents"
        >
          {filteredCommissions.map((c) => (
            <CommissionCard
              key={c.title}
              {...c}
              onClick={() => handleOrderClick(c)}
            />
          ))}
        </motion.div>
      </section>

      {/* Order Form Modal */}
      <AnimatePresence>
        {showOrderForm && selectedCommission && (
          <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
            <OrderForm 
              commission={selectedCommission}
              onSubmit={handleOrderSubmit}
              onCancel={handleCancelOrder}
            />
          </div>
        )}
      </AnimatePresence>
      
      {/* Success Modal */}
      <OrderSuccessModal 
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
        serviceTitle={lastOrderedService}
      />

      {/* CTA Section */}
      <section className="w-full max-w-3xl mx-auto px-4 pb-24">
        <div className="bg-zinc-900 rounded-2xl p-8 flex flex-col items-center border border-zinc-800 shadow-lg mt-8">
          <h2 className="text-2xl font-bold mb-2">Got a unique idea?</h2>
          <p className="text-zinc-400 mb-4 text-center">If you have a special request or want to discuss a bespoke project, reach out directly via Discord or our contact form.</p>
          <div className="flex gap-4">
            <a
              href="https://discord.gg/bonelli"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-lg bg-gradient-to-r from-purple-400 to-pink-600 text-white font-bold shadow hover:shadow-lg hover:from-pink-600 hover:to-purple-400 transition-all duration-150 border border-transparent hover:border-purple-300"
            >
              Join Discord
            </a>
            <Link href="/contact">
              <span className="px-5 py-2 rounded-lg bg-zinc-800 text-zinc-200 font-medium border border-zinc-700 hover:border-purple-400 transition-colors duration-150 cursor-pointer">
                Contact Form
              </span>
            </Link>
          </div>
        </div>
      </section>
      </main>
      </PageTransition>
      <Footer />
      <ScrollToTop />
    </div>
  );
}
