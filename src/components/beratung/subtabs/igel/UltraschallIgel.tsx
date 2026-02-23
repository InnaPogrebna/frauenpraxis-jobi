"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Waves, Camera } from "lucide-react";

export const UltraschallIgel = () => {
  return (
    <div className="space-y-16">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full aspect-[21/8] rounded-[50px] overflow-hidden border-[12px] border-white shadow-2xl"
        >
          <Image src="/images/frauenpraxis-nana-jobi-beratung.jpg" alt="Ultraschall" fill className="object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#e62e7a]/10 to-transparent" />
        </motion.div>

        <div className="max-w-4xl space-y-6">
          <h3 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-tight">
            Ergänzender Ultraschall <br />
            <span className="text-[#e62e7a]">in der Schwangerschaft</span>
          </h3>
          <div className="space-y-6 text-slate-600 font-serif italic text-lg leading-relaxed max-w-4xl">
            <p>
              Kaum eine andere medizinische Methode ist so aussagekräftig wie der geburtshilfliche Ultraschall.
            </p>
            <p className="border-l-4 border-rose-100 pl-8 text-slate-900 font-bold">
              Die Sonographie ist eine gute Möglichkeit für werdende Eltern, sich vom Wohlbefinden und dem Wachstum des Kindes zu überzeugen („Babyfernsehen“).
            </p>
            <p>
              Wir sind sehr gerne bereit, diese zusätzlichen Ultraschalluntersuchungen auf Ihren Wunsch hin durchzuführen.
            </p>
          </div>
        </div>
      </div>

      {/* --- 3D/4D ULTRASCHALL --- */}
      <div className="pt-16 md:pt-24 border-t border-rose-100">
        <div className="space-y-12 md:space-y-16">

          <div className="max-w-4xl space-y-4">
            <div className="flex items-center gap-3 text-[#e62e7a]">
              <div className="p-2 rounded-xl bg-rose-50">
                <Camera className="w-5 h-5" />
              </div>
              <span className="uppercase tracking-[0.3em] font-black text-[10px]">High-Tech Diagnostik</span>
            </div>
            <h4 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-tight">
              3D/4D <span className="text-[#e62e7a]">Ultraschall</span>
            </h4>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative w-full aspect-[21/9] md:aspect-[21/7] rounded-[40px] md:rounded-[70px] overflow-hidden border-4 md:border-[15px] border-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] bg-white"
          >
            <Image
              src="/images/frauenpraxis-nana-jobi-4d-ultraschall.jpg"
              alt="4D Ultraschall Panorama"
              fill
              className="object-cover contrast-[1.05] brightness-[1.02] scale-105 hover:scale-100 transition-transform duration-[2s] ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-60" />
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 md:gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-8"
            >
              <p className="text-slate-600 font-serif italic text-xl md:text-2xl leading-relaxed border-l-4 border-[#e62e7a] pl-8">
                Erleben Sie die Welt Ihres Kindes: sehen Sie Ihr werdendes Kind <span className="whitespace-nowrap">im 3D-Ultraschall</span> in Echtzeit <span className="whitespace-nowrap">(„4D-Ultraschall“).</span>.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-4 flex items-center justify-end"
            >
              <div className="px-6 py-3 rounded-full bg-rose-50 text-[#e62e7a] text-[10px] font-black uppercase tracking-widest border border-rose-100/50 shadow-sm">
                Modernste Medizintechnik
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};