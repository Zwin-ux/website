import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceTitle: string;
}

export default function OrderSuccessModal({ isOpen, onClose, serviceTitle }: OrderSuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.8 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black"
            onClick={onClose}
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", bounce: 0.3 }}
            className="relative bg-zinc-900 p-6 rounded-xl shadow-2xl border border-purple-500/30 max-w-md w-full z-10"
          >
            <div className="text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-600 rounded-full flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-2">Commission Request Sent!</h3>
              <p className="text-zinc-300 mb-4">
                Your request for <span className="font-semibold text-purple-300">{serviceTitle}</span> has been prepared. Your email client should open automatically.
              </p>
              <p className="text-zinc-400 text-sm mb-6">
                If your email didn't open, please email us directly at <span className="text-purple-300">groupbonelli@gmail.com</span> with your request details.
              </p>
              
              <button
                onClick={onClose}
                className="w-full px-4 py-2 bg-zinc-800 text-white rounded-lg border border-zinc-700 hover:border-purple-400 transition-all duration-200"
              >
                Close
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
