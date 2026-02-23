"use client";

import { motion } from "framer-motion";
import {
  Stethoscope,
  Droplets,
  Waves,
  Calendar,
  CheckCircle2,
  Activity,
  ClipboardList
} from "lucide-react";

export const MutterschaftsRichtlinien = () => {
  return (
    <div className="space-y-16 md:space-y-24 pb-20">
      {/* --- INTRO SECTION --- */}
      <div className="relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl space-y-8 relative z-10"
        >
          <div className="flex items-center gap-4 text-[#e62e7a]">
            <span className="h-[1px] w-12 bg-[#e62e7a]/30" />
            <span className="text-[10px] font-black uppercase tracking-[0.4em]">Information</span>
          </div>

          <div className="space-y-6">
            <h3 className="text-4xl md:text-7xl font-serif italic text-slate-900 leading-[1] tracking-tighter">
              Mutterschafts<br />
              <span className="text-[#e62e7a]">vorsorgerichtlinien</span>
            </h3>

            <div className="space-y-2 text-slate-600 font-serif italic text-lg md:text-xl leading-relaxed border-l-2 border-rose-100 pl-6">
              <p>• Untersuchungen nach den Mutterschaftsvorsorgerichtlinien</p>
              <p>• Zusätzliche individuelle Vorsorgeuntersuchungen</p>
            </div>

            <p className="text-slate-500 font-serif italic text-xl md:text-2xl leading-relaxed max-w-2xl pt-4">
              Nachdem wir bei Ihnen eine Schwangerschaft festgestellt haben, erfolgt nun eine Reihe von Untersuchungen:
            </p>
          </div>
        </motion.div>
      </div>

      {/* --- FRAUENÄRZTLICHE UNTERSUCHUNG --- */}
      <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8 group"
        >
          <div className="bg-white rounded-[50px] p-8 md:p-14 border border-rose-100/50 shadow-[0_40px_80px_-20px_rgba(230,46,122,0.08)] relative overflow-hidden h-full">
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-rose-50/50 rounded-full blur-3xl transition-colors duration-700" />

            <div className="relative z-10 space-y-10">
              <div className="flex justify-between items-center">
                <div className="space-y-2">
                  <h4 className="text-3xl md:text-4xl font-serif italic text-slate-900 leading-tight">
                    Frauenärztliche Untersuchung
                  </h4>
                </div>
                <div className="p-4 rounded-3xl bg-rose-50 text-[#e62e7a]">
                  <Stethoscope className="w-7 h-7" />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-[30px] bg-slate-50 border border-slate-100/50 space-y-1">
                  <span className="text-[10px] font-black text-[#e62e7a] uppercase tracking-widest">Turnus</span>
                  <p className="text-lg md:text-xl font-serif italic text-slate-800">Alle 4 Wochen bis zur 28. Schwangerschaftswoche</p>
                </div>
                <div className="p-6 rounded-[30px] bg-rose-50/50 border border-rose-100/50 space-y-1">
                  <span className="text-[10px] font-black text-[#e62e7a] uppercase tracking-widest">Endspurt</span>
                  <p className="text-lg md:text-xl font-serif italic text-slate-800">Alle 2 Wochen bis zur Geburt</p>
                </div>
              </div>

              <div className="space-y-8 pt-6 border-t border-slate-50">
                <p className="text-slate-600 font-serif italic leading-relaxed text-lg">
                  Bei der Erstuntersuchung erfolgt neben einer ausführlichen Anamnese die gründliche Untersuchung. Mittels Urin wird ein Test auf Chlamydien durchgeführt.
                </p>

                <div className="space-y-6">
                  <div className="flex items-center gap-3 text-slate-900 font-bold italic">
                    <ClipboardList className="w-5 h-5 text-[#e62e7a]" />
                    <span>Jede Vorsorgeuntersuchung beinhaltet außerdem:</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      "• Blutdruckmessung",
                      "• Urinuntersuchung",
                      "• Gewichtskontrolle",
                      "• Hämoglobinbestimmung (Eisenwert)"
                    ].map((item) => (
                      <div key={item} className="text-slate-500 font-serif italic text-base border-l border-rose-100 pl-4">
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* --- CTG & BLOOD TESTS --- */}
        <div className="lg:col-span-4 flex flex-col gap-8">
          <motion.div
            whileHover={{ y: -5 }}
            className="p-10 rounded-[45px] bg-gradient-to-br from-white to-rose-50 border border-rose-100 shadow-xl relative overflow-hidden"
          >
            <Calendar className="absolute -right-8 -top-8 w-48 h-48 text-[#e62e7a]/5 rotate-12" />
            <div className="relative z-10 space-y-4 text-slate-900">
              <span className="px-3 py-1 rounded-full bg-[#e62e7a] text-white text-[9px] font-black uppercase tracking-[0.2em]">Zusatz ab 28. Woche</span>
              <p className="text-lg font-serif italic leading-relaxed">
                Zusätzlich werden ab der 28. Woche durch ein **CTG** die Wehen und die Herztöne des Kindes erfasst.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-10 rounded-[45px] bg-white border border-rose-100 shadow-lg space-y-8 flex-grow flex flex-col justify-center"
          >
            <div className="flex items-center gap-3 text-[#e62e7a]">
              <Droplets className="w-5 h-5" />
              <h4 className="font-black uppercase text-xs tracking-widest">Blutuntersuchungen</h4>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                "• Blutgruppe + Rhesusfaktor",
                "• Antikörpersuchtest",
                "• Röteln-Titer-Bestimmung",
                "• Syphilis",
                "• Hepatitis B"
              ].map((test) => (
                <div key={test} className="text-slate-600 font-serif italic text-base flex items-center justify-between group">
                  <span>{test}</span>
                  <div className="w-4 h-[1px] bg-rose-100 group-hover:w-10 transition-all" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* --- ULTRASCHALL SECTION --- */}
      <div className="space-y-12">
        <div className="text-center space-y-4">
          <div className="w-12 h-[2px] bg-[#e62e7a] mx-auto opacity-20" />
          <h4 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-tight">Ultraschall Untersuchungen</h4>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { w: "8.-12. Woche", t: "US-Untersuchung" },
            { w: "18.-22. Woche", t: "US-Untersuchung" },
            { w: "28.-32. Woche", t: "US-Untersuchung" }
          ].map((u, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="p-10 rounded-[40px] bg-white border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 text-center space-y-4 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-rose-50 text-[#e62e7a] flex items-center justify-center mx-auto group-hover:rotate-[360deg] transition-transform duration-1000">
                <Waves className="w-6 h-6" />
              </div>
              <div className="space-y-1">
                <p className="text-[#e62e7a] font-black text-[10px] uppercase tracking-widest">{u.t}</p>
                <h5 className="text-2xl font-serif italic text-slate-900">in der {u.w}</h5>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- FINAL STATEMENT --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center pt-8 border-t border-rose-100"
      >
        <div className="inline-flex p-3 rounded-2xl bg-rose-50 text-[#e62e7a] mb-6">
          <Activity className="w-6 h-6" />
        </div>
        <h4 className="text-2xl md:text-4xl font-serif italic text-slate-900 leading-tight">
          Mehr tun als das minimal nötige?
        </h4>
      </motion.div>
    </div>
  );
};