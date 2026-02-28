"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Sparkles, HeartPulse } from "lucide-react";

export const EmpfaengnisSection = () => {
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
          src="/images/frauenpraxis-nana-jobi-empfaengnisverhuetung.jpg"
          alt="Empfängnisverhütung"
          fill
          className="object-cover contrast-[1.05] brightness-[1.05]"
          priority
        />
        <div className="absolute inset-0 bg-[#e62e7a]/10  opacity-30" />
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-10 md:gap-16 lg:gap-24 items-start">

        <div className="lg:col-span-7 space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6 md:space-y-8"
          >
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif text-slate-900 leading-[1.1] tracking-tighter italic">
              Empfängnis<span className="text-[#e62e7a]">verhütung</span>
            </h3>

            <div className="space-y-6 text-slate-600 leading-relaxed text-base md:text-lg font-serif italic max-w-2xl">
              <p>
                Neben der umfassenden Information bezüglich der Methoden der Empfängnisverhütung
                ist es von entscheidender Bedeutung, dass die von Ihnen gewählte Antikonzeption
                Ihren Vorstellungen und Wünschen entspricht.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-6 p-6 md:p-8 rounded-[30px] bg-white border border-slate-50 shadow-[0_10px_40px_-10px_rgba(0,0,0,0.05)]"
          >
            <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
              <Sparkles className="w-6 h-6 text-[#e62e7a]" />
            </div>
            <p className="text-slate-800 font-medium leading-relaxed">
              Wir beraten Sie gerne über alle modernen Formen der Empfängnisverhütung.
            </p>
          </motion.div>
        </div>
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="sticky top-32 p-8 md:p-12 rounded-[30px] md:rounded-[40px] bg-white text-slate-900 shadow-[0_40px_100px_-20px_rgba(230,46,122,0.12)] border border-rose-100 relative overflow-hidden"
            >
              <HeartPulse className="absolute -right-4 -top-4 w-32 h-32 text-[#e62e7a]/5 rotate-12" />

              <div className="relative z-10 space-y-6">
                <h4 className="text-2xl md:text-3xl font-serif italic tracking-tight leading-tight">
                  Individuelle <br />
                  <span className="text-[#e62e7a]">Beratung</span>
                </h4>
                <div className="h-[1px] w-12 bg-[#e62e7a]/40" />
                <p className="text-slate-600 leading-relaxed text-sm md:text-base font-light italic">
                  Jede Lebensphase erfordert eine andere Lösung. Gemeinsam finden wir die Methode,
                  die am besten zu Ihrem aktuellen Lebensstil und Ihrer Gesundheit passt.
                </p>
              </div>

              <div className="absolute inset-0 bg-gradient-to-br from-[#e62e7a]/5 to-transparent pointer-events-none" />
            </motion.div>
          </div>
      </div>
    </div>
  );
};