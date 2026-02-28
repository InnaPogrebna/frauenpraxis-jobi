"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Button } from "@/components/ui/button";
import { InfoCards } from "@/components/InfoCards";
import { ArrowUpRight, Phone } from "lucide-react";

export default function FinalRefinedDesign() {
  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900 selection:bg-[#e62e7a]/10">
      <Header forceScrolled={false} />
      <main className="flex-grow">
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 overflow-hidden">
          <motion.div
            initial={{ scale: 1.2, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0 z-0"
          >
            <Image
              src="/images/frauenpraxis-jobi-st-header.jpg"
              alt="Nana Jobi Background"
              fill
              className="object-cover object-[25%_center] md:object-center"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent z-10" />
          </motion.div>

          <div className="container mx-auto px-4 sm:px-6 lg:px-8 z-20">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-3xl space-y-10"
            >
              <span className="inline-block text-[10px] md:text-[12px] uppercase tracking-[0.2em] sm:tracking-[0.4em] font-black text-slate-400 sm:text-[#e62e7a]">
                Fachärztin für Frauenheilkunde
              </span>

              <div className="space-y-4 sm:space-y-6">
                <h1 className="text-4xl md:text-7xl sm:text-6xl font-serif text-slate-800 leading-[0.8] tracking-tighter">
                  Herzlich <br />
                  <span className="italic text-slate-950 sm:text-[#e62e7a] ml-3 sm:ml-6">Willkommen...</span>
                </h1>

                <div className="space-y-6 text-base md:text-lg sm:text-xl text-slate-800 leading-relaxed font-normal max-w-2xl">
                  <p>
                    Unserem gesamten Team ist es besonders wichtig, dass Sie sich menschlich und fachlich bei uns gut aufgehoben fühlen. Unsere Behandlung stimmen wir ganz auf Ihre individuellen Beschwerden und Bedürfnisse ab, um über alle Lebensabschnitte hinweg das beste Ergebnis für Sie zu erzielen.
                  </p>
                  <p className="border-l-2 border-[#e62e7a]/30 pl-6 md:pl-8 italic text-slate-800">
                    Unsere Praxis verfolgt dabei einen ganzheitlichen Ansatz. Neben den klassischen und modernen schulmedizinischen Verfahren liegen uns die präventivmedizinischen Aspekte der Medizin besonders am Herzen.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pt-10 pb-4 w-full">
              <div className="relative group w-full lg:w-auto">
                <div className="absolute -inset-1 bg-[#e62e7a] rounded-full blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
                <Link href="/kontakt">
                  <Button className="group relative w-full lg:w-auto h-14 sm:h-16 md:h-20 px-8 sm:px-10 md:px-14 rounded-full bg-slate-950 hover:bg-[#e62e7a] text-white transition-all duration-500 uppercase tracking-[0.2em] text-[11px] font-black shadow-xl flex items-center justify-center">
                    Termin vereinbaren
                    <div className="ml-4 bg-white/10 p-2 rounded-full shadow-inner">
                      <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5 text-white transition-transform duration-500 ease-out group-hover:rotate-45" />
                    </div>
                  </Button>
                </Link>
              </div>

              <div className="flex flex-col items-end text-right ml-auto space-y-3">
                <div className="flex items-center gap-4 text-2xl md:text-5xl font-serif text-slate-900 tracking-tighter">
                  <Phone className="w-6 h-6 text-slate-800" />
                  <a href="tel:+49713142570" className="hover:text-slate-800 transition-colors">
                    0 71 31 - 42 57 - 0
                  </a>
                </div>
                <p className="text-[10px] md:text-[11px] uppercase tracking-[0.05em] sm:tracking-[0.15em] text-slate-800 font-bold max-w-sm leading-relaxed">
                  Bei Fragen oder Terminvereinbarungen stehen wir Ihnen unter der o.g. Nummer <br />
                  <span className="text-slate-800">zu unseren Öffnungszeiten zur Verfügung.</span>
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* --- INFO CARDS --- */}
        <section className="py-12 md:py-40 bg-white relative z-30">
          <div className="container mx-auto px-4 md:px-6">
            <InfoCards />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}