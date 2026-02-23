"use client";

import { Plane, Briefcase, FileText } from "lucide-react";

export const VorDerReise = () => {
  return (
    <div className="max-w-4xl mx-auto p-10 md:p-16 rounded-[50px] bg-white border border-rose-100 shadow-2xl relative overflow-hidden group">
      <Plane className="absolute -right-10 -bottom-10 w-64 h-64 text-[#e62e7a]/5 -rotate-12 transition-transform duration-1000 group-hover:rotate-0" />

      <div className="relative z-10 space-y-8">
        <div className="flex items-center gap-4 text-[#e62e7a]">
          <Briefcase className="w-8 h-8" />
          <h3 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-tight">
            Vor der Reise
          </h3>
        </div>

        <div className="space-y-6 text-slate-600 font-serif text-lg md:text-xl leading-relaxed">
          <p>
            Wir verfügen über aktuelle Impfempfehlungen für alle Reiseländer
            weltweit und erstellen Ihnen auf Wunsch einen individuellen
            Impfplan entsprechend Ihrem Reiseziel und Ihrer persönlichen
            Situation.
          </p>

          <div className="p-6 rounded-3xl bg-rose-50 italic border border-rose-100 flex items-start gap-4">
            <FileText className="text-[#e62e7a] shrink-0 mt-1" />
            <p className="text-slate-900 font-bold">
              Wichtig: Bitte bringen Sie Ihren Impfpass zu Ihrem Termin mit.
              Ihr Impfstatus wird überprüft und gegebenenfalls werden
              fehlende Impfungen ergänzt.
            </p>
          </div>

          <p className="text-slate-500 text-base">
            Nicht dokumentierte Impfungen gelten als nicht durchgeführt und
            sollten entsprechend nachgeholt werden.
          </p>
        </div>
      </div>
    </div>
  );
};