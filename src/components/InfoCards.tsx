"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight, Printer } from "lucide-react";

export const InfoCards = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 rounded-[24px] sm:rounded-[30px] md:rounded-[60px] border border-slate-100 overflow-hidden shadow-[0_40px_100px_-20px_rgba(230,46,122,0.15)] bg-white">

    {/* Öffnungszeiten */}
    <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-100 hover:bg-slate-50/30 transition-colors duration-500">
      <h3 className="text-sm uppercase tracking-[0.3em] font-black text-[#e62e7a] mb-8 sm:mb-12 md:mb-16 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[#e62e7a] shadow-[0_0_10px_#e62e7a]" />
        Öffnungszeiten
      </h3>
      <div className="space-y-4 flex-grow">
        {[
          { d: "Montag, Dienstag", t: "09.00 bis 13.00 Uhr | 15.00 bis 18.00 Uhr" },
          { d: "Mittwoch", t: "09.00 bis 13.00 Uhr" },
          { d: "Donnerstag", t: "09.00 bis 13.00 Uhr | 15.00 bis 18.00 Uhr" },
          { d: "Freitag", t: "09.00 bis 13.00 Uhr" },
        ].map((i) => (
          <div key={i.d} className="group cursor-default border-b border-slate-50 pb-4 last:border-0 last:pb-0">
            <span className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 group-hover:text-[#e62e7a] transition-colors">
              {i.d}
            </span>
            <span className="text-sm sm:text-base md:text-lg lg:text-xl font-serif text-slate-900 tracking-tighter italic leading-snug">
              {i.t}
            </span>
          </div>
        ))}
      </div>
    </div>

    {/* Standort */}
    <div className="p-6 sm:p-8 md:p-12 lg:p-16 bg-slate-50/50 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-100">
      <h3 className="text-sm uppercase tracking-[0.3em] font-black text-[#e62e7a] mb-8 sm:mb-12 md:mb-16">Anfahrt</h3>
      <div className="space-y-12 flex-grow">
        <div className="space-y-4">
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-serif text-slate-950 tracking-tighter leading-[0.9]">
            Staufenbergstraße 31 <br />
            <span className="text-[#e62e7a]">74081 Heilbronn</span>
          </p>
        </div>
        <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-[24px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden border-8 border-white shadow-2xl group cursor-pointer">
          <Image
            src="/images/map.png"
            alt="Map"
            fill
            className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
          />
          <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
        </div>
      </div>
    </div>

    {/* Kontakt */}
    <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-between bg-white">
      <div>
        <h3 className="text-sm uppercase tracking-[0.3em] font-black text-[#e62e7a] mb-8 sm:mb-12 md:mb-16">Kontakt</h3>
        <div className="space-y-12">
          <div className="flex items-baseline gap-4">
            <Mail className="w-5 h-5 text-slate-400" />
            <a href="mailto:info@frauenpraxis-jobi.de" className="block group">
              <p className="text-lg sm:text-xl md:text-2xl font-serif italic text-slate-950 group-hover:text-[#e62e7a] transition-all duration-300 break-all leading-tight">
                info@frauenpraxis-jobi.de
              </p>
              <div className="h-[1px] w-0 group-hover:w-full bg-[#e62e7a] transition-all duration-500 mt-2" />
            </a>
          </div>
          <div className="space-y-4">
            <div className="flex items-baseline gap-4">
              <Phone className="w-5 h-5 text-slate-400" />
              <span className="text-lg sm:text-xl md:text-2xl font-serif text-slate-900 tracking-tighter">
                <a href="tel:+49713142570" className="hover:text-[#e62e7a] transition-colors">
                  0 71 31 - 42 57 - 0
                </a></span>
            </div>
            <div className="flex items-baseline gap-4 border-t border-slate-50 pt-4">
              <Printer className="w-5 h-5 text-slate-400" />
              <span className="text-lg sm:text-xl md:text-2xl font-serif text-slate-900 tracking-tighter">0 71 31 - 48 18 45</span>
            </div>
          </div>
        </div>
      </div>

      <Button className="w-full h-14 sm:h-16 md:h-20 mt-10 sm:mt-12 md:mt-16 rounded-full bg-slate-950 hover:bg-[#e62e7a] text-white transition-all duration-500 uppercase tracking-[0.3em] text-[11px] font-black shadow-xl">
        Кontaktformular
        <ArrowRight className="w-5 h-5" />
      </Button>
    </div>

  </div>
);