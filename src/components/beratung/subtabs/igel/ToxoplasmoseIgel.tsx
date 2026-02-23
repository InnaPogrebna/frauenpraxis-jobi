"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Bug, AlertTriangle, ShieldCheck, Microscope, Info } from "lucide-react";

export const ToxoplasmoseIgel = () => {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* --- FEATURED IMAGE SECTION --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full aspect-[21/9] md:aspect-[21/7] rounded-[30px] md:rounded-[60px] overflow-hidden border-4 md:border-[12px] border-white shadow-2xl bg-white"
      >
        <Image
          src="/images/frauenpraxis-nana-jobi-labor.jpg"
          alt="Toxoplasmose Diagnostik"
          fill
          className="object-cover contrast-[1.05] brightness-[1.05]"
          priority
        />
        <div className="absolute inset-0 bg-[#e62e7a]/10 mix-blend-multiply opacity-20" />
      </motion.div>

      {/* --- CONTENT HEADER --- */}
      <div className="max-w-4xl space-y-6">
        <div className="flex items-center gap-3 text-[#e62e7a]">
          <div className="p-2 rounded-xl bg-rose-50">
            <Bug className="w-5 h-5" />
          </div>
          <span className="uppercase tracking-[0.4em] font-black text-[10px]">Infektions-Check</span>
        </div>

        <h3 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-tight">
          Toxoplasmose
        </h3>

        <p className="text-slate-900 font-serif text-xl md:text-2xl leading-relaxed border-l-4 border-rose-100 pl-8">
          Die Ansteckung dieser Infektionskrankheit erfolgt über Katzen oder durch den Genuss von rohem oder nicht durchgebratenem Fleisch.
        </p>
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Der Hauptwirt, die Katze, scheidet nach Infektion einige Wochen lang Oozyten im Kot aus, diese können im Staub oder im Erdboden monatelang überdauern.
            </p>
            <p>
              Die Infektion des Menschen erfolgt oral, entweder durch Verzehr von rohem oder nicht genügend erhitztem Fleisch eines infizierten Tieres oder indem die Erreger bei der Gartenarbeit auf die Hände und von dort in den Mund gelangen.
            </p>

            <div className="p-8 md:p-10 rounded-[40px] bg-rose-50/40 border border-rose-100 space-y-4 shadow-sm relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3 text-[#e62e7a]">
                  <AlertTriangle className="w-6 h-6" />
                  <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Risiko für das Ungeborene</h4>
                </div>
                <p className="text-slate-800 font-medium text-lg leading-relaxed">
                  Der Erreger „Toxoplasma gondii“ kann von der Mutter auf das ungeborene Kind übertragen werden. Bei einer Erstinfektion können schwere Missbildungen mit Gehirnschäden und Erblindung entstehen.
                </p>
              </div>
              <Microscope className="absolute -right-6 -bottom-6 w-32 h-32 text-[#e62e7a]/5 rotate-12 transition-transform duration-1000 group-hover:rotate-0" />
            </div>
          </div>
        </div>

        {/* Sidebar Info Card */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-[40px] bg-white border border-rose-100 shadow-[0_30px_60px_-15px_rgba(230,46,122,0.1)] relative overflow-hidden"
          >
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-[#e62e7a]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif italic text-slate-900 leading-tight">Antikörper-Status</h4>
              <p className="text-slate-600 text-base leading-relaxed">
                In Deutschland haben ca. die Hälfte aller Frauen im gebärfähigen Alter eine Infektion schon unbemerkt durchgemacht und sind daher geschützt.
              </p>
              <p className="text-slate-500 text-sm border-t border-rose-50 pt-4 italic">
                Ein positiver Test schließt eine Erstinfektion während der späteren Schwangerschaft praktisch aus.
              </p>
            </div>
          </motion.div>

          <div className="p-8 rounded-[40px] bg-white border-2 border-rose-100/50 text-center shadow-sm space-y-3">
            <div className="flex justify-center text-[#e62e7a]">
              <Info className="w-5 h-5" />
            </div>
            <p className="text-slate-900 font-medium text-base leading-snug">
              Vor oder zu Beginn einer Schwangerschaft empfohlen.
            </p>
            <p className="text-slate-400 text-xs uppercase tracking-widest font-black">
              Bei fehlender Immunabwehr weitere Kontrollen.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};