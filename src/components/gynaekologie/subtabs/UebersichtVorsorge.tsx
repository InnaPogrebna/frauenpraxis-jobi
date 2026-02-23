"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { ChevronRight, FlaskConical, ShieldCheck, Activity, Microscope, Zap } from "lucide-react";
import { InfoTextCard } from "@/components/InfoTextCard";
import { ExpandableText } from "@/components/ExpandableText";

export const UebersichtVorsorge = () => {
  const router = useRouter();

  const cards = [
    {
      id: "thinprep",
      icon: FlaskConical,
      title: "Optimierte Krebsfrüherkennung mit dem ThinPrep Test",
      description: "Das Zervixkarzinom ist die zweithäufigste Krebserkrankung der Frau unter 50 Jahren. In Deutschland erkranken jedes Jahr ca. 6500 Frauen an Gebärmutterhalskrebs. Die Krebsfrüherkennung (Pap-Test) hat zum Ziel, Zellveränderung möglichst früh zu erkennen, und wenn nötig, entsprechende Kontroll- und Therapiemaßnahmen einzuleiten. Einmal pro Jahr kann jede Frau eine Vorsorgeuntersuchung in Anspruch nehmen. Hierbei werden vom Gebärmutterhals Zellen entnommen und im Labor nach Anfärbung mikroskopisch untersucht.",
      link: "Weiterlesen: Optimierte Krebsfrüherkennung mit dem ThinPrep Test"
    },
    {
      id: "darmkrebs",
      icon: ShieldCheck,
      title: "Darmkrebsvorsorge",
      description: "Früh erkannt ist Darmkrebs besser heilbar. Darmkrebs tritt meist jenseits des 50. Lebensjahres auf. Frauen erkranken häufiger als Männer. Risikofaktoren sind Rauchen, übermäßiger Alkoholgenuss, falsche Ernährung (fettreich, ballaststoffarm=Fastfood) und zu wenig körperliche Bewegung. Manche Menschen sind jedoch auch ohne diese Risikofaktoren gefährdet.",
      link: "Weiterlesen: Darmkrebsvorsorge"
    },
    {
      id: "blasenkrebs",
      icon: Activity,
      title: "Früherkennung von Blasenkrebs",
      description: "Jährlich erkranken in Deutschland mehr als 28 000 Menschen an Harnblasenkrebs (Tendenz steigend). Die Früherkennung von Blasenkrebs gehört noch immer nicht zur routinemäßigen Krebsvorsorge. Mit dem NMP 22 Bladder Check steht eine einfache Möglichkeit zur Verfügung, Blasenkrebs in vielen Fällen frühzeitig zu diagnostizieren.",
      link: "Weiterlesen: Früherkennung von Blasenkrebs"
    },
    {
      id: "umfassend",
      icon: Microscope,
      title: "Umfassende Vorsorge für die Frau",
      description: "Ein Ultraschall des kleinen Beckens mit besonderen Fokus auf die Gebärmutter und die Eierstöcke, um zum Beispiel Muskelknoten und Zysten rechtzeitig zu erkennen. Der Brustultraschall erkennt Veränderungen, bevor diese getastet werden können.",
      link: "Mehr erfahren: Umfassende Vorsorge"
    }
  ];

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Intro */}
      <div className="max-w-3xl">
        <h4 className="text-[#e62e7a] font-sans uppercase text-[10px] md:text-xs tracking-[0.4em] font-black mb-4">
          Zusätzliche Sicherheit
        </h4>
        <p className="text-slate-600 font-serif italic text-xl md:text-2xl leading-relaxed">
          Über die gesetzliche Basisvorsorge hinaus bieten wir spezialisierte
          Untersuchungen für mehr Gewissheit.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6 md:gap-10">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <InfoTextCard
              key={card.id}
              icon={<Icon className="w-8 h-8" />}
              title={card.title}
              titleClassName="text-slate-900"
              onClick={() =>
                router.push(`?tab=erweitert&sub=${card.id}`, { scroll: false })
              }
              ctaLabel={card.link}
            >
              <ExpandableText>
                <p className="text-slate-600 mt-4 font-serif italic text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {card.description}
                </p>
              </ExpandableText>
            </InfoTextCard>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 md:p-16 rounded-[40px] bg-white border border-rose-100 shadow-[0_40px_100px_-20px_rgba(230,46,122,0.12)] relative overflow-hidden group"
      >
        <div className="absolute -right-10 -bottom-10 opacity-[0.05] text-[#e62e7a] -rotate-12 group-hover:rotate-0 transition-transform duration-1000">
          <Zap size={320} fill="currentColor" />
        </div>

        <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-[#e62e7a]">
              <div className="p-2 rounded-lg bg-rose-50">
                <Zap className="w-5 h-5 fill-current" />
              </div>
              <span className="uppercase tracking-[0.3em] font-black text-[10px]">
                Empfehlung
              </span>
            </div>

            <h4 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-[1.1] tracking-tighter">
              Individuelle <br />
              <span className="text-[#e62e7a]">Vorsorgeplanung</span>
            </h4>
          </div>

          <p className="text-slate-600 font-serif italic text-xl md:text-2xl leading-relaxed border-l-2 border-rose-100 pl-8">
            Gerne beraten wir Sie persönlich, welche Leistungen für Ihr Profil
            am sinnvollsten sind.
          </p>
        </div>

        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
};