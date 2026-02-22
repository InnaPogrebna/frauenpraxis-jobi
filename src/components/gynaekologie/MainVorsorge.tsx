"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

export const MainVorsorge = () => {
  const benefits = [
    "Abstrichentnahme vom Gebärmutterhals (sogenannter Krebsabstrich)",
    "Tastuntersuchung von Gebärmutter und Eierstöcken",
    "Tastuntersuchung der Brust",
    "Ab dem 50. Lebensjahr: Tastuntersuchung des Enddarms und Stuhluntersuchung auf Blut",
    "Ab dem 55. Lebensjahr besteht die Möglichkeit einer vorsorglichen Darmspiegelung.",
  ];

  return (
    <div className="space-y-12 md:space-y-24">
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2 }}
        className="relative w-full aspect-[16/9] md:aspect-[21/7] rounded-[30px] md:rounded-[60px] overflow-hidden border-4 md:border-[12px] border-white shadow-2xl bg-white"
      >
        <Image
          src="/images/frauenpraxis-nana-jobi-krebsvorsorge.jpg"
          alt="Krebsvorsorge"
          fill
          className="object-cover contrast-[1.05] brightness-[1.02]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/5 via-transparent to-transparent" />
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-start">
        {/* ЛЕВАЯ КОЛОНКА */}
        <div className="lg:col-span-7 space-y-10 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 leading-[1.1] tracking-tighter italic">
              Krebs<span className="text-[#e62e7a]">vorsorge</span>
            </h3>
            <p className="text-slate-600 leading-relaxed text-base md:text-lg font-serif italic max-w-2xl">
              Die empfohlene jährliche Krebsvorsorge, die Bestandteil der Kassenleistungen ist, umfasst folgende Leistungen:
            </p>
          </motion.div>

          <div className="grid gap-3 md:gap-4">
            {benefits.map((text, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="flex items-start gap-4 p-4 md:p-5 rounded-[20px] md:rounded-[24px] bg-white border border-slate-50 shadow-[0_4px_20px_rgba(0,0,0,0.02)]"
              >
                <div className="flex-shrink-0 mt-1">
                  <CheckCircle2 className="w-5 h-5 text-[#e62e7a]" />
                </div>
                <span className="text-slate-700 font-medium text-sm md:text-base leading-snug">
                  {text}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="lg:col-span-5">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="sticky top-32 p-8 md:p-12 rounded-[30px] md:rounded-[40px] bg-white border border-rose-100 shadow-[0_40px_100px_-20px_rgba(230,46,122,0.12)] relative overflow-hidden"
          >
            <div className="absolute -right-4 -top-4 opacity-[0.05] text-[#e62e7a] rotate-12">
              <svg width="160" height="160" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 18h8" /><path d="M3 22h18" /><path d="M14 22a7 7 0 1 0 0-14h-1" /><path d="M9 14h2" /><path d="M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z" /><path d="M12 6V3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3" />
              </svg>
            </div>

            <div className="relative z-10 space-y-4 md:space-y-6">
              <h4 className="text-2xl md:text-3xl font-serif italic text-slate-950 tracking-tight">
                Zellabstrich vom <br />
                <span className="text-[#e62e7a]">Muttermund</span>
              </h4>
              <div className="h-[1px] w-12 bg-[#e62e7a]/40" />
              <p className="text-slate-600 leading-relaxed text-base md:text-lg italic">
                Der Zellabstrich vom Muttermund (Krebsabstrich) wird in einem externen zytologischen Labor ausgewertet. Bei Auffälligkeiten werden Sie von uns informiert.
              </p>
            </div>
            <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-rose-50 rounded-full blur-3xl opacity-60" />
            <div className="absolute inset-0 bg-gradient-to-br from-[#e62e7a]/5 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};