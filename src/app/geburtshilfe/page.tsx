"use client";

import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Heart, Baby, ClipboardList, Thermometer, Sparkles, Activity } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";

import { BeratungGeneral } from "@/components/beratung/BeratungGeneral";
import { Kinderwunsch } from "@/components/beratung/Kinderwunsch";
import { InDerSchwangerschaft } from "@/components/beratung/InDerSchwangerschaft";
import { MutterschaftsRichtlinien } from "@/components/beratung/MutterschaftsRichtlinien"
import { IgelVorsorge } from "@/components/beratung/subtabs/IgelVorsorge";
import { Pranataldiagnostik } from "@/components/beratung/Pranataldiagnostik";
import { NachDerGeburt } from "@/components/beratung/NachDerGeburt";

const tabsData = [
  {
    id: "beratung",
    label: "Beratung",
    icon: Heart,
    title: "Individuelle",
    subtitle: "begleitung",
    slogan: "Wissenschaftliche Erkenntnisse für Ihre Schwangerschaft."
  },
  {
    id: "kinderwunsch",
    label: "Kinderwunsch",
    icon: Baby,
    title: "Erfüllter",
    subtitle: "kinderwunsch",
    slogan: "Ganzheitliche Abklärung für Frau und Mann."
  },
  {
    id: "schwangerschaft",
    label: "In der Schwangerschaft",
    icon: Baby,
    title: "Herzlichen",
    subtitle: "glückwunsch",
    slogan: "Ein neuer und aufregender Lebensabschnitt beginnt."
  },
  {
  id: "richtlinien",
  label: "Mutterschafts-Richtlinien",
  icon: ClipboardList,
  title: "Vorsorge",
  subtitle: "richtlinien",
  slogan: "Strukturierte Begleitung für eine sichere Schwangerschaft."
},
  {
    id: "igel",
    label: "Vorsorgeuntersuchungen (IGeL)",
    icon: Sparkles,
    title: "Zusätzliche",
    subtitle: "sicherheit",
    slogan: "Individuelle Gesundheitsleistungen für Ihre Vorsorge."
  },
  {
    id: "praenatal",
    label: "Pränataldiagnostik",
    icon: Activity,
    title: "Pränatal",
    subtitle: "diagnostik",
    slogan: "Sicherheit und Gewissheit für die Entwicklung Ihres Kindes."
  },
  {
    id: "geburt",
    label: "Nach der Geburt",
    icon: Heart,
    title: "Nach der",
    subtitle: "geburt",
    slogan: "Liebevolle Begleitung für die Zeit nach dem großen Ereignis."
  },
];

function GeburtshilfeContent() {
  const searchParams = useSearchParams();
    const router = useRouter();
  const tabFromUrl = searchParams.get("tab") || "beratung";
  
    const [activeTab, setActiveTab] = useState(tabFromUrl);
    const [tabsVisible, setTabsVisible] = useState(false);
  
    useEffect(() => {
      const t = setTimeout(() => setTabsVisible(true), 600);
      return () => clearTimeout(t);
    }, []);
  
    const handleTabChange = (value: string) => {
      setActiveTab(value);
  
      const params = new URLSearchParams(searchParams.toString());
      params.set("tab", value);
      params.delete("sub");
  
      router.push(`?${params.toString()}`, { scroll: false });
    };
  
    const currentTab = tabsData.find(t => t.id === activeTab) || tabsData[0];

  return (
    <div className="min-h-screen bg-[#FCFBFA]">
      <Header />
      <section className="relative h-[65vh] md:h-[75vh] flex items-center overflow-hidden bg-gradient-to-r from-white via-white/20 to-transparent">
        <motion.div initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1.5 }} className="absolute inset-0 z-0">
          <Image src="/images/hero-bg.jpg" alt="Geburtshilfe" fill className="object-cover opacity-60 mix-blend-overlay" priority />
          <div className="absolute inset-0 bg-gradient-to-b from-pink-900/10 via-transparent to-[#FCFBFA]" />
        </motion.div>

        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4, duration: 1 }} className="max-w-5xl">
            <span className="inline-block text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-black text-[#e62e7a] mb-4">Empathie & Expertise</span>
            <AnimatePresence mode="wait">
              <motion.h1 key={activeTab} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.6 }} className="text-5xl md:text-8xl font-serif text-slate-800 leading-[1.0] tracking-tighter relative pb-4">
                {currentTab.title} <br />
                <span className="text-[#e62e7a] italic ml-0 md:ml-12 inline-block pt-2 md:pt-0">{currentTab.subtitle}...</span>
              </motion.h1>
            </AnimatePresence>
            <div className="mt-12 flex items-center gap-6">
              <div className="h-[1px] w-20 bg-[#e62e7a]/40 hidden md:block" />
              <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-slate-600">
                {currentTab.slogan}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

        <main className="container mx-auto px-4 md:px-8 -mt-16 relative z-20 pb-20">
          {tabsVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onAnimationComplete={() => setTabsVisible(true)}
            >
              <Tabs
                value={activeTab}
                onValueChange={handleTabChange}
                className="space-y-8 md:space-y-10 flex justify-center"
              >
              <div className="flex justify-center z-30 px-0 md:px-4 w-full">
                <TabsList
                  className="h-auto bg-white/80 backdrop-blur-xl p-1.5 md:p-2  flex flex-wrap justify-center gap-1.5 md:gap-2  mx-auto rounded-[1rem] 2xl:rounded-full xl:rounded-[1.5rem] shadow-[0_20px_50px_-12px_rgba(230,46,122,0.12)] border border-rose-100/50"
                  style={{ height: 'max-content' }}
                >
                  {tabsData.map((tab) => (
                    <TabsTrigger
                      key={tab.id}
                      value={tab.id}
                      className="group relative px-5 md:px-10 py-3.5 md:py-4 rounded-[1.2rem] md:rounded-full text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-black transition-all duration-500 ease-out data-[state=active]:text-white data-[state=inactive]:text-slate-500 data-[state=inactive]:hover:text-[#e62e7a]"
                    >
                      <div className="absolute inset-0 opacity-0 group-data-[state=active]:opacity-100 bg-gradient-to-br from-[#e62e7a] to-[#f05697] shadow-[0_8px_20px_rgba(230,46,122,0.25)] transition-all duration-500 scale-[0.98] group-data-[state=active]:scale-100 rounded-[1.1rem] md:rounded-full" />

                      <span className="relative z-10 flex items-center justify-center gap-2">
                        <tab.icon
                          className="w-3.5 h-3.5 md:w-4 md:h-4 transition-colors duration-500 group-data-[state=active]:text-white group-hover:group-data-[state=inactive]:text-[#e62e7a]"
                        />
                        <span className="leading-none">{tab.label}</span>
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>
                <div className="max-w-6xl w-full mx-auto">
                  <TabsContent value="beratung" className="outline-none"><BeratungGeneral /></TabsContent>
                  <TabsContent value="kinderwunsch" className="outline-none"><Kinderwunsch /></TabsContent>
                  <TabsContent value="schwangerschaft" className="outline-none"><InDerSchwangerschaft /></TabsContent>
                  <TabsContent value="richtlinien" className="outline-none"><MutterschaftsRichtlinien /></TabsContent>
                  <TabsContent value="igel" className="outline-none"><IgelVorsorge /></TabsContent>
                <TabsContent value="praenatal" className="outline-none"><Pranataldiagnostik /></TabsContent>
                <TabsContent value="geburt" className="outline-none"><NachDerGeburt /></TabsContent>
                </div>
              </Tabs>
            </motion.div>
          )}
        </main>
      <Footer />
    </div>
  );
}

export default function GeburtshilfePage() {
  return <Suspense><GeburtshilfeContent /></Suspense>;
}
