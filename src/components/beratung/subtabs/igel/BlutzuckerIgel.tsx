"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Droplets, AlertTriangle, CheckCircle2 } from "lucide-react";

export const BlutzuckerIgel = () => {
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
          alt="Labor Diagnostik"
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
            <Droplets className="w-5 h-5" />
          </div>
          <span className="uppercase tracking-[0.3em] font-black text-[10px]">Vorsorge-Leistung</span>
        </div>

        <h3 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-tight">
          Blutzucker-<span className="text-[#e62e7a]">Belastungstest</span>
        </h3>

        <p className="text-slate-900 font-serif text-xl md:text-2xl leading-relaxed border-l-4 border-rose-100 pl-8">
          Ungefähr 5% aller Schwangeren leiden an einem Schwangerschaftsdiabetes (Gestationsdiabetes). Dies bedeutet ein erhöhtes Risiko für Mutter und Kind.
        </p>
      </div>

      {/* --- MAIN GRID --- */}
      <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed">
            <p>
              Für die Schwangere selbst verläuft die Erkrankung ohne Beschwerden, deshalb empfehlen wir jeder Schwangeren einen sogenannten oralen Glucosetoleranztest.
            </p>
            <p>
              Dieser einfache Test sollte in der 24-28. SSW durchgeführt werden.
            </p>

            <div className="p-8 md:p-10 rounded-[40px] bg-rose-50/40 border border-rose-100 space-y-6 shadow-sm relative overflow-hidden group">
              <p className="text-slate-900 font-bold text-lg relative z-10">
                Bei besonders gefährdeten Schwangeren sollte dieser Test auch zu einem früheren Zeitpunkt zusätzlich durchgeführt werden:
              </p>
              <ul className="grid sm:grid-cols-1 gap-4 text-base relative z-10">
                {[
                  "Übergewicht",
                  "Zuckerkrankheit in der Familie",
                  "Nach Geburt eines übergewichtigen Kindes"
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-[#e62e7a] shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <Droplets className="absolute -right-4 -bottom-4 w-32 h-32 text-[#e62e7a]/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
            </div>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
          {/* Warning Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-[40px] bg-white border border-rose-100 shadow-[0_30px_60px_-15px_rgba(230,46,122,0.1)] relative overflow-hidden group"
          >
            <AlertTriangle className="absolute -right-6 -top-6 w-32 h-32 text-[#e62e7a]/5 rotate-12" />

            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-[#e62e7a]">
                <AlertTriangle className="w-6 h-6" />
              </div>
              <p className="text-slate-800 text-lg leading-relaxed">
                Der Schwangerschaftsdiabetes macht zunächst keine Symptome. Ein einfacher Test auf Zucker im Urin ist <span className="font-bold text-[#e62e7a]">nicht ausreichend!!</span>
              </p>
            </div>
          </motion.div>

          {/* Timing Label - Light Style */}
          <div className="p-8 rounded-[40px] bg-white border-2 border-rose-100/50 text-center space-y-2 shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e62e7a]">Empfohlener Zeitraum</span>
            <p className="text-xl md:text-2xl font-serif italic text-slate-900">
              24. bis 28. <br /> Schwangerschaftswoche
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};