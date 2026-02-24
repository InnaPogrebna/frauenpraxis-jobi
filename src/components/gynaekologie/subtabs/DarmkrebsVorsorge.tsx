"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Activity, AlertCircle, CheckCircle2, Search, Zap } from "lucide-react";

export const DarmkrebsVorsorge = () => {
  return (
    <div className="space-y-16 md:space-y-24">
      <div className="space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="relative w-full h-[300px] md:h-[400px] rounded-[30px] md:rounded-[60px] overflow-hidden border-4 md:border-[12px] border-white shadow-2xl bg-white"
        >
          <Image
            src="/images/frauenpraxis-nana-jobi-darmkrebs.jpg"
            alt="Darmkrebsvorsorge"
            fill
            className="object-cover contrast-[1.1]"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </motion.div>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-4">
              <h3 className="text-3xl md:text-5xl font-serif italic text-slate-900 leading-tight">
                Darmkrebs<span className="text-[#e62e7a]">vorsorge</span>
              </h3>
              <p className="text-slate-900 font-serif italic text-xl md:text-2xl leading-relaxed border-l-2 border-rose-100 pl-8">
                Früh erkannt ist Darmkrebs besser heilbar. Darmkrebs tritt meist jenseits des 50. Lebensjahres auf. Frauen erkranken häufiger als Männer.
              </p>
            </div>

            <div className="space-y-6 text-slate-600 font-serif not-italic text-sm md:text-lg leading-relaxed">
              <p>
                Die gesetzlichen Krankenkassen bieten in ihrem Leistungskatalog verschiedene Vorsorgeuntersuchungen zur Früherkennung von Darmkrebs an.
              </p>
              <p>
                Ab einem Alter von 50 Jahren hat jeder Versicherte Anspruch auf die Vorsorgeuntersuchung mit dem Okkulttest („Stuhlkärtchen“).
              </p>
            </div>
          </div>

          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 md:p-10 rounded-[40px] bg-white border border-rose-100 shadow-[0_40px_100px_-20px_rgba(230,46,122,0.12)] relative overflow-hidden h-full flex flex-col justify-center group"
            >
              <AlertCircle className="absolute -right-8 -top-8 w-48 h-48 text-[#e62e7a]/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000 ease-out" />
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-rose-50">
                    <Activity className="w-5 h-5 text-[#e62e7a]" />
                  </div>
                  <h4 className="text-2xl font-serif italic text-slate-900 tracking-tight">
                    Risiko<span className="text-[#e62e7a]">faktoren</span>
                  </h4>
                </div>
                <div className="h-[1px] w-12 bg-[#e62e7a]/30 group-hover:w-20 transition-all duration-500" />
                <p className="text-slate-600 font-serif not-italic text-sm md:text-lg leading-relaxed">
                  Rauchen, übermäßiger Alkoholgenuss, falsche Ernährung (fettreich, ballaststoffarm&nbsp;=&nbsp;Fastfood) und zu wenig körperliche Bewegung.
                </p>
                <p className="text-slate-400 text-sm italic pt-4 border-t border-rose-50">
                  Manche Menschen sind jedoch auch ohne diese Risikofaktoren gefährdet, wenn in ihrer Familie bei nahen Verwandten schon einmal Darmkrebs aufgetreten ist.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-12">
        {/* Koloskopie */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-[40px] bg-rose-50/50 border border-rose-100 space-y-6 flex flex-col justify-center relative overflow-hidden group"
        >
          <div className="flex items-center gap-4 text-[#e62e7a]">
            <CheckCircle2 className="w-8 h-8" />
            <span className="font-black uppercase tracking-[0.2em] text-[10px]">Prävention ab 55</span>
          </div>
          <h4 className="text-2xl md:text-3xl font-serif italic text-slate-900 leading-tight">
            Darmspiegelung <br /> (Koloskopie)
          </h4>
          <p className="text-slate-700 font-serif italic text-lg leading-relaxed">
            Ab dem 55. Lebensjahr besteht Anspruch auf eine Darmspiegelung. Diese ist die beste und effektivste Methode zur Früherkennung.
          </p>
          <p className="text-slate-500 text-sm italic">
            Sie sollte je nach Befund und Risikogruppe (familiäre Disposition) <span className="whitespace-nowrap">alle 5 - 10 Jahre</span> wiederholt werden.
          </p>
        </motion.div>

        {/* Immunologischer Stuhltest */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 md:p-12 rounded-[40px] bg-white border border-rose-100 shadow-xl space-y-6 relative overflow-hidden group"
        >
          <Search className="absolute -right-6 -bottom-6 w-40 h-40 text-[#e62e7a]/5 rotate-12 group-hover:rotate-0 transition-transform duration-1000" />
          <div className="relative z-10 space-y-6">
            <h4 className="text-2xl md:text-3xl font-serif italic text-[#e62e7a] leading-tight">
              Wann ist ein immunologischer Stuhltest sinnvoll?
            </h4>
            <div className="space-y-4 text-slate-600 font-serif not-italic text-sm md:text-lg leading-relaxed">
              <p>
                Dieses neue, verbesserte Verfahren bietet eine höhere diagnostische Sicherheit als die herkömmlichen Stuhlkärtchen.
              </p>
              <p>
                Durch ein immunologisches Verfahren wird Blut im Stuhl besser erkannt und die Rate an falsch positiven oder negativen Ergebnissen kann nahezu ausgeschlossen werden.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="p-8 md:p-12 rounded-[40px] bg-white border-2 border-rose-100 flex items-start gap-6 relative overflow-hidden"
      >
        <div className="w-12 h-12 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
          <Zap className="w-6 h-6 text-[#e62e7a]" />
        </div>
        <p className="text-slate-800 font-serif italic text-lg md:text-xl leading-relaxed">
          Insbesondere, wenn Sie zu einer Risikogruppe gehören oder noch keine Darmspiegelung durchführen möchten, ist dieser Test zu empfehlen.
        </p>
        <div className="absolute inset-0 bg-gradient-to-br from-rose-50/30 to-transparent pointer-events-none" />
      </motion.div>
    </div>
  );
};