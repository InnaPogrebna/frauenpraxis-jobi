"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  ShieldAlert,
  Baby,
  Users,
  HeartPulse,
  Info,
} from "lucide-react";
import { ExpandableText } from "@/components/ExpandableText";
import { InfoTextCard } from "@/components/InfoTextCard";

export const WerSollGeimpftWerden = () => {
  const groups = [
    {
      title: "Jugendliche von 12–17 Jahren (Kassenleistung)",
      icon: Users,
      content: `
Empfohlen werden Auffrischimpfungen gegen Tetanus, Diphtherie, Pertussis (Keuchhusten) 
und Poliomyelitis (Kinderlähmung). Zusätzlich sollten zwei Impfungen gegen Masern, 
Mumps und Röteln erfolgt sein. Die dreifache Hepatitis-B-Impfung sowie die zweimalige 
Varizellen-Impfung (Windpocken) sollten vervollständigt oder nachgeholt werden. 
Gegebenenfalls werden Impfungen gegen Meningokokken oder Pneumokokken empfohlen.
      `,
    },
    {
      title: "Mädchen zwischen 12–17 Jahren (HPV)",
      icon: ShieldAlert,
      content: `
Die Ständige Impfkommission (STIKO) am Robert Koch-Institut empfiehlt eine 
generelle Impfung gegen humane Papillomaviren (HPV) für alle Mädchen im Alter 
von 12 bis 17 Jahren zur Vorbeugung von Gebärmutterhalskrebs. 
Die Kosten werden von den gesetzlichen Krankenkassen übernommen.
      `,
    },
    {
      title: "Frauen mit Kinderwunsch",
      icon: HeartPulse,
      content: `
Ein vollständiger Impfschutz ist besonders wichtig, vor allem gegen Pertussis 
(Keuchhusten). Besteht Immunität gegen Mumps, Masern, Röteln oder Varizellen 
(Erkrankung oder Impfung), werden Antikörper über die Plazenta auf das 
Neugeborene übertragen („Nestschutz“). 
Gegen Keuchhusten besteht jedoch kein ausreichender Nestschutz, 
daher wird die Impfung aller engen Kontaktpersonen empfohlen.
      `,
    },
    {
      title: "Schwangere Frauen",
      icon: Baby,
      content: `
Lebendimpfstoffe (z.B. gegen Masern, Mumps, Röteln oder Windpocken) 
sind während der Schwangerschaft kontraindiziert. 
Totimpfstoffe können nach individueller Nutzen-Risiko-Abwägung verabreicht werden. 
Nach den Mutterschaftsrichtlinien wird die Grippe-Impfung 
ab dem zweiten Trimester empfohlen. Stillen ist keine Kontraindikation für Impfungen.
      `,
    },
    {
      title: "Erwachsene (18–59 Jahre) & ab 60 Jahren",
      icon: CheckCircle2,
      content: `
Standardimpfungen gegen Tetanus, Diphtherie und Pertussis sollten 
alle zehn Jahre aufgefrischt werden. 
Alle nach 1970 Geborenen sollten einen vollständigen Masernschutz besitzen. 
Ab 60 Jahren wird eine einmalige Pneumokokken-Impfung empfohlen. 
Zusätzlich wird die jährliche Influenza-Impfung angeraten.
      `,
    },
    {
      title: "Wussten Sie schon?",
      icon: Info,
      content: `
Impfungen schützen nicht nur die geimpfte Person, sondern auch das Umfeld. 
Ungeimpfte Personen können Krankheitserreger übertragen, ohne selbst zu erkranken.

Weltweit sterben jährlich hunderttausende Menschen an vermeidbaren 
Infektionskrankheiten wie Masern oder Keuchhusten.

Auch Erwachsene können sich mit typischen „Kinderkrankheiten“ infizieren – 
oft mit schwereren Komplikationen.

Infektionen wie Röteln oder Windpocken können während der Schwangerschaft 
auf das ungeborene Kind übertragen werden.

Moderne Impfstoffe gelten als sehr gut verträglich. 
Die Empfehlungen der STIKO am Robert Koch-Institut sind medizinischer Standard.

Wir beraten Sie gerne persönlich und erstellen gemeinsam mit Ihnen 
einen individuellen Impfplan.
Weitere Informationen finden Sie unter www.impfen-info.de
      `,
    },
  ];

  return (
    <div className="space-y-12">
      <div className="grid md:grid-cols-2 gap-8">
        {groups.map((group, idx) => {
          const Icon = group.icon;

          return (
            <InfoTextCard
              key={idx}
              icon={<Icon className="w-8 h-8" />}
              title={group.title}
              titleClassName="text-slate-800"
            >
              <ExpandableText>
                <p className="text-slate-600 font-serif text-base md:text-lg leading-relaxed whitespace-pre-line">
                  {group.content}
                </p>
              </ExpandableText>
            </InfoTextCard>
          );
        })}
      </div>
    </div>
  );
};