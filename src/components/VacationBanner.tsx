"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { motion, AnimatePresence } from "framer-motion";
import { Palmtree, X, Calendar, ChevronRight } from "lucide-react";
import { format, isPast, addDays } from "date-fns";
import { de } from "date-fns/locale";

interface VacationData {
  is_active: boolean;
  start_date: string;
  end_date: string;
  message: string;
}

export const VacationBanner = () => {
  const [data, setData] = useState<VacationData | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  const [isMinimized, setIsMinimized] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("vacation_banner_minimized") === "true";
    }
    return false;
  });

  useEffect(() => {
    const fetchVacation = async () => {
      const { data: res } = await supabase.from("vacation_status").select("*").single();

      if (res?.is_active && res.end_date) {
        const expirationDate = addDays(new Date(res.end_date), 1);
        if (isPast(expirationDate)) return;

        setData(res);
      }
      setIsLoaded(true);
    };
    fetchVacation();
  }, []);

  const toggleMinimize = (state: boolean) => {
    setIsMinimized(state);
    localStorage.setItem("vacation_banner_minimized", state.toString());
  };

  if (!isLoaded || !data) return null;

  const defaultMsg = "Unsere Praxis bleibt wegen Urlaub vorübergehend geschlossen.";

  return (
    <div className="fixed bottom-10 left-0 right-0 z-[100] pointer-events-none flex justify-center px-4">
      <AnimatePresence mode="wait">
        {!isMinimized ? (
          <motion.div
            key="full"
            initial={{ y: 50, opacity: 0, scale: 0.9 }}
            animate={{ y: 0, opacity: 1, scale: 1 }}
            exit={{ y: 50, opacity: 0, scale: 0.9 }}
            className="pointer-events-auto relative w-full max-w-2xl overflow-hidden rounded-[35px] border border-white/40 bg-white/60 p-1 backdrop-blur-2xl shadow-[0_25px_50px_-12px_rgba(230,46,122,0.2)]"
          >
            <div className="relative flex items-center gap-4 rounded-[31px] bg-gradient-to-br from-white/80 to-rose-50/50 p-6 md:p-8">
              <div className="absolute -right-4 -top-6 text-[#e62e7a]/10 -rotate-12">
                <Palmtree size={140} />
              </div>

              <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10 w-full">
                <div className="flex flex-row md:flex-col gap-2 flex-shrink-0">
                  <div className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-[#e62e7a] text-white shadow-lg shadow-[#e62e7a]/20">
                    <span className="text-[10px] font-black uppercase opacity-80">Von</span>
                    <span className="text-xl font-bold leading-none">
                      {data.start_date ? format(new Date(data.start_date), "dd.MM", { locale: de }) : "—"}
                    </span>
                  </div>
                  <div className="flex flex-col items-center justify-center w-20 h-20 rounded-2xl bg-white border border-rose-100 text-[#e62e7a] shadow-sm">
                    <span className="text-[10px] font-black uppercase opacity-60 text-slate-400">Bis</span>
                    <span className="text-xl font-bold leading-none">
                      {data.end_date ? format(new Date(data.end_date), "dd.MM", { locale: de }) : "—"}
                    </span>
                  </div>
                </div>

                <div className="flex-grow space-y-2 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2">
                    <Calendar size={14} className="text-[#e62e7a]" />
                    <h4 className="text-[10px] uppercase font-black tracking-[0.3em] text-[#e62e7a]">Betriebsferien</h4>
                  </div>
                  <p className="font-serif italic text-xl md:text-2xl text-slate-900 leading-[1.2]">
                    {data.message || defaultMsg}
                  </p>
                  <p className="text-[11px] font-bold text-slate-500 uppercase tracking-widest pt-2">
                    Ab dem {data.end_date ? format(new Date(data.end_date), "dd. MMMM yyyy", { locale: de }) : ""} sind wir wieder für Sie da.
                  </p>
                </div>

                <button
                  onClick={() => toggleMinimize(true)}
                  className="absolute top-0 right-0 p-2 hover:bg-white/50 rounded-full transition-all text-slate-600 hover:text-[#e62e7a]"
                >
                  <X size={20} />
                </button>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.button
            key="minimized"
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            whileHover={{ scale: 1.05, x: 5 }}
            onClick={() => setIsMinimized(false)}
            className="pointer-events-auto fixed left-0 bottom-24 bg-[#e62e7a] flex-col text-white py-5 px-4 rounded-r-[25px] shadow-[0_10px_30px_rgba(230,46,122,0.3)] flex items-center gap-4 group z-50"
          >
            <Palmtree className="w-6 h-6 animate-pulse" />
            <span className="text-[11px] font-black uppercase tracking-[0.2em] [writing-mode:vertical-lr] rotate-180">Urlaub</span>
            <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
};