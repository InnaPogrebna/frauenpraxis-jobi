"use client";

import { motion } from "framer-motion";
import {
  Info,
  AlertTriangle,
  Users2,
  ShieldCheck,
  HeartPulse,
  ExternalLink,
} from "lucide-react";
import { ExpandableText } from "@/components/ExpandableText";
import { InfoTextCard } from "@/components/InfoTextCard";

export const WusstenSieSchon = () => {
  const facts = [
    {
      title: "Jugendliche von 12–17 Jahren (Kassenleistung)",
      icon: Users2,
      text: `
Empfohlen werden Auffrischimpfungen gegen Tetanus, Diphtherie, Pertussis (Keuchhusten) 
und Poliomyelitis (Kinderlähmung). Zwei Impfungen gegen Masern, Mumps und Röteln 
sollten erfolgt sein. Die Hepatitis-B-Impfserie (3 Impfungen) sowie die 
zweimalige Varizellen-Impfung (Windpocken) sollten vervollständigt oder 
nachgeholt werden. Gegebenenfalls werden Impfungen gegen Meningokokken 
oder Pneumokokken empfohlen.
      `,
    },
    {
      title: "Mädchen zwischen 12–17 Jahren (HPV)",
      icon: ShieldCheck,
      text: `
Die Ständige Impfkommission (STIKO) am Robert Koch-Institut empfiehlt 
eine generelle Impfung gegen humane Papillomaviren (HPV) zur Vorbeugung 
von Gebärmutterhalskrebs. Die Kosten werden von den gesetzlichen 
Krankenkassen übernommen.
      `,
    },
    {
      title: "Frauen mit Kinderwunsch",
      icon: HeartPulse,
      text: `
Ein vollständiger Impfschutz ist besonders wichtig, insbesondere gegen 
Pertussis (Keuchhusten).

Besteht Immunität gegen Mumps, Masern, Röteln oder Varizellen 
(Erkrankung oder Impfung), werden Antikörper über die Plazenta auf das 
Neugeborene übertragen („Nestschutz“).

Gegen Keuchhusten besteht jedoch kein ausreichender Nestschutz. 
Daher wird die Impfung aller engen Kontaktpersonen mit dem 
Kombinationsimpfstoff Tetanus-Diphtherie-Pertussis empfohlen.
      `,
    },
    {
      title: "Schwangere Frauen",
      icon: AlertTriangle,
      text: `
Lebendimpfstoffe (z.B. gegen Masern, Mumps, Röteln oder Windpocken) 
sind während der Schwangerschaft kontraindiziert.

Totimpfstoffe können nach individueller Nutzen-Risiko-Abwägung 
verabreicht werden. Nach den Mutterschaftsrichtlinien wird die 
Influenza-Impfung ab dem zweiten Trimester empfohlen.

Stillen stellt keine Kontraindikation für Impfungen dar.
      `,
    },
    {
      title: "Erwachsene (18–59 Jahre) & ab 60 Jahren",
      icon: Info,
      text: `
Standardimpfungen gegen Tetanus, Diphtherie und Pertussis 
sollten alle zehn Jahre aufgefrischt werden.

Alle nach 1970 geborenen Erwachsenen sollten einen vollständigen 
Masernschutz besitzen. 

Ab 60 Jahren wird eine einmalige Pneumokokken-Impfung empfohlen. 
Zusätzlich wird die jährliche Influenza-Impfung angeraten.
      `,
    },
    {
      title: "Vor der Reise",
      icon: ExternalLink,
      text: `
Wir verfügen über aktuelle Impfempfehlungen für alle Reiseländer weltweit 
und erstellen Ihnen auf Wunsch einen individuellen Impfplan.

Bitte bringen Sie Ihren Impfpass in die Praxis mit. 
Nicht dokumentierte Impfungen gelten als nicht erfolgt 
und sollten entsprechend nachgeholt werden.
      `,
    },
  ];

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
        {facts.map((fact) => {
          const Icon = fact.icon;

          return (
            <InfoTextCard
              key={fact.title}
              icon={<Icon className="w-8 h-8" />}
              title={fact.title}
              titleClassName="text-slate-800 text-lg sm:text-xl"
            >
              <ExpandableText>
                <p className="text-slate-600 font-serif text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {fact.text}
                </p>
              </ExpandableText>
            </InfoTextCard>
          );
        })}
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="p-10 rounded-[40px] bg-rose-50/50 border border-rose-100 text-center space-y-4"
      >
        <p className="text-slate-700 font-serif italic text-lg">
          Weitere Informationen erhalten Sie bei der Bundeszentrale für
          gesundheitliche Aufklärung (BZgA) unter{" "}
          <a
            href="https://www.impfen-info.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e62e7a] font-bold underline"
          >
            www.impfen-info.de
          </a>{" "}
          zum Thema „Impfschutz für die ganze Familie“.
        </p>
      </motion.div>
    </div>
  );
};