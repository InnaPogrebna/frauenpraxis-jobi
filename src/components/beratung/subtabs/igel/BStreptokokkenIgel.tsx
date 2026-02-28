"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Microscope, AlertCircle, CheckCircle2, ShieldCheck } from "lucide-react";

export const BStreptokokkenIgel = () => {
  return (
    <div className="space-y-12 md:space-y-16">
      {/* --- FEATURED IMAGE SECTION --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full aspect-[21/9] md:aspect-[21/7] rounded-[30px] md:rounded-[60px] overflow-hidden border-4 md:border-[12px] border-white shadow-2xl bg-white"
      >
        <Image
          src="/images/frauenpraxis-nana-jobi-labor.jpg"
          alt="B-Streptokokken Diagnostik"
          fill
          className="object-cover contrast-[1.05] brightness-[1.05]"
          priority
        />
        <div className="absolute inset-0 bg-[#e62e7a]/10 opacity-20" />
      </motion.div>

      {/* --- CONTENT HEADER --- */}
      <div className="max-w-4xl space-y-6">
        <div className="flex items-center gap-3 text-[#e62e7a]">
          <div className="p-2 rounded-xl bg-rose-50">
            <Microscope className="w-5 h-5" />
          </div>
          <span className="uppercase tracking-[0.4em] font-black text-[10px]">IGeL-Leistung</span>
        </div>

        <h3 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-tight">
          B-Streptokokken <br />
          <span className="text-[#e62e7a]">(35-38 SSW)</span>
        </h3>

        <p className="text-slate-900 font-serif text-xl md:text-2xl leading-relaxed border-l-4 border-rose-100 pl-8">
          Bei etwa 10–30 % der Schwangeren finden sich Streptokokken der Gruppe B im Scheidenbereich.
        </p>
      </div>

      {/* --- MAIN CONTENT GRID --- */}
      <div className="grid lg:grid-cols-12 gap-8 md:gap-12 items-start">
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-light">
            <p>
              In der Regel sind diese Bakterien harmlos, allerdings kann unter der Geburt das Neugeborene infiziert werden.
            </p>
            <p>
              Dies kann zu schweren Infektionen wie Lungen- und Hirnhautentzündung mit neurologischen Schäden führen.
            </p>

            <div className="p-8 md:p-10 rounded-[40px] bg-rose-50/40 border border-rose-100 space-y-6 shadow-sm relative overflow-hidden group">
              <div className="relative z-10 space-y-4">
                <div className="flex items-center gap-3 text-[#e62e7a]">
                  <ShieldCheck className="w-6 h-6" />
                  <h4 className="font-bold text-slate-900 uppercase tracking-widest text-xs">Unsere Empfehlung</h4>
                </div>
                <p className="text-slate-800 font-medium text-lg leading-relaxed">
                  Wir empfehlen daher, einen Abstrich auf B-Streptokokken durchzuführen. Hierzu wird der Arzt einen vaginalen Abstrich entnehmen, der in unserem Labor untersucht wird.
                </p>
              </div>
              <Microscope className="absolute -right-6 -bottom-6 w-32 h-32 text-[#e62e7a]/5 rotate-12 transition-transform duration-1000 group-hover:rotate-0" />
            </div>
          </div>
        </div>

        {/* Sidebar Info Card */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-32">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-10 rounded-[40px] bg-white border border-rose-100 shadow-[0_30px_60px_-15px_rgba(230,46,122,0.1)] relative overflow-hidden"
          >
            <div className="relative z-10 space-y-6">
              <div className="w-12 h-12 rounded-2xl bg-rose-50 flex items-center justify-center text-[#e62e7a]">
                <AlertCircle className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-serif italic text-slate-900 leading-tight">Behandlung unter der Geburt</h4>
              <p className="text-slate-600 text-base leading-relaxed">
                Lassen sich B-Streptokokken nachweisen, dann wird unter der Geburt bei der Schwangeren eine Antibiotikagabe verabreicht.
              </p>
            </div>
          </motion.div>

          <div className="p-8 rounded-[40px] bg-white border-2 border-rose-100/50 text-center shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#e62e7a]">Optimaler Zeitraum</span>
            <p className="text-xl md:text-2xl font-serif italic text-slate-900 mt-2">
              35. bis 38. <br /> Schwangerschaftswoche
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};