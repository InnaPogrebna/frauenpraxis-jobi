"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Search, ShieldCheck, Activity } from "lucide-react";

export const Pranataldiagnostik = () => {
  return (
    <div className="space-y-20 md:space-y-32 pb-20">
      {/* --- HERO PANORAMA --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="relative w-full aspect-[21/9] md:aspect-[21/7] rounded-[40px] md:rounded-[80px] overflow-hidden border-4 md:border-[15px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] bg-white"
      >
        <Image
          src="/images/frauenpraxis-nana-schwangerschaft.jpg"
          alt="Pränataldiagnostik Begleitung"
          fill
          className="object-cover contrast-[1.02] brightness-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-50/20 to-transparent" />
      </motion.div>

      {/* --- HEADER SECTION --- */}
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center justify-center gap-3 text-[#e62e7a]"
          >
            <Activity className="w-4 h-4" />
            <span className="uppercase tracking-[0.4em] font-black text-[10px]">Medizinische Gewissheit</span>
          </motion.div>

          <h3 className="text-4xl md:text-7xl font-serif italic text-slate-900 leading-tight tracking-tighter">
            Pränatal<span className="text-[#e62e7a]">diagnostik</span>
          </h3>

          <p className="text-slate-500 font-serif italic text-2xl md:text-3xl max-w-4xl mx-auto leading-relaxed">
            Eine Reihe von Untersuchungen kann vorhersagen, ob ein Baby gesund auf die Welt kommt.
          </p>
        </div>

        {/* --- INTERACTIVE GRID: CLEAN & PROFESSIONAL --- */}
        <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-stretch">

          {/* Main Context Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="lg:col-span-7 p-10 md:p-16 rounded-[60px] bg-white border border-slate-100 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.05)] space-y-8"
          >
            <div className="space-y-6 text-slate-700 text-lg md:text-xl leading-relaxed">
              <p className="text-slate-900 font-bold">
                Wird mein Baby gesund sein? Auf diese Frage kann die Medizin heute eine recht genaue Antwort geben.
              </p>

              <p className="text-slate-600">
                Möglich macht es die Pränataldiagnostik. Dabei handelt es sich um Untersuchungen während der Schwangerschaft, die Versorgungsstörungen, Erkrankungen oder mögliche Fehlbildungen des Babys erkennen lassen.
              </p>

              <p className="text-slate-500 italic border-l-2 border-rose-100 pl-6">
                Die Pränataldiagnostik kann unter anderem Chromosomenstörungen wie die Trisomie 21 (Down-Syndrom) oder Fehlbildungen an Organen erkennen.
              </p>
            </div>
          </motion.div>

          {/* Sidebar Cards Stack */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Risks Recommendation */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="p-10 rounded-[50px] bg-rose-50/40 border border-rose-100 flex flex-col justify-center space-y-6"
            >
              <div className="flex items-center gap-4 text-[#e62e7a]">
                <ShieldCheck className="w-6 h-6" />
                <h4 className="font-black uppercase tracking-widest text-[10px]">Empfehlung</h4>
              </div>
              <p className="text-slate-800 font-medium text-lg leading-relaxed">
                Pränatale Diagnostik empfiehlt sich vor allem für Risikoschwangerschaften. Sie brauchen eine besonders intensive Vorsorge und Überwachung.
              </p>
            </motion.div>

            {/* Doctor's Role & Choice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="p-10 rounded-[50px] bg-white border border-rose-100 shadow-xl relative overflow-hidden group"
            >
              <div className="relative z-10 space-y-4">
                <p className="text-slate-600 text-base leading-relaxed">
                  Der Arzt klärt Sie über die Möglichkeiten der vorgeburtlichen Diagnostik auf.
                </p>
                <div className="h-[1px] w-12 bg-rose-200" />
                <p className="text-slate-900 font-black text-[11px] uppercase tracking-wider leading-tight">
                  Welche Untersuchungen eine Frau letztlich in Anspruch nimmt, entscheidet sie selbst.
                </p>
              </div>
              <Search className="absolute -right-6 -bottom-6 w-32 h-32 text-rose-500/5 -rotate-12 transition-transform group-hover:rotate-0 duration-1000" />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};