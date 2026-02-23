"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, Baby, Calendar, Sparkles } from "lucide-react";

export const NachDerGeburt = () => {
  return (
    <div className="space-y-20 md:space-y-32 pb-20">
      {/* --- FEATURED IMAGE: SOFT ROUNDED PANORAMA --- */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="relative w-full aspect-[21/9] md:aspect-[21/8] rounded-[40px] md:rounded-[80px] overflow-hidden border-4 md:border-[15px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] bg-white"
      >
        <Image
          src="/images/frauenpraxis-nana-jobi-kinderwunsch.jpg"
          alt="Glückliches Baby"
          fill
          className="object-cover brightness-[1.02] contrast-[1.02]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rose-50/20 to-transparent" />
      </motion.div>

      {/* --- CONTENT SECTION --- */}
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="flex items-center justify-center gap-3 text-[#e62e7a]"
          >
            <Heart className="w-4 h-4 fill-current" />
            <span className="uppercase tracking-[0.4em] font-black text-[10px]">Herzlichen Glückwunsch</span>
          </motion.div>

          <h3 className="text-4xl md:text-7xl font-serif italic text-slate-900 leading-tight tracking-tighter">
            Nach der <span className="text-[#e62e7a]">Geburt</span>
          </h3>

          <p className="text-slate-500 font-serif italic text-2xl md:text-3xl">
            Herzlichen Glückwunsch zur Geburt Ihres Kindes!
          </p>
        </div>

        {/* --- INFO CARDS: CLEAN & REFINED --- */}
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">

          {/* Card 1: Medical Checkup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-[55px] bg-rose-50/40 border border-rose-100 shadow-[0_20px_50px_-15px_rgba(230,46,122,0.1)] relative overflow-hidden"
          >
            <div className="relative z-10 space-y-8">
              <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-[#e62e7a] shadow-sm">
                <Baby className="w-7 h-7" />
              </div>
              <div className="space-y-6">
                <p className="text-slate-900 font-bold text-xl md:text-2xl leading-relaxed">
                  6-8 Wochen nach der Entbindung sollte die Frau nochmals ihren Frauenarzt aufsuchen.
                </p>
                <p className="text-slate-600 text-lg leading-relaxed">
                  Er wird sie untersuchen und die Rückbildungsvorgänge beurteilen.
                </p>
              </div>
            </div>
            <Sparkles className="absolute -right-8 -bottom-8 w-40 h-40 text-[#e62e7a]/5 rotate-12" />
          </motion.div>

          {/* Card 2: Questions & Consult */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-10 md:p-14 rounded-[55px] bg-white border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] flex flex-col justify-center space-y-8"
          >
            <div className="flex items-center gap-4 text-[#e62e7a]">
              <div className="p-3 rounded-2xl bg-rose-50">
                <Calendar className="w-6 h-6" />
              </div>
              <h4 className="text-sm font-black uppercase tracking-[0.2em]">Zeit für Ihre Fragen</h4>
            </div>

            <p className="text-slate-700 text-lg md:text-xl leading-relaxed">
              Sicher haben die meisten Frauen noch viele Fragen zum <span className="text-slate-900 font-bold italic">Stillen</span> und zur <span className="text-slate-900 font-bold italic">Verhütung</span> nach der Entbindung, die der Frauenarzt bei dieser Gelegenheit gerne beantworten kann.
            </p>

            <div className="pt-4">
              <span className="text-[10px] font-black uppercase tracking-widest text-[#e62e7a]/40">
                Individuelle Beratung
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
};