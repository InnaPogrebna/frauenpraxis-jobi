"use client";

import { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs"; // Импортируем Tabs
import { LayoutGrid, Users, HelpCircle, Plane } from "lucide-react";
import { UebersichtImpf } from "./subtabs/UebersichtImpf";
import { WerSollGeimpftWerden } from "./subtabs/WerSollGeimpftWerden";
import { WusstenSieSchon } from "./subtabs/WusstenSieSchon";
import { VorDerReise } from "./subtabs/VorDerReise";

const subTabs = [
  { id: "uebersicht", label: "Übersicht", icon: LayoutGrid },
  { id: "wer", label: "Wer soll geimpft werden?", icon: Users },
  { id: "wissen", label: "Wussten sie schon?", icon: HelpCircle },
  { id: "reise", label: "Vor der Reise", icon: Plane },
];

export const ImpfCheck = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const activeSub = searchParams.get("sub") || "uebersicht";

  const handleSubChange = (value: string) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tab", "impfcheck");
    params.set("sub", value);
    router.push(`?${params.toString()}`, { scroll: false });
  };

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FCFBFA] flex items-center justify-center">Laden...</div>}>
      <div className="space-y-10">
        {/* --- SUB-NAVIGATION --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Tabs value={activeSub} onValueChange={handleSubChange}
            className="space-y-8 md:space-y-10 flex justify-center">
            <div className="flex justify-center z-30 px-0 md:px-4 w-full">
              <TabsList className="bg-white/50 backdrop-blur-md p-1.5 h-auto rounded-2xl border
                border-rose-100/50 shadow-sm flex flex-wrap justify-center gap-1"
                style={{ height: 'max-content' }}>
                {subTabs.map((sub) => (
                  <TabsTrigger
                    key={sub.id}
                    value={sub.id}
                    className="px-5 py-2.5 rounded-xl text-[11px] uppercase tracking-wider font-black data-[state=active]:bg-[#e62e7a] data-[state=active]:text-white transition-all duration-300"
                  >
                    <sub.icon className="w-3.5 h-3.5 mr-2" />
                    {sub.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
          </Tabs>
        </motion.div>
        {/* --- CONTENT AREA --- */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSub}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: "circOut" }}
            >
              {activeSub === "uebersicht" && <UebersichtImpf />}
              {activeSub === "wer" && <WerSollGeimpftWerden />}
              {activeSub === "wissen" && <WusstenSieSchon />}
              {activeSub === "reise" && <VorDerReise />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </Suspense>
  );
};