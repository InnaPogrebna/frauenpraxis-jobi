"use client";

import { useEffect, useState, Suspense } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Users, Camera, Clock, MapPin } from "lucide-react";
import { AboutSection } from "@/components/praxis/AboutSection";
import { TeamSection } from "@/components/praxis/TeamSection";
import { HoursSection } from "@/components/praxis/HoursSection";
import { LocationSection } from "@/components/praxis/LocationSection";
import PhotoSwipeLightbox from 'photoswipe/lightbox';
import 'photoswipe/dist/photoswipe.css';

export default function PraxisPage() {
  const [tabsVisible, setTabsVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setTabsVisible(true), 600);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (!tabsVisible) return;

    const lightbox = new PhotoSwipeLightbox({
      gallery: '#praxis-gallery',
      children: 'a',
      pswpModule: () => import('photoswipe'),
    });

    lightbox.init();

    return () => {
      lightbox.destroy();
    };
  }, [tabsVisible]);

  return (
    <Suspense fallback={<div className="min-h-screen bg-[#FCFBFA]" />}>
      <div className="min-h-screen bg-[#FCFBFA]">
        <Header />
        {/* Hero Section */}
        <section className="relative h-[60vh] md:h-[70vh] flex items-center overflow-hidden bg-gradient-to-r from-white via-white/20 to-transparent">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/images/hero-bg.jpg"
              alt="Praxis Background"
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
                Wohlbefinden & Kompetenz
              </span>

              <h1 className="text-4xl md:text-8xl sm:text-6xl font-serif text-slate-800 leading-[0.8] tracking-tighter relative">
                Unsere <br />
                <span className="text-slate-950 sm:text-[#e62e7a] italic ml-4 md:ml-12 inline-block">
                  Praxis...
                </span>
                <span className="absolute -inset-2 bg-white/20 blur-3xl -z-10 rounded-full" />
              </h1>

              <div className="flex flex-col md:flex-row md:items-center gap-6 mt-12">
                <div className="h-[1px] w-20 bg-[#e62e7a]/40 hidden md:block" />

                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] font-bold text-slate-600 leading-relaxed max-w-md">
                  Fachärztliche Expertise für Frauenheilkunde <br className="hidden md:block" />
                  <span className="text-[#e62e7a]/80 italic">Heilbronn — Exklusiv für Sie.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        <main className="container mx-auto px-4 md:px-8 -mt-20 relative z-20 pb-20">
          {tabsVisible && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              onAnimationComplete={() => setTabsVisible(true)}
            >
              <Tabs defaultValue="uber-uns" className="space-y-8 md:space-y-10 flex justify-center">
                <div className="flex justify-center z-30 px-0 md:px-4 w-full">
                  <TabsList
                    className="h-auto bg-white/80 backdrop-blur-xl p-1.5 md:p-2 grid grid-cols-2 gap-1.5 w-full max-w-[340px] mx-auto
                  md:flex md:w-auto md:max-w-none md:gap-2 rounded-[1rem] md:rounded-full"
                    style={{ height: 'max-content' }}
                  >
                    {[
                      { id: "uber-uns", label: "Über uns", icon: Users },
                      { id: "praxisteam", label: "Praxisteam", icon: Camera },
                      { id: "offnungszeiten", label: "Öffnungszeiten", icon: Clock },
                      { id: "anfahrt", label: "Anfahrt", icon: MapPin },
                    ].map((tab) => (
                      <TabsTrigger
                        key={tab.id}
                        value={tab.id}
                        className="group relative w-full md:w-auto px-4 md:px-10 py-3.5 md:py-4 rounded-[1rem] md:rounded-full text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-black transition-all duration-500 ease-out data-[state=active]:text-white data-[state=inactive]:text-slate-500 data-[state=inactive]:hover:text-[#e62e7a]"
                      >
                        <div className="absolute inset-0 opacity-0 group-data-[state=active]:opacity-100 bg-gradient-to-br from-[#e62e7a] to-[#f05697] shadow-[0_8px_20px_rgba(230,46,122,0.25)] transition-all duration-500 scale-[0.98] group-data-[state=active]:scale-100 rounded-[0.9rem] md:rounded-full" />

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
                <div className="mx-auto">
                  <TabsContent value="uber-uns" className="mt-0 outline-none">
                    <AboutSection />
                  </TabsContent>
                  <TabsContent value="praxisteam" className="mt-12 md:mt-24 outline-none">
                    <TeamSection />
                  </TabsContent>
                  <TabsContent value="offnungszeiten" className="mt-12 md:mt-24 outline-none">
                    <HoursSection />
                  </TabsContent>
                  <TabsContent value="anfahrt" className="mt-12 md:mt-24 outline-none">
                    <LocationSection />
                  </TabsContent>
                </div>
              </Tabs>
            </motion.div>
          )}
        </main>
        {tabsVisible && (
          <Footer />
        )}
      </div>
    </Suspense>
  );
}