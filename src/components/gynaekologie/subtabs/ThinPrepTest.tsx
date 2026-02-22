"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FlaskConical, Search, ShieldCheck, Cpu } from "lucide-react";

export const ThinPrepTest = () => {
  return (
    <div className="space-y-12 md:space-y-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full aspect-[16/9] md:aspect-[21/7] rounded-[30px] md:rounded-[60px] overflow-hidden border-4 md:border-[12px] border-white shadow-2xl bg-white"
      >
        <Image
          src="/images/frauenpraxis-nana-jobi-labor.jpg"
          alt="Labor Mikroskopie"
          fill
          className="object-cover contrast-[1.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <h3 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-tight">
              Optimierte Krebsfrüherkennung <br />
              <span className="text-[#e62e7a]">mit dem ThinPrep Test</span>
            </h3>
            <p className="text-slate-600 font-serif italic text-lg leading-relaxed border-l-2 border-rose-100 pl-8">
              Das Zervixkarzinom ist die zweithäufigste Krebserkrankung der Frau unter 50 Jahren. In Deutschland erkranken jedes Jahr ca. 6500 Frauen an Gebärmutterhalskrebs.
            </p>
          </div>

          <div className="space-y-6 text-slate-500 italic leading-relaxed text-base md:text-lg">
            <p>
              Die Krebsfrüherkennung (Pap-Test) hat zum Ziel, Zellveränderung möglichst früh zu erkennen, und wenn nötig, entsprechende Kontroll- und Therapiemaßnahmen einzuleiten.
            </p>
            <p>
              Einmal pro Jahr kann jede Frau eine Vorsorgeuntersuchung in Anspruch nehmen. Hierbei werden vom Gebärmutterhals Zellen entnommen und im Labor nach Anfärbung mikroskopisch untersucht.
            </p>
          </div>
        </div>

        <div className="lg:col-span-5 space-y-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-[40px] bg-white border border-rose-100 shadow-[0_40px_100px_-20px_rgba(230,46,122,0.12)] relative overflow-hidden flex flex-col justify-center group"
          >
            <FlaskConical className="absolute -right-8 -top-8 w-48 h-48 text-[#e62e7a]/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000 ease-out" />

            <div className="relative z-10 space-y-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-rose-50">
                  <Search className="w-5 h-5 text-[#e62e7a]" />
                </div>
                <h4 className="text-2xl font-serif italic text-slate-900 leading-tight">
                  Wann ist ein <br />
                  <span className="text-[#e62e7a]">ThinPrep Test</span> sinnvoll?
                </h4>
              </div>

              <div className="h-[1px] w-12 bg-[#e62e7a]/30 group-hover:w-20 transition-all duration-500" />

              <div className="space-y-4 text-slate-600 font-serif italic text-base md:text-lg leading-relaxed">
                <p>
                  Mit dieser verbesserten Methode ist das Zellbild besser beurteilbar. Der Test bietet eine repräsentative Auswahl diagnostisch wichtiger Zellen und liefert genauere Ergebnisse, da Verunreinigungen durch Blut und Schleim heraus gewaschen werden können.
                </p>
              </div>
            </div>

            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent pointer-events-none" />
          </motion.div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="p-8 md:p-12 rounded-[40px] bg-rose-50/50 border border-rose-100 space-y-6 flex flex-col justify-center"
        >
          <div className="flex items-center gap-4 text-[#e62e7a]">
            <ShieldCheck className="w-8 h-8" />
            <span className="font-black uppercase tracking-widest text-xs">HPV-Früherkennung</span>
          </div>
          <p className="text-slate-800 font-serif italic text-lg md:text-xl leading-relaxed">
            Eine Infektion mit Humanen Papilloma Viren (HPV-Viren) kann frühzeitig erkannt werden und somit das Risiko für Gebärmutterhalskrebs besser eingeschätzt werden.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-[40px] bg-white border border-rose-100 shadow-[0_40px_100px_-20px_rgba(230,46,122,0.12)] relative overflow-hidden group"
        >
          <Cpu className="absolute -right-6 -bottom-6 w-48 h-48 text-[#e62e7a]/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />

          <div className="relative z-10 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-rose-50">
                <Cpu className="w-5 h-5 text-[#e62e7a]" />
              </div>
              <h4 className="text-2xl font-serif italic text-slate-900 leading-tight">
                ThinPrep <span className="text-[#e62e7a]">Imaging System</span>
              </h4>
            </div>

            <div className="h-[1px] w-12 bg-[#e62e7a]/30" />

            <p className="text-slate-600 font-serif italic text-base md:text-lg leading-relaxed">
              Der ThinPrep Pap Test kann aufgrund seines klaren Zellbildes mit der modernen Computertechnologie des ThinPrep Imaging Systems Zelle für Zelle nach Auffälligkeiten untersuchen.
            </p>
          </div>

          <div className="absolute inset-0 bg-gradient-to-br from-rose-50/50 to-transparent pointer-events-none" />
        </motion.div>
      </div>
    </div>
  );
};