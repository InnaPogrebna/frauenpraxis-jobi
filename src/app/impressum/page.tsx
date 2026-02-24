"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Scale, Fingerprint, Phone, Mail } from "lucide-react";

export default function ImpressumPage() {
  return (
    <div className="min-h-screen bg-[#FCFBFA] flex flex-col selection:bg-[#e62e7a]/10">
      <Header forceScrolled />

      <main className="flex-1 pt-28 sm:pt-32 md:pt-44 pb-20 sm:pb-32">
        {/* Контейнер с адаптивными отступами по бокам */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* --- HEADER SECTION --- */}
          <div className="relative mb-12 sm:mb-24">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 mb-4 sm:mb-6"
            >
              <div className="w-8 sm:w-10 h-[1px] bg-[#e62e7a]" />
              <span className="text-[10px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black text-[#e62e7a] font-sans">
                Legal Disclosure
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-serif italic text-slate-900 leading-[0.9] tracking-tighter text-5xl sm:text-7xl md:text-8xl lg:text-9xl"
            >
              Impres<span className="text-[#e62e7a]">sum</span>
            </motion.h1>
          </div>

          {/* --- MAIN CONTENT GRID --- */}
          <div className="grid lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">

            {/* Left Column: Essential Info */}
            <div className="lg:col-span-5 space-y-8 sm:space-y-12">
              <div className="p-6 sm:p-10 lg:p-14 rounded-[35px] sm:rounded-[50px] bg-white border border-rose-100 shadow-[0_30px_70px_-20px_rgba(230,46,122,0.08)] relative overflow-hidden group">
                <Scale className="absolute -right-6 -top-6 w-24 h-24 sm:w-32 sm:h-32 text-rose-50 opacity-40 group-hover:rotate-12 transition-transform duration-700" />

                <div className="relative z-10 space-y-6 sm:space-y-8">
                  <div>
                    <h3 className="text-[9px] sm:text-[10px] uppercase tracking-widest font-black text-[#e62e7a] mb-4 sm:mb-6">Praxisinhaberin</h3>
                    <div className="font-serif italic text-xl sm:text-2xl md:text-3xl text-slate-900 leading-tight">
                      <p className="not-italic font-bold tracking-tighter">Frauenpraxis Nana Jobi</p>
                      <p>Staufenbergstraße 31</p>
                      <p>74081 Heilbronn</p>
                    </div>
                  </div>

                  <div className="pt-6 sm:pt-8 border-t border-rose-50">
                    <p className="font-serif italic text-lg sm:text-xl text-slate-800">Nana Jobi</p>
                    <p className="text-[10px] sm:text-xs uppercase tracking-widest font-bold text-slate-400 mt-2 leading-relaxed">
                      Fachärztin für Frauenheilkunde und Geburtshilfe, <br className="hidden sm:block" />
                      Ärztin für Präventionsmedizin
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Quick Links */}
              <div className="grid grid-cols-1 gap-3 sm:gap-4">
                <a href="tel:+49713142570" className="flex items-center justify-between p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-rose-50 hover:border-[#e62e7a]/30 transition-all group">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-rose-50 flex items-center justify-center text-[#e62e7a] group-hover:bg-[#e62e7a] group-hover:text-white transition-colors">
                      <Phone className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    <span className="font-serif italic text-sm sm:text-base md:text-lg text-slate-700">0 71 31 - 42 57 - 0</span>
                  </div>
                </a>
                <a href="mailto:info@frauenpraxis-jobi.de" className="flex items-center justify-between p-5 sm:p-6 rounded-2xl sm:rounded-3xl bg-white border border-rose-50 hover:border-[#e62e7a]/30 transition-all group overflow-hidden">
                  <div className="flex items-center gap-3 sm:gap-4 overflow-hidden">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-rose-50 flex items-center justify-center text-[#e62e7a] group-hover:bg-[#e62e7a] group-hover:text-white transition-colors shrink-0">
                      <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    </div>
                    {/* break-all помогает на самых маленьких экранах (320px) */}
                    <span className="font-serif italic text-sm sm:text-base md:text-lg text-slate-700 truncate sm:overflow-visible break-all sm:break-normal">
                      info@frauenpraxis-jobi.de
                    </span>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Legal Text */}
            <div className="lg:col-span-7 space-y-12 sm:space-y-20 mt-8 lg:mt-0">
              {/* Verantwortlich Section */}
              <section className="space-y-4 sm:space-y-6">
                <div className="flex items-center gap-3 sm:gap-4">
                  <Fingerprint className="w-4 h-4 sm:w-5 sm:h-5 text-[#e62e7a]" />
                  <h2 className="text-[10px] sm:text-xs uppercase tracking-[0.2em] sm:tracking-[0.3em] font-black text-slate-900">Verantwortlich</h2>
                </div>
                <div className="p-6 sm:p-12 rounded-[30px] sm:rounded-[40px] bg-rose-50/30 border border-rose-100/50">
                  <p className="font-serif italic text-lg sm:text-xl md:text-2xl text-slate-800 leading-relaxed">
                    Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV: <br />
                    <span className="text-[#e62e7a] font-bold not-italic">Nana Jobi</span>
                  </p>
                  <p className="mt-4 sm:mt-6 pt-4 sm:pt-6 border-t border-rose-100 text-[11px] sm:text-sm font-serif italic text-slate-500">
                    Zuständige Landesärztekammer: Baden-Württemberg
                  </p>
                </div>
              </section>

              {/* Disclaimer Sections */}
              <div className="space-y-10 sm:space-y-16">
                {[
                  {
                    title: "Haftung für Inhalte",
                    text: "Die Inhalte unserer Seiten wurden mit größter Sorgfalt erstellt. Für die Richtigkeit, Vollständigkeit und" +
                    "Aktualität der Inhalte können wir jedoch keine Gewähr übernehmen. Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG" +
                    "für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als" +
                    "Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach" + 
                    "Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der" +
                    "Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch" +
                    "erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich." +
                    "Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen."
                  },
                  {
                    title: "Haftung für Links",
                    text: "Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb" +
                    "können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der" +
                    "jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf" +
                    "mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine" +
                    "permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung" +
                    "nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen."
                  },
                  {
                    title: "Urheberrecht",
                    text: "Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen" +
                    "Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen" +
                    "des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien" +
                    "dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser Seite nicht" +
                    "vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche" +
                    "gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis." +
                    "Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen."
                  }
                ].map((section, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="group px-2 sm:px-0"
                  >
                    <h3 className="font-serif text-xl sm:text-2xl md:text-3xl italic text-slate-900 mb-4 sm:mb-6 group-hover:text-[#e62e7a] transition-colors duration-500">
                      {section.title}
                    </h3>
                    <p className="text-slate-600 font-serif text-base sm:text-lg leading-relaxed italic border-l-2 border-rose-50 pl-4 sm:pl-8 group-hover:border-[#e62e7a]/20 transition-all">
                      {section.text}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}