import React from "react";
import { motion } from "framer-motion";

export type CommissionTag = "Web" | "Custom" | "Marketing";

export interface CommissionCardProps {
  title: string;
  price: string;
  description: string;
  tag: CommissionTag;
  onClick?: () => void;
}

const tagColors: Record<CommissionTag, string> = {
  Web: "from-purple-400 to-pink-600",
  Custom: "from-green-400 to-blue-600",
  Marketing: "from-yellow-400 to-pink-600",
};

export const CommissionCard: React.FC<CommissionCardProps> = ({
  title,
  price,
  description,
  tag,
  onClick,
}) => {
  return (
    <motion.div
      whileHover={{ scale: 1.04, boxShadow: "0 0 16px 2px #a78bfa" }}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="relative flex flex-col justify-between bg-zinc-900 rounded-2xl p-6 shadow-lg border border-zinc-800 hover:border-purple-400/60 hover:shadow-purple-500/20 transition-all duration-200 group min-h-[250px]"
    >
      {/* Tag */}
      <span className={`absolute top-4 right-4 px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r ${tagColors[tag]} text-white shadow-sm select-none`}>{tag}</span>
      {/* Title */}
      <h3 className="text-xl font-bold text-white mb-2 font-sans tracking-tight">{title}</h3>
      {/* Price pill */}
      <span className="inline-block mb-2 px-3 py-1 text-sm rounded-full bg-zinc-800 text-purple-300 font-semibold shadow-inner border border-purple-500/30">{price}</span>
      {/* Description */}
      <p className="text-zinc-400 mb-4 flex-1 font-sans text-base">{description}</p>
      {/* Buttons */}
      <div className="flex gap-3 mt-auto">
        <button
          className="px-4 py-2 rounded-lg bg-gradient-to-r from-purple-400 to-pink-600 text-white font-bold shadow hover:shadow-lg hover:from-pink-600 hover:to-purple-400 transition-all duration-150 border border-transparent hover:border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2"
          onClick={onClick}
        >
          Order Now
        </button>
        <button
          className="px-4 py-2 rounded-lg bg-zinc-800 text-zinc-200 font-medium border border-zinc-700 hover:border-purple-400 transition-colors duration-150"
          type="button"
        >
          View
        </button>
      </div>
    </motion.div>
  );
};

export default CommissionCard;
