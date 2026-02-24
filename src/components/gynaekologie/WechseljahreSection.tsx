"use client";

import { motion } from "framer-motion";
import { Heart, ShieldCheck, Activity, Sparkles, Thermometer, Brain, Leaf } from "lucide-react";

export const WechseljahreSection = () => {
  return (
    <div className="space-y-6 md:space-y-8 md:space-y-12 pb-10 max-w-7xl mx-auto px-0 md:px-4">

      {/* --- LAYER 1 --- */}
      <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-stretch">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8 p-6 md:p-16 rounded-[30px] md:rounded-[40px] bg-white border border-rose-100 shadow-[0_30px_60px_-15px_rgba(230,46,122,0.08)] relative overflow-hidden"
        >
          <div className="relative z-10 space-y-6 md:space-y-6 md:space-y-8">
            <div className="flex flex-col gap-2">
              <h3 className="text-4xl md:text-7xl font-serif text-slate-900 leading-[0.8] tracking-tighter italic mb-2">
                Wechsel<span className="text-[#e62e7a]">jahre</span>
              </h3>
              <p className="text-[#e62e7a] font-sans uppercase text-[10px] md:text-xs tracking-[0.3em] font-black pl-1">
                Die körperidentische Hormonersatztherapie
              </p>
            </div>

            <div className="h-[1px] w-20 md:w-24 bg-[#e62e7a]/30" />

            <div className="columns-1 md:columns-2 gap-8 md:gap-12 space-y-6 text-slate-600 leading-relaxed text-sm md:text-base font-serif not-italic">
              <p className="first-letter:text-4xl md:first-letter:text-5xl first-letter:font-serif first-letter:text-[#e62e7a] first-letter:mr-3 first-letter:float-left">
                Die Lebenserwartung der Menschen hat in den letzten Jahrzehnten ständig zugenommen,
                Frauen in der Bundesrepublik haben eine Lebenserwartung von über 80 Jahren.
              </p>
              <p>
                Seit Menschengedenken hat es nie eine so lange Lebensphase nach der Menopause gegeben,
                wie sie Frauen heute erleben. Postmenopausal verändern sich die Hormone dramatisch.
              </p>
              <p>
                Die Östrogenversorgung seitens der Eierstöcke reduziert sich auf niedrigste Werte,
                die Gelbkörperhormon-Versorgung geht komplett verloren.
              </p>
            </div>
          </div>
          <div className="absolute -right-12 -top-12 w-64 h-64 bg-rose-50 rounded-full blur-3xl opacity-40" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-4 p-8 rounded-[30px] md:rounded-[40px] bg-rose-50 border border-rose-100 shadow-xl flex flex-col justify-center relative overflow-hidden group min-h-[300px] lg:min-h-full"
        >
          <Thermometer className="absolute -right-4 -bottom-4 w-32 h-32 text-[#e62e7a]/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
          <div className="relative z-10 space-y-6">
            <span className="inline-block px-3 py-1 rounded-full bg-white text-[#e62e7a] text-[10px] font-black uppercase tracking-widest shadow-sm">
              Chancen oder Risiken
            </span>
            <p className="text-slate-800 text-lg md:text-xl font-serif italic leading-relaxed">
              &quot;Vermehrt Hitzewallungen, Schlafstörungen, Reizbarkeit, depressive Verstimmungen,
              geistige und körperliche Erschöpfung können Ausdruck dieser Hormonmangelsituation sein.&quot;
            </p>
          </div>
        </motion.div>
      </div>

      {/* --- LAYER 2 --- */}
      <div className="py-12 md:py-20 space-y-12 md:space-y-16">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <h4 className="text-3xl md:text-4xl font-serif italic text-slate-900 leading-tight tracking-tighter">
            Bedeutende <span className="text-[#e62e7a]">Schutzfunktionen</span>
          </h4>

          <div className="flex justify-center">
            <div className="h-[1.5px] w-12 md:w-16 bg-[#e62e7a]/40" />
          </div>

          <p className="text-slate-500 font-serif italic text-lg md:text-xl leading-relaxed px-4">
            Östrogene und Progesteron schützen wichtige Systeme Ihres Körpers:
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 max-w-6xl mx-auto">
          {[
            { icon: Heart, label: "Herz-Kreislauf", desc: "System" },
            { icon: ShieldCheck, label: "Knochen", desc: "und Gelenke" },
            { icon: Brain, label: "Hirnstoffwechsel", desc: "" },
            { icon: Activity, label: "Haut", desc: "und Vitalität" },
            { icon: Sparkles, label: "Sexualfunktion", desc: "" },
            { icon: Leaf, label: "Lebensqualität", desc: "" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{
                y: -8,
                boxShadow: "0 30px 60px -12px rgba(230,46,122,0.18)",
              }}
              className="relative group p-8 md:p-12 rounded-[30px] md:rounded-[40px] bg-white border border-slate-100 shadow-[0_15px_40px_-15px_rgba(0,0,0,0.05)] flex flex-col md:flex-row items-center gap-6 md:gap-8 transition-all duration-500"
            >
              <div className="relative shrink-0">
                <div className="absolute inset-0 bg-[#e62e7a]/5 rounded-full scale-[1.8] group-hover:bg-[#e62e7a]/10 transition-colors duration-500" />
                <item.icon className="w-8 h-8 md:w-10 md:h-10 text-[#e62e7a] relative z-10" />
              </div>

              <div className="space-y-1 relative z-10 text-center md:text-left">
                <p className="text-sm md:text-base font-black uppercase tracking-widest text-slate-700 leading-none">
                  {item.label}
                </p>

                {item.desc && (
                  <p className="text-xs md:text-sm font-bold uppercase tracking-widest text-[#e62e7a]/70">
                    {item.desc}
                  </p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- LAYER 3 --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-6 md:p-12 rounded-[30px] md:rounded-[40px] bg-white border border-rose-100 shadow-2xl relative overflow-hidden"
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 relative z-10 space-y-4">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Leaf className="w-5 h-5 text-[#e62e7a]" />
                <h4 className="text-xl md:text-2xl font-serif italic text-slate-900 leading-tight">Therapeutische Wirkung</h4>
              </div>
              <p className="break-normal text-slate-600 leading-relaxed text-sm md:text-base not-italic font-serif">
                Die individuell und niedrig dosierbaren Hormone haben zu einer beachtlichen Verringerung möglicher Nebenwirkungen geführt.
                Andererseits schützen sie postmenopausale Frauen vor Herzinfarkt, Arteriosklerose, Osteoporose und Diabetes mellitus Typ II.
              </p>
            </div>
            <div className="p-6 md:p-8 rounded-[25px] bg-rose-50/50 border border-rose-100">
              <p className=" break-normaltext-slate-800 font-serif not-italic text-sm md:text-lg leading-relaxed">
                &quot;Östrogene begünstigen die Sättigung und bremsen den Appetit. Progesteron und Östrogen fördern die Schlafqualität, Motivation und Vitalität.&quot;
              </p>
            </div>

          <div className="space-y-6 md:space-y-8">
            <p className="text-slate-500 leading-relaxed text-sm not-italic font-serif">
              Durch Studienergebnisse zu Hormonen in unphysiologischer Dosierung entstand eine nachhaltige Verunsicherung.
            </p>

            <div className="p-4 md:p-10 rounded-[30px] bg-white border-2 border-rose-100 shadow-xl relative overflow-hidden group flex items-center min-h-[200px]">
              <Sparkles className="absolute -right-4 -top-4 w-24 h-24 text-[#e62e7a]/5 group-hover:scale-110 transition-transform duration-700" />
              <p className="relative z-10 text-base md:text-xl font-serif italic leading-relaxed text-slate-900 border-l-4 border-[#e62e7a] pl-6">
                &quot;Mit den niedrigdosierten Hormonen haben wir jetzt die Möglichkeit, den Frauen eine adäquate,
                schützende Östrogenbehandlung zukommen zu lassen.&quot;
              </p>
            </div>
          </div>
        </div>
        <div className="absolute -left-12 -bottom-12 w-64 h-64 bg-rose-50 rounded-full blur-3xl opacity-40" />
      </motion.div>

    </div>
  );
};