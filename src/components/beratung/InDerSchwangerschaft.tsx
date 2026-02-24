"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, Sparkles, HelpCircle } from "lucide-react";

export const InDerSchwangerschaft = () => {
  const router = useRouter();

  const handleNavigation = (tab: string) => {
    router.push(`/geburtshilfe?tab=${tab}`);
  };
  return (
    <div className="space-y-8 md:space-y-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full aspect-[16/9] md:aspect-[21/8] rounded-[30px] md:rounded-[60px] overflow-hidden border-4 md:border-[12px] border-white shadow-2xl bg-white"
      >
        <Image
          src="/images/frauenpraxis-nana-schwangerschaft.jpg"
          alt="Schwangerschaft Begleitung"
          fill
          className="object-cover contrast-[1.05] brightness-[1.02]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#e62e7a]/10 to-transparent" />
      </motion.div>

      {/* --- CONTENT SECTION --- */}
      <div className="grid lg:grid-cols-12 gap-10 md:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="lg:col-span-7 space-y-8"
        >
          <div className="space-y-6">
            <div className="flex items-center gap-3 text-[#e62e7a]">
              <Heart className="w-5 h-5 fill-current" />
              <span className="uppercase tracking-[0.3em] font-black text-[10px]">
                Herzlichen Glückwunsch
              </span>
            </div>

            <h3 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-[1.1] tracking-tight">
              In der <span className="text-[#e62e7a]">Schwangerschaft</span>
            </h3>

            <p className="text-slate-900 font-serif italic text-xl md:text-2xl leading-relaxed border-l-4 border-rose-100 pl-8">
              Sie erwarten Nachwuchs! Wir freuen uns mit Ihnen!
            </p>
          </div>

          <div className="space-y-6 text-slate-600 font-serif italic text-base md:text-lg leading-relaxed">
            <p className="not-italic text-sm">
              Mit einer Schwangerschaft beginnt für Sie ein neuer und aufregender Lebensabschnitt.
            </p>
            <p className="not-italic text-sm">
              Neben der Freude auf dieses wundervolle Ereignis stellen Sie sich wahrscheinlich,
              wie viele werdende Eltern, einige Fragen.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="lg:col-span-5"
        >
          <div className="p-6 md:p-12 rounded-[40px] bg-rose-50/30 border border-rose-100 shadow-[0_40px_100px_-20px_rgba(230,46,122,0.12)] relative overflow-hidden group">
            <Sparkles className="absolute -right-8 -top-8 w-48 h-48 text-[#e62e7a]/5 rotate-12 transition-transform duration-1000 group-hover:rotate-0" />

            <div className="relative z-10 space-y-8">
              <div className="space-y-4">
                <h4 className="text-2xl font-serif italic text-slate-900 leading-tight">
                  Individuelle <br />
                  <span className="text-[#e62e7a]">Begleitung</span>
                </h4>
                <div className="h-[1px] w-12 bg-[#e62e7a]/30" />
              </div>

              <div className="space-y-6 text-slate-700 font-serif italic text-sm md:text-lg leading-relaxed">
                <p className="not-italic text-sm">Was können wir mehr tun, als das „nur mal Nötige“?</p>
                <p className="text-slate-500 text-sm not-italic text-sm md:text-base border-t border-rose-100 pt-6">
                  Wir helfen Ihnen dabei, sich einen Überblick zu verschaffen und beraten Sie gerne
                  über sinnvolle zusätzliche Untersuchungen.
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent pointer-events-none" />
          </div>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-2 gap-4 pt-4">
          <div
            onClick={() => handleNavigation("richtlinien")}
            className="p-4 md:p-6 rounded-[30px] bg-white border border-rose-100 shadow-sm flex items-center gap-4 group hover:border-[#e62e7a] transition-colors duration-500 cursor-pointer h-full"
          >
            <HelpCircle className="text-[#e62e7a] w-5 h-5 shrink-0" />
            <span className="text-slate-700 font-serif italic text-sm md:text-base">
              Ist mein Kind gesund?
            </span>
          </div>

          <div
            onClick={() => handleNavigation("igel")}
            className="p-4 md:p-6 rounded-[30px] bg-white border border-rose-100 shadow-sm flex items-center gap-4 group hover:border-[#e62e7a] transition-colors duration-500 cursor-pointer h-full"
          >
            <HelpCircle className="text-[#e62e7a] w-5 h-5 shrink-0" />
            <span className="text-slate-700 font-serif italic text-sm md:text-base">
              Welche Untersuchungen gibt es?
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};