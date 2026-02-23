"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useExpandable } from "@/hooks/useExpandable";

interface Props {
  children: React.ReactNode;
}

export const ExpandableText = ({ children }: Props) => {
  const { expanded, toggle, clampClass, buttonLabel } = useExpandable();

  return (
    <div className="relative">
      <motion.div
        layout
        className={`relative text-slate-600 font-serif text-base md:text-lg leading-relaxed transition-all duration-300 ${clampClass}`}
      >
        {children}

        {!expanded && (
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-gradient-to-t from-white to-transparent pointer-events-none" />
        )}
      </motion.div>

      <button
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
        className="mt-2 flex items-center gap-2 text-[#e62e7a] font-semibold text-[10px] uppercase tracking-wider hover:opacity-80 transition"
      >
        {buttonLabel}
        <ChevronDown
          className={`w-4 h-4 transition-transform duration-300 ${expanded ? "rotate-180" : ""
            }`}
        />
      </button>
    </div>
  );
};