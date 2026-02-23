"use client";

import { useState, useEffect, Suspense } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ShieldCheck, Pill, Thermometer, Sparkles, Activity } from "lucide-react";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MainVorsorge } from "@/components/gynaekologie/MainVorsorge";
import { EmpfaengnisSection } from "@/components/gynaekologie/EmpfaengnisSection";
import { WechseljahreSection } from "@/components/gynaekologie/WechseljahreSection";
import { ErweiterteVorsorge } from "@/components/gynaekologie/ErweiterteVorsorge";
import { ImpfCheck } from "@/components/gynaekologie/ImpfCheck";
const tabsData = [
  {
    id: "krebsvorsorge",
    label: "Krebsvorsorge",
    icon: ShieldCheck,
    title: "Krebs",
    subtitle: "vorsorge",
    slogan: "Früherkennung für Ihre Sicherheit und langfristige Gesundheit."
  },
  {
    id: "verhuetung",
    label: "Empfängnisverhütung",
    icon: Pill,
    title: "Empfängnis",
    subtitle: "verhütung",
    slogan: "Individuelle Beratung für Ihre Sicherheit und Selbstbestimmung."
  },
  {
    id: "wechseljahre",
    label: "Wechseljahre",
    icon: Thermometer,
    title: "Wechsel",
    subtitle: "jahre",
    slogan: "Ganzheitliche Begleitung in einer neuen Lebensphase."
  },
  {
    id: "erweitert",
    label: "Erweiterte Vorsorge",
    icon: Sparkles,
    title: "Erweiterte",
    subtitle: "Vorsorge",
    slogan: "Zusätzliche Diagnostik für ein Maximum an Gewissheit."
  },
  {
    id: "impfcheck",
    label: "Impf-Check",
    icon: Activity,
    title: "Impf",
    subtitle: "Check",
    slogan: "Vorsorglicher Schutz durch moderne Impfkonzepte."
  },
];

function GynaekologieContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const tabFromUrl = searchParams.get("tab") || "krebsvorsorge";

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

        {/* Hero Section */}
        <section className="relative h-[65vh] md:h-[75vh] flex items-center overflow-hidden bg-gradient-to-r from-white via-white/20 to-transparent">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/images/hero-bg.jpg"
              alt="Gynäkologie Background"
              fill
              className="object-cover opacity-60 mix-blend-overlay"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-pink-900/20 via-transparent to-[#FCFBFA]" />
          </motion.div>

          <div className="container mx-auto px-4 md:px-8 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-5xl"
            >
              <span className="inline-block text-[10px] md:text-[12px] uppercase tracking-[0.4em] font-black text-[#e62e7a] mb-4">
                Wohlbefinden & Vorsorge
              </span>

              <AnimatePresence mode="wait">
                <motion.h1
                  key={activeTab}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  className="text-5xl md:text-8xl font-serif text-slate-800 leading-[1.0] md:leading-[0.9] tracking-tighter relative pb-4"
                >
                  {currentTab.title} <br />
                  <span className="text-slate-950 md:text-[#e62e7a] italic ml-0 md:ml-8 inline-block pt-2 md:pt-0">
                    {currentTab.subtitle}...
                  </span>
                  <span className="absolute -inset-2 bg-white/20 blur-3xl -z-10 rounded-full" />
                </motion.h1>
              </AnimatePresence>

              <div className="flex flex-col md:flex-row md:items-center gap-6 mt-12">
                <div className="h-[1px] w-20 bg-[#e62e7a]/40 hidden md:block" />

                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className="max-w-md"
                  >
                    <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-slate-600 leading-relaxed">
                      {currentTab.slogan} <br className="hidden md:block" />
                      <span className="text-[#e62e7a]/80 italic">Heilbronn — Für Ihre Gesundheit.</span>
                    </p>
                  </motion.div>
                </AnimatePresence>
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
                  <TabsContent value="krebsvorsorge" className="outline-none">
                    <MainVorsorge />
                  </TabsContent>
                  <TabsContent value="verhuetung" className="outline-none">
                    <EmpfaengnisSection />
                  </TabsContent>
                  <TabsContent value="wechseljahre" className="outline-none">
                    <WechseljahreSection />
                  </TabsContent>
                  <TabsContent value="erweitert" className="outline-none">
                    <ErweiterteVorsorge />
                  </TabsContent>
                  <TabsContent value="impfcheck" className="outline-none">
                    <ImpfCheck />
                  </TabsContent>
                </div>
              </Tabs>
            </motion.div>
          )}
        </main>
        <Footer />
      </div>
  );
}
export default function GynaekologiePage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FCFBFA] flex items-center justify-center">Laden...</div>}>
      <GynaekologieContent />
    </Suspense>
  );
}