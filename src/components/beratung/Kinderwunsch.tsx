"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Thermometer, Zap, Search, Activity } from "lucide-react";

export const Kinderwunsch = () => {
  return (
    <div className="space-y-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative w-full aspect-[16/9] md:aspect-[21/8] rounded-[30px] md:rounded-[60px] overflow-hidden border-4 md:border-[12px] border-white shadow-2xl bg-white"
      >
        <Image src="/images/frauenpraxis-nana-jobi-kinderwunsch.jpg" alt="Baby Glück" fill
          className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#e62e7a]/10 to-transparent" />
      </motion.div>
      <div className="grid lg:grid-cols-12 gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="lg:col-span-7 space-y-8">
          <h3 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-tight">Unerfüllter <span className="text-[#e62e7a]">Kinderwunsch</span></h3>
          <p className="text-slate-600 font-serif italic text-lg leading-relaxed">
            Die Abklärung umfasst die Untersuchung von Frau und Mann. Neben der Bestimmung der relevanten Hormone in der frühen Follikelphase wird in einer Zyklusüberwachung (Lernzyklus) der Ablauf von Eireifung, Eisprung und Gelbkörperhormonphase überwacht.
          </p>

          <div className="grid md:grid-cols-2 gap-6 pt-4">
            <div className="p-8 rounded-[40px] bg-white border border-rose-100 shadow-sm space-y-4">
              <Search className="text-[#e62e7a] w-6 h-6" />
              <p className="text-slate-600 italic text-sm leading-relaxed">
                Somit lassen sich bereits in einem Zyklusverlauf die meisten Ursachen der weiblichen Sterilität abklären.
              </p>
            </div>
            <div className="p-8 rounded-[40px] bg-white border border-rose-100 shadow-sm space-y-4">
              <Activity className="text-[#e62e7a] w-6 h-6" />
              <p className="text-slate-600 italic text-sm leading-relaxed">
                Die Abklärung beim Mann (Spermiogramm) erfolgt beim Urologen.
              </p>
            </div>
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} className="lg:col-span-5 p-10 rounded-[50px] bg-rose-50/30 border border-rose-100 flex flex-col justify-center space-y-6 relative overflow-hidden group">
          <Thermometer className="absolute -right-8 -top-8 w-48 h-48 text-[#e62e7a]/5 rotate-12 transition-transform duration-1000 group-hover:rotate-0" />
          <h4 className="text-2xl font-serif italic text-slate-900 z-10">Anatomische <span className="text-[#e62e7a]">Abklärung</span></h4>
          <p className="text-slate-600 font-serif italic text-lg leading-relaxed z-10">
            Sollten anatomische Ursachen bei der Frau vorhanden sein, muss dies durch eine Bauchspiegelung mit Durchlässigkeitsprüfung der Eileiter abgeklärt werden.
          </p>
          <div className="pt-6 border-t border-rose-100 z-10">
            <p className="text-[#e62e7a] font-bold italic">Eine Therapie ist nur nach Kenntnis der ursächlichen Störung möglich.</p>
          </div>
        </motion.div>
      </div>


    </div>
  );
};