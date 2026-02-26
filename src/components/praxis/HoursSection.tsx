"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, CalendarCheck } from "lucide-react";

interface Shedule {
  id?: number;
  day_name: string;
  am_open: string;
  am_close: string;
  pm_open: string | null;
  pm_close: string | null;
  is_closed: boolean;
}

const staticSchedule = [
  { day_name: "Montag, Dienstag", am_open: "09.00", am_close: "13.00", pm_open: "15.00", pm_close: "18.00", is_closed: false },
  { day_name: "Mittwoch", am_open: "09.00", am_close: "13.00", pm_open: null, pm_close: null, is_closed: false },
  { day_name: "Donnerstag", am_open: "09.00", am_close: "13.00", pm_open: "15.00", pm_close: "18.00", is_closed: false },
  { day_name: "Freitag", am_open: "09.00", am_close: "13.00", pm_open: null, pm_close: null, is_closed: false },
];

export const HoursSection = () => {
  const [schedule, setSchedule] = useState<Shedule[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchSchedule = async () => {
      try {
        const { data, error } = await supabase
          .from("schedule")
          .select("*")
          .order("day_index", { ascending: true });

        if (error || !data || data.length === 0) {
          setSchedule(staticSchedule);
        } else {
          setSchedule(data);
        }
      } catch (err) {
        setSchedule(staticSchedule);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSchedule();
  }, []);

  return (
    <div className="space-y-24">
      {/* --- HEADER --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl space-y-4 text-left"
      >
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black text-[#e62e7a]">
          Sprechstunden
        </span>
        <h2 className="text-4xl md:text-6xl font-serif text-slate-800 tracking-tighter leading-tight italic">
          Unsere Öffnungszeiten <br />
          <span className="text-[#e62e7a]">für Sie...</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-16 items-start">
        {/* --- LEFT: DYNAMIC SCHEDULE --- */}
        <div className="lg:col-span-7 space-y-6 text-left">
          <AnimatePresence mode="wait">
            {schedule.map((item, idx) => (
              <motion.div
                key={item.id || item.day_name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group flex flex-col md:flex-row md:items-center justify-between py-6 border-b border-slate-100 last:border-0"
              >
                <div className="flex items-center gap-4 mb-2 md:mb-0">
                  <h3 className="text-xl md:text-2xl font-serif text-slate-900 tracking-tight italic">
                    {item.day_name}
                  </h3>
                </div>
                <div className="flex flex-col md:items-end space-y-1">
                  {item.is_closed ? (
                    <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-black text-rose-300">
                      Geschlossen
                    </span>
                  ) : (
                    <>
                      <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-black text-slate-500 group-hover:text-slate-950 transition-colors duration-500 leading-relaxed">
                        {item.am_open} bis {item.am_close} Uhr
                      </span>
                      {item.pm_open && item.pm_close && (
                        <span className="text-xs md:text-sm uppercase tracking-[0.2em] font-black text-slate-500 group-hover:text-slate-950 transition-colors duration-500 leading-relaxed">
                          {item.pm_open} bis {item.pm_close} Uhr
                        </span>
                      )}
                    </>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* --- RIGHT: INFO CARD --- */}
        <div className="lg:col-span-5 space-y-8 text-left">
          <div className="p-8 md:p-12 rounded-[40px] bg-white border border-rose-100 shadow-[0_40px_80px_-20px_rgba(230,46,122,0.08)] relative overflow-hidden">
            <CalendarCheck className="absolute -right-4 -bottom-4 w-32 h-32 text-rose-50 opacity-50 pointer-events-none" />

            <div className="relative z-10">
              {isLoading ? (
                <div className="space-y-6 animate-pulse">
                  <div className="h-3 w-24 bg-rose-100 rounded-full" />
                  <div className="h-6 w-3/4 bg-slate-100 rounded-lg" />
                  <div className="h-6 w-2/3 bg-slate-100 rounded-lg" />
                  <div className="h-[1px] w-full bg-rose-100" />
                  <div className="h-3 w-full bg-slate-100 rounded-lg" />
                  <div className="h-12 w-40 bg-rose-100 rounded-full" />
                </div>
              ) : (
                <div className="space-y-8">
                  <div className="space-y-4">
                    <p className="text-[10px] uppercase tracking-widest font-black text-[#e62e7a]">
                      Liebe Patienten,
                    </p>
                    <p className="text-slate-600 leading-relaxed italic font-serif text-lg">
                      &quot;bitte beachten Sie, dass am Mittwoch und Freitag keine telefonische Sprechstunde gegeben ist.&quot;
                    </p>
                  </div>

                  <div className="h-[1px] w-full bg-rose-100" />

                  <div className="space-y-6">
                    <p className="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400 leading-relaxed">
                      Bei Fragen oder Terminvereinbarungen stehen wir Ihnen unter der o.g. Nummer zu unseren Öffnungszeiten zur Verfügung.
                    </p>
                    <a
                      href="tel:+49713142570"
                      className="inline-flex items-center gap-4 text-2xl font-serif text-slate-900 hover:text-[#e62e7a] transition-all group"
                    >
                      <div className="p-3 bg-rose-50 rounded-full group-hover:bg-[#e62e7a] group-hover:text-white transition-all shadow-sm">
                        <Phone className="w-5 h-5" />
                      </div>
                      0 71 31 - 42 57 - 0
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};