"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Phone, Mail, ArrowRight, Printer } from "lucide-react";

const staticSchedule = [
  { day_name: "Montag, Dienstag", am_open: "09.00", am_close: "13.00", pm_open: "15.00", pm_close: "18.00", is_closed: false },
  { day_name: "Mittwoch", am_open: "09.00", am_close: "13.00", pm_open: null, pm_close: null, is_closed: false },
  { day_name: "Donnerstag", am_open: "09.00", am_close: "13.00", pm_open: "15.00", pm_close: "18.00", is_closed: false },
  { day_name: "Freitag", am_open: "09.00", am_close: "13.00", pm_open: null, pm_close: null, is_closed: false },
];

interface Shedule {
  id?: number;
  day_name: string;
  am_open: string;
  am_close: string;
  pm_open: string | null;
  pm_close: string | null;
  is_closed: boolean;
}
export const InfoCards = () => {
  const [schedule, setSchedule] = useState<Shedule[]>([]);

  useEffect(() => {
    const fetchSchedule = async () => {
      const { data, error } = await supabase
        .from("schedule")
        .select("*")
        .order("day_index", { ascending: true });

      if (error || !data || data.length === 0) {
        setSchedule(staticSchedule as Shedule[]);
      } else {
        setSchedule(data);
      }
    };
    fetchSchedule();
  }, []);

  return (
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 rounded-[24px] sm:rounded-[30px] md:rounded-[60px] border border-slate-100 overflow-hidden shadow-[0_40px_100px_-20px_rgba(230,46,122,0.15)] bg-white">

    <div className="p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col border-b lg:border-b-0 lg:border-r border-slate-100 hover:bg-slate-50/30 transition-colors duration-500">
      <h3 className="text-sm uppercase tracking-[0.3em] font-black text-[#e62e7a] mb-8 sm:mb-12 md:mb-16 flex items-center gap-3">
        <span className="w-2 h-2 rounded-full bg-[#e62e7a] shadow-[0_0_10px_#e62e7a]" />
        Öffnungszeiten
      </h3>
      <div className="space-y-4 flex-grow">
          {schedule.length > 0 ? schedule.map((day, idx) => (
            <div key={day.id || idx} className="group cursor-default border-b border-slate-50 pb-4 last:border-0 last:pb-0">
              <span className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-2 group-hover:text-[#e62e7a] transition-colors">
                {day.day_name}
              </span>
              <span className="text-sm sm:text-base md:text-lg lg:text-xl font-serif text-slate-900 tracking-tighter italic leading-snug">
                {day.is_closed ? (
                  "Geschlossen"
                ) : (
                  <>
                    {day.am_open && day.am_close && `${day.am_open} bis ${day.am_close} Uhr`}
                    {day.pm_open && day.pm_close && ` | ${day.pm_open} bis ${day.pm_close} Uhr`}
                  </>
                )}
              </span>
            </div>
          )) : (
            <div className="animate-pulse space-y-4">
              {[1, 2, 3, 4].map(n => <div key={n} className="h-12 bg-slate-100 rounded-xl" />)}
            </div>
          )}
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
          <div className="relative aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/3] rounded-[24px] sm:rounded-[30px] md:rounded-[40px] overflow-hidden border-8 border-white shadow-2xl group">

            <a
              href="https://www.google.de/maps/dir//Staufenbergstra%C3%9Fe+31,+74081+Heilbronn,+Deutschland/@49.1186511,9.1911004,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x47982ed502e5ddcd:0x404d12375c9e417e!2m2!1d9.1934161!2d49.118689?hl=de&entry=ttu&g_ep=EgoyMDI2MDIyMy4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="absolute inset-0 z-20"
            />

            <Image
              src="/images/map.png"
              alt="Map"
              fill
              className="object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:scale-110 transition-all duration-[1.5s] ease-out"
            />

            <div className="absolute inset-0 bg-rose-500/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
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

      <Link href="/kontakt" className="w-full">
        <Button className="w-full h-14 sm:h-16 md:h-20 mt-10 sm:mt-12 md:mt-16 rounded-full bg-slate-950 hover:bg-[#e62e7a] text-white transition-all duration-500 uppercase tracking-[0.3em] text-[11px] font-black shadow-xl">
          Kontaktformular
          <ArrowRight className="w-5 h-5 ml-2" />
        </Button>
      </Link>
    </div>

  </div>
);
};