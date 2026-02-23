"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { UserCheck, ClipboardCheck } from "lucide-react";

export const BeratungGeneral = () => {
  return (
    <div className="space-y-12 md:space-y-20">
      {/* --- HERO IMAGE SECTION --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full aspect-[16/9] md:aspect-[21/8] rounded-[30px] md:rounded-[60px] overflow-hidden border-4 md:border-[12px] border-white shadow-2xl bg-white"
      >
        <Image
          src="/images/frauenpraxis-nana-jobi-beratung.jpg"
          alt="Schwangerschaftsberatung"
          fill
          className="object-cover contrast-[1.05] brightness-[1.02]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#e62e7a]/10 to-transparent" />
      </motion.div>

      {/* --- CONTENT SECTION --- */}
      <div className="grid lg:grid-cols-12 gap-10 md:gap-16">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-8 space-y-8"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-[#e62e7a]">
              <ClipboardCheck className="w-5 h-5" />
              <span className="uppercase tracking-[0.3em] font-black text-[10px]">Individuelle Betreuung</span>
            </div>

            <h3 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-[1.1] tracking-tight">
              Beratung & <span className="text-[#e62e7a]">Begleitung</span>
            </h3>

            <p className="text-slate-900 font-serif italic text-xl md:text-2xl leading-relaxed border-l-4 border-rose-100 pl-8">
              Unser Betreuungskonzept hat zum Ziel, Sie während der Schwangerschaft individuell zu begleiten.
            </p>
          </div>

          <div className="space-y-6 text-slate-600 font-serif italic text-base md:text-lg leading-relaxed">
            <p>
              Wir nehmen als Vorgabe die Mutterschaftsvorsorgerichtlinien und bringen unser Wissen, das wir durch regelmäßige Weiterbildung auf dem neuesten Stand halten, in die Beratung mit ein.
            </p>
            <p>
              Es ist uns wichtig, Ihnen wissenschaftliche Erkenntnisse zu vermitteln. Sie entscheiden dann selbst mit unserer Unterstützung, wie viel Medizin, welche Untersuchungen und welches Betreuungskonzept Sie in Anspruch nehmen möchten.
            </p>
          </div>
        </motion.div>

        {/* Правая колонка с акцентом */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-4"
        >
          <div className="p-8 md:p-10 rounded-[40px] bg-white border border-rose-100 shadow-[0_30px_60px_-15px_rgba(230,46,122,0.1)] relative overflow-hidden h-full flex flex-col justify-center group">
            <UserCheck className="absolute -right-6 -top-6 w-32 h-32 text-[#e62e7a]/5 rotate-12 transition-transform duration-1000 group-hover:rotate-0" />

            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-[#e62e7a]">
                <UserCheck className="w-6 h-6" />
              </div>
              <p className="text-slate-800 font-serif italic text-lg leading-relaxed">
                Bei Schwangerschaftsbeschwerden beraten wir Sie gern, bei eventuellen Erkrankungen klären wir Sie auf и ergreifen die notwendigen Maßnahmen.
              </p>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
    </div>
  );
};