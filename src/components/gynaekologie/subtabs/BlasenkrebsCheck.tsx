"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Activity, Zap, Search } from "lucide-react";

export const BlasenkrebsCheck = () => {
  return (
    <div className="max-w-6xl mx-auto space-y-12 md:space-y-16 py-8">
      {/* --- HEADER --- */}
      <div className="text-center space-y-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex p-4 rounded-3xl bg-rose-50 text-[#e62e7a] mb-2 shadow-sm"
        >
          <ShieldCheck className="w-10 h-10" />
        </motion.div>

        <h3 className="text-4xl md:text-6xl font-serif italic text-slate-900 tracking-tighter leading-tight">
          Früherkennung von <br />
          <span className="text-[#e62e7a]">Blasenkrebs</span>
        </h3>
        <div className="h-[1px] w-24 bg-[#e62e7a]/30 mx-auto" />
      </div>

      {/* --- CONTENT CARDS --- */}
      <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-stretch">

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="p-10 md:p-12 rounded-[45px] bg-white border border-rose-100 shadow-[0_20px_50px_-15px_rgba(230,46,122,0.06)] flex flex-col justify-center space-y-6"
        >
          <p className="text-slate-600 font-serif italic text-lg md:text-xl leading-relaxed">
            Jährlich erkranken in Deutschland mehr als 28 000 Menschen an Harnblasenkrebs
            (Tendenz steigend).
          </p>
          <div className="h-[1px] w-12 bg-rose-100" />
          <p className="text-slate-500 font-serif italic text-base md:text-lg leading-relaxed">
            Die Früherkennung von Blasenkrebs gehört noch immer nicht zur routinemäßigen Krebsvorsorge.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="p-10 md:p-12 rounded-[45px] bg-white border border-rose-100 shadow-[0_40px_100px_-20px_rgba(230,46,122,0.12)] relative overflow-hidden group flex flex-col justify-center"
        >
          <Activity className="absolute -right-8 -bottom-8 w-48 h-48 text-[#e62e7a]/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000 ease-out" />

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-rose-50">
                <Search className="w-5 h-5 text-[#e62e7a]" />
              </div>
              <h4 className="text-2xl md:text-3xl font-serif italic text-slate-900 tracking-tight">
                NMP 22 <span className="text-[#e62e7a]">Bladder Check</span>
              </h4>
            </div>

            <p className="text-slate-600 font-serif italic text-lg md:text-xl leading-relaxed">
              Mit dem NMP 22 Bladder Check steht eine einfache Möglichkeit zur Verfügung, Blasenkrebs in vielen Fällen frühzeitig zu diagnostizieren.
            </p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent pointer-events-none" />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 md:p-10 rounded-[40px] bg-rose-50/30 border border-rose-100 flex items-start gap-6 relative overflow-hidden"
      >
        <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
          <Zap className="w-6 h-6 text-[#e62e7a]" />
        </div>
        <p className="text-slate-800 font-serif italic text-lg md:text-xl leading-relaxed">
          Diese Untersuchung bietet zusätzliche Sicherheit und Gewissheit über Ihre Gesundheit, ergänzend zur regulären Vorsorge.
        </p>
      </motion.div>
    </div>
  );
};