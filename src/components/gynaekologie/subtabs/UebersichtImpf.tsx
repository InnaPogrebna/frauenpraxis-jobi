"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { Users, HelpCircle, Info } from "lucide-react";
import { ExpandableText } from "@/components/ExpandableText";
import { InfoTextCard } from "@/components/InfoTextCard";

export const UebersichtImpf = () => {
  const router = useRouter();

  const handleNavigation = (sub: string) => {
    const params = new URLSearchParams();
    params.set("tab", "impfcheck");
    params.set("sub", sub);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <div className="space-y-12 md:space-y-16">
      {/* Intro Section */}
      <div className="max-w-3xl space-y-6">
        <h4 className="text-[#e62e7a] font-sans uppercase text-[10px] md:text-xs tracking-[0.4em] font-black">
          Impf-Check
        </h4>
        <p className="text-slate-900 font-serif text-xl md:text-2xl leading-relaxed border-l-4 border-[#e62e7a] pl-8">
          Schutzimpfungen gehören zu den wichtigsten und effektivsten
          Vorsorgemaßnahmen der modernen Medizin.
        </p>
        <p className="text-slate-600 font-serif text-lg leading-relaxed">
          Dennoch bestehen in Deutschland beträchtliche Impflücken –
          möglicherweise auch aufgrund mangelnder Aufklärung oder
          Fehlinformationen.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-10">
        {/* Wer soll geimpft werden */}
        <InfoTextCard
          icon={<Users className="w-8 h-8" />}
          title="Wer soll geimpft werden?"
          titleClassName="text-[#e62e7a]"
          onClick={() => handleNavigation("wer")}
        >
          <>
            <ExpandableText>
              <div className="space-y-6 relative z-10">
                <div className="space-y-4 text-slate-500 font-serif text-base md:text-lg leading-relaxed">
                  <p className="font-bold text-slate-700">
                    Jugendliche (12–17 Jahre) sowie Mädchen im Rahmen der HPV-Impfung
                  </p>
                  <p>
                    Empfohlen werden Auffrischimpfungen gegen Tetanus, Diphtherie,
                    Pertussis (Keuchhusten) und Poliomyelitis (Kinderlähmung) sowie
                    zwei Impfungen gegen Masern, Mumps und Röteln. Außerdem sollten
                    die dreifache Hepatitis-B-Impfung und die zweimalige
                    Varizellen-Impfung (Windpocken) vervollständigt oder
                    nachgeholt werden. Gegebenenfalls werden auch Impfungen gegen
                    Meningokokken oder Pneumokokken empfohlen.
                  </p>
                  <p>
                    Die Ständige Impfkommission (STIKO) am Robert Koch-Institut
                    empfiehlt zudem eine generelle HPV-Impfung für Mädchen im Alter
                    von 12 bis 17 Jahren zur Vorbeugung von
                    Gebärmutterhalskrebs. Die Kosten werden von den gesetzlichen
                    Krankenkassen übernommen.
                  </p>
                </div>
              </div>
            </ExpandableText>
          </>
        </InfoTextCard>

        {/* Wussten Sie schon */}
        <InfoTextCard
          icon={<HelpCircle className="w-8 h-8" />}
          title="Wussten Sie schon?"
          titleClassName="text-[#e62e7a]"
          onClick={() => handleNavigation("wissen")}
        >
          <>
            <ExpandableText>
              <div className="space-y-6 relative z-10">
                <div className="space-y-4 text-slate-500 font-serif text-base md:text-lg leading-relaxed">
                  <p className="font-bold text-slate-700">
                    Impfungen schützen nicht nur Sie selbst
                  </p>
                  <p>
                    Impfungen schützen nicht nur die geimpfte Person, sondern auch
                    die Menschen, mit denen wir täglich in Kontakt stehen.
                    Ungeimpfte Personen können Erreger übertragen, ohne selbst zu
                    erkranken.
                  </p>
                  <p>
                    Weltweit sterben jedes Jahr hunderttausende Menschen an
                    vermeidbaren Infektionskrankheiten wie Masern oder
                    Keuchhusten. Impfungen sind daher ein wichtiger Beitrag zum
                    Schutz der gesamten Bevölkerung.
                  </p>
                  <p>
                    Bestimmte Infektionen wie Röteln oder Windpocken können in der
                    Schwangerschaft auf das ungeborene Kind übertragen werden und
                    schwerwiegende Folgen haben.
                  </p>
                </div>
              </div>
            </ExpandableText>
          </>
        </InfoTextCard>
      </div>

      {/* External Link */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 rounded-[35px] bg-rose-50/50 border border-rose-100 flex items-center gap-4 shadow-sm"
      >
        <Info className="text-[#e62e7a] w-6 h-6 shrink-0" />
        <p className="text-slate-700 italic font-serif text-base">
          Weitere Informationen finden Sie unter{" "}
          <a
            href="https://www.impfen-info.de"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#e62e7a] underline font-bold hover:text-[#f05697] transition-colors"
          >
            www.impfen-info.de
          </a>
        </p>
      </motion.div>
    </div>
  );
};