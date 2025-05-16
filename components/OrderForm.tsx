import React, { useState } from "react";
import { motion } from "framer-motion";
import { Commission } from "../lib/commissions";

interface OrderFormProps {
  commission: Commission;
  onSubmit: (formData: OrderFormData) => void;
  onCancel: () => void;
}

export interface OrderFormData {
  name: string;
  email: string;
  details: string;
  budget: string;
  timeline: string;
}

export default function OrderForm({ commission, onSubmit, onCancel }: OrderFormProps) {
  const [formData, setFormData] = useState<OrderFormData>({
    name: "",
    email: "",
    details: "",
    budget: commission.price,
    timeline: "1-2 weeks",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof OrderFormData, string>>>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error when field is edited
    if (errors[name as keyof OrderFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof OrderFormData, string>> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Valid email is required";
    }
    
    if (!formData.details.trim()) {
      newErrors.details = "Please provide project details";
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit(formData);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-zinc-900 p-6 rounded-xl border border-zinc-800 shadow-xl"
    >
      <h3 className="text-xl font-bold text-white mb-4">Order {commission.title}</h3>
      <p className="text-zinc-400 mb-4">Fill out the details below to start your commission request.</p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-zinc-300 mb-1">
            Your Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className={`w-full px-3 py-2 bg-zinc-800 border ${
              errors.name ? "border-red-500" : "border-zinc-700"
            } rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-purple-500`}
            placeholder="Enter your name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name}</p>}
        </div>
        
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-zinc-300 mb-1">
            Your Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className={`w-full px-3 py-2 bg-zinc-800 border ${
              errors.email ? "border-red-500" : "border-zinc-700"
            } rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-purple-500`}
            placeholder="you@example.com"
          />
          {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email}</p>}
        </div>
        
        <div>
          <label htmlFor="budget" className="block text-sm font-medium text-zinc-300 mb-1">
            Budget
          </label>
          <input
            type="text"
            id="budget"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
            placeholder={commission.price}
          />
        </div>
        
        <div>
          <label htmlFor="timeline" className="block text-sm font-medium text-zinc-300 mb-1">
            Timeline
          </label>
          <select
            id="timeline"
            name="timeline"
            value={formData.timeline}
            onChange={handleChange}
            className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-purple-500"
          >
            <option value="ASAP">ASAP (24-48 hours)</option>
            <option value="1-2 weeks">1-2 weeks</option>
            <option value="2-4 weeks">2-4 weeks</option>
            <option value="Flexible">Flexible</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="details" className="block text-sm font-medium text-zinc-300 mb-1">
            Project Details
          </label>
          <textarea
            id="details"
            name="details"
            value={formData.details}
            onChange={handleChange}
            rows={4}
            className={`w-full px-3 py-2 bg-zinc-800 border ${
              errors.details ? "border-red-500" : "border-zinc-700"
            } rounded-lg text-white focus:outline-none focus:ring-1 focus:ring-purple-500`}
            placeholder="Describe your project or requirements in detail"
          ></textarea>
          {errors.details && <p className="mt-1 text-sm text-red-500">{errors.details}</p>}
        </div>
        
        <div className="flex gap-3 pt-2">
          <button
            type="submit"
            className="flex-1 px-4 py-2 rounded-lg bg-gradient-to-r from-purple-400 to-pink-600 text-white font-bold shadow hover:shadow-lg hover:from-pink-600 hover:to-purple-400 transition-all duration-150 border border-transparent hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
          >
            Submit Order
          </button>
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-200 font-medium border border-zinc-700 hover:border-purple-400 transition-colors duration-150"
          >
            Cancel
          </button>
        </div>
      </form>
    </motion.div>
  );
}
