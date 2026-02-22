"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronRight, Zap, Target, Activity, ShieldCheck } from "lucide-react";
import { useRouter } from "next/navigation";

export const UmfassendeVorsorge = () => {
  const router = useRouter();

  const handleNavigation = (sub: string) => {
    router.push(`?tab=erweitert&sub=${sub}`, { scroll: false });
  };

  const previewCards = [
    {
      id: "thinprep",
      icon: Target,
      title: "Optimierte Krebsfrüherkennung",
      subtitle: "ThinPrep Test",
      text: "Das Zervixkarzinom ist die zweithäufigste Krebserkrankung der Frau unter 50 Jahren. In Deutschland erkranken jedes Jahr ca. 6500 Frauen an Gebärmutterhalskrebs.",
      linkText: "Weiterlesen: ThinPrep Test"
    },
    {
      id: "darmkrebs",
      icon: Activity,
      title: "Darmkrebsvorsorge",
      subtitle: "Frühzeitig handeln",
      text: "Früh erkannt ist Darmkrebs besser heilbar. Darmkrebs tritt meist jenseits des 50. Lebensjahres auf. Frauen erkranken häufiger als Männer.",
      linkText: "Weiterlesen: Darmkrebsvorsorge"
    },
    {
      id: "blasenkrebs",
      icon: ShieldCheck,
      title: "Früherkennung von Blasenkrebs",
      subtitle: "NMP 22 Check",
      text: "Jährlich erkranken в Deutschland mehr als 28 000 Menschen an Harnblasenkrebs. Mit dem NMP 22 Bladder Check steht eine einfache Möglichkeit zur Diagnose zur Verfügung.",
      linkText: "Weiterlesen: Blasenkrebs"
    }
  ];

  return (
    <div className="space-y-12 md:space-y-20">
      {/* --- HERO SECTION --- */}
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full h-[300px] md:h-[400px] rounded-[30px] md:rounded-[60px] overflow-hidden border-4 md:border-[12px] border-white shadow-2xl bg-white"
        >
          <Image
            src="/images/frauenpraxis-nana-jobi-wir-ueber-uns.jpg"
            alt="Umfassende Vorsorge"
            fill
            className="object-cover contrast-[1.05]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
        <div className="grid lg:grid-cols-12 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-tight">
                Umfassende <span className="text-[#e62e7a]">Vorsorge</span> <br />
                <span className="text-[#e62e7a]/60">für die Frau</span>
              </h3>
              <p className="text-slate-600 font-serif italic text-lg leading-relaxed border-l-2 border-rose-100 pl-8">
                Ein Ultraschall des kleinen Beckens mit besonderen Fokus auf die Gebärmutter und die Eierstöcke,
                um zum Beispiel Muskelknoten und Zysten rechtzeitig zu erkennen.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:col-span-5 p-8 md:p-10 rounded-[40px] bg-white border border-rose-100 shadow-[0_40px_100px_-20px_rgba(230,46,122,0.12)] relative overflow-hidden flex flex-col justify-center group"
          >
            <Zap className="absolute -right-8 -top-8 w-48 h-48 text-[#e62e7a]/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000 ease-out" />

            <div className="relative z-10 space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-rose-50">
                  <Zap className="w-5 h-5 text-[#e62e7a]" />
                </div>
                <h4 className="text-2xl font-serif italic text-slate-900 leading-tight">
                  Vorsorge <br />
                  <span className="text-[#e62e7a]">Brustultraschall</span>
                </h4>
              </div>
              <div className="h-[1px] w-12 bg-[#e62e7a]/30 group-hover:w-20 transition-all duration-500" />
              <p className="text-slate-600 font-serif italic text-base md:text-lg leading-relaxed">
                Der Brustultraschall erkennt Veränderungen, bevor diese getastet werden können.
              </p>
            </div>
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>

      {/* --- GRID КАРТОЧЕК --- */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {previewCards.map((card, idx) => (
          <motion.div
            key={card.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ y: -10 }}
            onClick={() => handleNavigation(card.id)}
            className="group p-8 md:p-10 rounded-[40px] bg-white border border-slate-100 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.05)] hover:shadow-[0_40px_80px_-15px_rgba(230,46,122,0.15)] transition-all duration-500 cursor-pointer flex flex-col justify-between overflow-hidden relative"
          >
            <div className="space-y-6 relative z-10">
              <div className="w-14 h-14 rounded-2xl bg-rose-50 flex items-center justify-center text-[#e62e7a] group-hover:bg-[#e62e7a] group-hover:text-white transition-all duration-500">
                <card.icon className="w-7 h-7" />
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-serif italic text-slate-900 leading-tight">
                  {card.title}
                </h4>
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#e62e7a]/60">
                  {card.subtitle}
                </p>
              </div>
              <p className="text-slate-500 font-serif italic text-base leading-relaxed line-clamp-4">
                {card.text}
              </p>
            </div>
            <div className="pt-8 flex items-center gap-3 text-[#e62e7a] font-black uppercase text-[10px] tracking-widest border-t border-rose-50 mt-8 relative z-10">
              <span className="group-hover:mr-2 transition-all">{card.linkText}</span>
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};