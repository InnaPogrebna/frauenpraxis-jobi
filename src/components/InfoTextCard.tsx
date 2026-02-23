"use client";

import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";
import clsx from "clsx";

type InfoTextCardProps = {
  icon: ReactNode;
  title: string;
  children: ReactNode;
  onClick?: () => void;
  ctaLabel?: string;
  titleClassName?: string;
  className?: string;
};

export const InfoTextCard = ({
  icon,
  title,
  children,
  onClick,
  ctaLabel = "Weiterlesen",
  titleClassName,
  className,
}: InfoTextCardProps) => {
  return (
    <motion.div
      className={clsx(
        `group relative p-8 md:p-12 rounded-[45px] bg-white
         border border-rose-100
         shadow-[0_20px_50px_-15px_rgba(230,46,122,0.06)]
         flex flex-col justify-between overflow-hidden
         transition-all duration-300`,
        className
      )}
    >
      <div className="space-y-4 relative z-10">
        {/* Icon */}
        <div className="w-16 h-16 rounded-2xl bg-rose-50 flex items-center justify-center text-[#e62e7a] group-hover:bg-[#e62e7a] group-hover:text-white transition-all duration-500 shadow-sm">
          {icon}
        </div>

        {/* Title */}
        <h3
          className={clsx(
            "text-2xl md:text-3xl font-serif not-italic leading-tight mb-0",
            titleClassName ? titleClassName : "text-slate-900"
          )}
        >
          {title}
        </h3>

        {/* Content */}
        <div className="space-y-4 text-slate-500 font-serif not-italic text-base md:text-lg leading-relaxed">
          {children}
        </div>
      </div>

      {onClick && (
        <button
          type="button"
          onClick={onClick}
          className="pt-8 flex items-center gap-3 text-[#e62e7a] 
               font-black uppercase text-[10px] tracking-[0.1em] 
               border-t border-rose-50 mt-8
               hover:tracking-[0.1em] transition-all duration-300
               focus:outline-none"
        >
          <span>{ctaLabel}</span>
          <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
        </button>
      )}
    </motion.div>
  );
};