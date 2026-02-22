import Link from "next/link";
import Image from "next/image";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#fafafa] pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-14 md:pb-16 overflow-hidden border-t border-slate-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col items-center">

          {/* Main Content */}
          <div className="text-center max-w-5xl w-full space-y-8 sm:space-y-10 md:space-y-12">

            <div className="space-y-3 sm:space-y-4">
              <h2 className="text-[11px] sm:text-[12px] md:text-[14px] uppercase tracking-[0.3em] sm:tracking-[0.4em] font-black text-slate-950 leading-relaxed">
                Nana Jobi — Fachärztin für Frauenheilkunde und Geburtshilfe <br />
                <span className="text-[#e62e7a]">Ärztin für Präventionsmedizin</span>
              </h2>
            </div>

            <div className="h-[1px] w-16 sm:w-20 md:w-24 bg-rose-200 mx-auto" />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10 md:gap-8 text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-bold text-slate-400">
              <div className="space-y-2">
                <p className="text-slate-900 font-black">Anschrift</p>
                <p className="leading-relaxed">
                  Staufenbergstraße 31 <br />
                  74081 Heilbronn
                </p>
              </div>

              <div className="space-y-2">
                <p className="text-slate-900 font-black">Kontakt</p>
                <div className="flex flex-col space-y-1">
                  <a
                    href="tel:+49713142570"
                    className="hover:text-[#e62e7a] transition-colors inline-block"
                  >
                    Tel: 0 71 31 - 42 57 0
                  </a>
                  <a
                    href="mailto:info@frauenpraxis-jobi.de"
                    className="hover:text-[#e62e7a] transition-colors break-all lowercase tracking-normal"
                  >
                    info@frauenpraxis-jobi.de
                  </a>
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-slate-900 font-black">Web</p>
                <a
                  href="https://www.frauenpraxis-jobi.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#e62e7a] transition-colors lowercase tracking-normal"
                >
                  www.frauenpraxis-jobi.de
                </a>
              </div>

            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mt-16 sm:mt-20 md:mt-24 pt-8 sm:pt-10 border-t border-slate-200 w-full text-[10px] sm:text-[11px] uppercase font-black text-slate-400 tracking-[0.2em]">
            <div className="order-2 lg:order-1 text-slate-300 tracking-[0.1em] text-center lg:text-left">
              © {currentYear} Nana Jobi. Crafted with Style.
            </div>

            <div className="flex flex-wrap justify-center lg:justify-end gap-6 sm:gap-8 tracking-[0.25em] sm:tracking-[0.3em] order-1 lg:order-2">
              <Link href="/impressum" className="hover:text-[#e62e7a] transition-colors">
                Impressum
              </Link>
              <Link href="/datenschutz" className="hover:text-[#e62e7a] transition-colors">
                Datenschutz
              </Link>
              <Link href="/kontakt" className="hover:text-[#e62e7a] transition-colors">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};