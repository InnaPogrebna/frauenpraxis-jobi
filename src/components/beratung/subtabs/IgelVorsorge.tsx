"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Waves,
  Droplets,
  Microscope,
  Bug,
  Dna,
  Biohazard,
  ChevronLeft
} from "lucide-react";

import { UltraschallIgel } from "./igel/UltraschallIgel";
import { BlutzuckerIgel } from "./igel/BlutzuckerIgel";
import { ZytomegalieIgel } from "./igel/ZytomegalieIgel";
import { BStreptokokkenIgel } from "./igel/BStreptokokkenIgel";
import { ToxoplasmoseIgel } from "./igel/ToxoplasmoseIgel";
import { ListerioseIgel } from "./igel/ListerioseIgel";

const igelCategories = [
  { id: "ultraschall", title: "Ergänzender Ultraschall", icon: Waves, color: "rose" },
  { id: "blutzucker", title: "Blutzucker-Belastungstest", icon: Droplets, color: "slate" },
  { id: "streptokokken", title: "B-Streptokokken (35-38 SSW)", icon: Microscope, color: "rose" },
  { id: "toxoplasmose", title: "Toxoplasmose", icon: Bug, color: "slate" },
  { id: "zytomegalie", title: "Zytomegalie-Test", icon: Dna, color: "rose" },
  { id: "listeriose", title: "Listeriose", icon: Biohazard, color: "slate" },
];

export const IgelVorsorge = () => {
  const [selectedSub, setSelectedSub] = useState<string | null>(null);

  return (
    <div className="space-y-12">
      <AnimatePresence mode="wait">
        {!selectedSub ? (
          <motion.div
            key="hub"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {igelCategories.map((cat) => (
              <motion.div
                key={cat.id}
                whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(230,46,122,0.1)" }}
                onClick={() => setSelectedSub(cat.id)}
                className="group p-4 md:p-8 rounded-[30px] md:rounded-[40px] bg-white border border-rose-100/50 cursor-pointer flex flex-col items-center justify-center md:justify-between  gap-4 md:gap-0 md:min-h-[220px] transition-all"
              >
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center transition-colors duration-500 ${cat.color === 'rose' ? 'bg-rose-50 text-[#e62e7a] group-hover:bg-[#e62e7a] group-hover:text-white' : 'bg-slate-50 text-slate-600 group-hover:bg-slate-900 group-hover:text-white'}`}>
                  <cat.icon className="w-7 h-7" />
                </div>
                <h4 className="text-center md:text-left text-xl font-serif italic text-slate-900 leading-tight md:pr-8 break-keep">
                  {cat.title}
                </h4>
              </motion.div>
            ))}
          </motion.div>
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            className="space-y-8"
          >
            <button
              onClick={() => setSelectedSub(null)}
              className="flex items-center gap-2 text-[#e62e7a] font-black uppercase text-[10px] tracking-widest hover:gap-4 transition-all"
            >
              <ChevronLeft className="w-4 h-4" /> Zurück zur Übersicht
            </button>

            {selectedSub === "ultraschall" && <UltraschallIgel />}
            {selectedSub === "blutzucker" && <BlutzuckerIgel />}
            {selectedSub === "zytomegalie" && <ZytomegalieIgel />}
            {selectedSub === "streptokokken" && <BStreptokokkenIgel />}
            {selectedSub === "toxoplasmose" && <ToxoplasmoseIgel />}
            {selectedSub === "listeriose" && <ListerioseIgel />}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};