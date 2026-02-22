"use client";

import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

export const LocationSection = () => {
  const googleMapsUrl = "https://www.google.de/maps/dir//Staufenbergstra%C3%9Fe+31,+74081+Heilbronn,+Deutschland/@49.1186511,9.1911004,17z/";

  return (
    <div className="space-y-12 md:space-y-20 lg:space-y-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-2xl space-y-3 md:space-y-4"
      >
        <span className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-black text-[#e62e7a]">
          Standort & Anfahrt
        </span>
        <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif text-slate-800 tracking-tighter leading-[1.1] italic">
          So finden Sie <br className="md:hidden" />
          <span className="text-[#e62e7a]">zu uns...</span>
        </h2>
      </motion.div>

      <div className="grid lg:grid-cols-12 gap-8 md:gap-12 lg:gap-16 items-stretch">
        <div className="lg:col-span-5 flex flex-col justify-between space-y-8 md:space-y-10">
          <div className="space-y-6 md:space-y-8">
            <div className="flex gap-4 md:gap-6 items-start group">
              <div className="shrink-0 p-3 md:p-4 bg-white rounded-2xl md:rounded-3xl shadow-sm border border-rose-50 group-hover:bg-[#e62e7a] group-hover:text-white transition-all duration-500">
                <MapPin className="w-5 h-5 md:w-6 md:h-6" />
              </div>
              <div className="space-y-1 md:space-y-2">
                <h3 className="text-[9px] md:text-[10px] uppercase tracking-widest font-black text-slate-400">Anschrift</h3>
                <p className="text-lg md:text-2xl font-serif text-slate-900 leading-tight italic">
                  Staufenbergstraße 31 <br />
                  74081 Heilbronn
                </p>
              </div>
            </div>

            <div className="p-6 md:p-8 rounded-[30px] md:rounded-[40px] bg-slate-50 border border-slate-100">
              <p className="text-slate-600 text-sm md:text-base leading-relaxed italic font-serif">
                Nutzen Sie die interaktive Karte, um Ihre Route direkt zu unserer Praxis in Heilbronn zu planen.
              </p>
            </div>
          </div>

          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 w-full py-5 md:py-6 bg-slate-950 text-white rounded-full text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-black hover:bg-[#e62e7a] transition-all duration-500 shadow-xl"
          >
            <Navigation className="w-3.5 h-3.5 md:w-4 md:h-4" />
            Route in Google Maps planen
          </a>
        </div>

        <div className="lg:col-span-7 w-full h-[500px] md:h-[450px] lg:h-full min-h-[500px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="relative w-full h-full rounded-[30px] md:rounded-[40px] lg:rounded-[60px] overflow-hidden border-4 md:border-8 border-white shadow-2xl bg-slate-100"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.438515093557!2d9.19110041219662!3d49.11865107125348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982ed502e5ddcd%3A0x404d12375c9e417e!2sStaufenbergstra%C3%9Fe+31%2C+74081+Heilbronn!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-[30px] md:rounded-[40px] lg:rounded-[60px]" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};