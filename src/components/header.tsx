"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

type HeaderProps = {
  forceScrolled?: boolean;
};

export const Header = ({ forceScrolled = false }: HeaderProps) => {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(forceScrolled);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Startseite", href: "/" },
    { name: "Praxis", href: "/praxis" },
    { name: "Gynäkologie", href: "/gynaekologie" },
    { name: "Geburtshilfe", href: "/geburtshilfe" },
    { name: "Kontakt", href: "/kontakt" },
  ];

  useEffect(() => {
    if (forceScrolled) return;
    const handleScroll = () => setIsScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [forceScrolled]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen
        ? "h-20 border-b border-white/20 shadow-sm"
        : "h-24 bg-transparent"
        }`}
    >
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${isScrolled || isMobileMenuOpen ? "opacity-100" : "opacity-0"
          }`}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-rose-300/95 to-rose-300/40 backdrop-blur-xl" />
        <div className="absolute bottom-0 w-full h-[1px] bg-rose-100/40" />
      </div>

      <div className="container mx-auto px-4 md:px-2 h-full flex items-center justify-between relative">
        <Link href="/" className="hover:opacity-80 transition-opacity flex items-center gap-4">
          <div className="relative h-12 sm:h-18 w-[160px] sm:w-[260px]">
            <Image
              src="/images/frauenpraxis-nana-jobi-logo-startseite.png"
              alt="Nana Jobi Logo"
              fill
              className={`object-contain transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "opacity-0" : "opacity-100 brightness-110"
                }`}
              style={{
                filter: !isScrolled && !isMobileMenuOpen
                  ? 'drop-shadow(0 0 10px rgba(124, 124, 124, 0.5)) drop-shadow(0 0 10px rgba(246, 61, 138, 0.5))'
                  : 'none'
              }}
              priority
            />
            <div
              className={`absolute inset-0 transition-all bg-pink-600 duration-300 drop-shadow-sm ${isScrolled || isMobileMenuOpen ? "opacity-100" : "opacity-0"
                }`}
              style={{
                WebkitMaskImage: 'url(/images/frauenpraxis-nana-jobi-logo-startseite.png)',
                maskImage: 'url(/images/frauenpraxis-nana-jobi-logo-startseite.png)',
                WebkitMaskRepeat: 'no-repeat',
                maskRepeat: 'no-repeat',
                WebkitMaskSize: 'contain',
                width: '100%',
                maskSize: 'contain',
                WebkitMaskPosition: 'center',
                maskPosition: 'center',
                filter: 'drop-shadow(0 2px 4px rgba(0,0,0,0.1))'
              }}
            />
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-10">
          {navItems.map((item) => {
            const isActive = pathname === item.href;

            return (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm uppercase tracking-[0.3em] font-bold transition-all duration-300 relative group
                  ${isActive && !isScrolled ? "w-full text-white" : isActive && isScrolled
                    ? "text-[#e62e7a]"
                    : isScrolled
                      ? "text-slate-800"
                      : "text-white/90"
                  }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-2 left-0 h-[1.5px] transition-all duration-300
                    ${isActive && !isScrolled ? "w-full bg-white" : isActive && isScrolled
                      ? "w-full bg-[#e62e7a]"
                      : `w-0 group-hover:w-full ${isScrolled ? "bg-[#e62e7a]/90" : "bg-white/90"}`
                    }`}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Burger Button */}
        <button
          className="lg:hidden relative z-50 p-2 transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-8 h-8 text-pink-600" />
          ) : (
            <Menu className={`w-8 h-8 ${isScrolled ? "text-pink-600" : "text-white"}`} />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 lg:hidden transition-all duration-500 ease-in-out ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
          }`}
      >
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/frauenpraxis-jobi-st-header.jpg"
            alt="Ghost Background"
            fill
            className="object-cover object-[25%_center] grayscale"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <nav className="flex flex-col gap-8 mb-16">
            {navItems.map((item, idx) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-2xl uppercase tracking-[0.4em] font-black transition-all duration-500 ${isActive ? "text-pink-600" : "text-white hover:text-rose-400"
                    } ${isMobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"}`}
                  style={{ transitionDelay: `${idx * 150}ms` }}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className={`space-y-4 transition-all duration-700 delay-500 ${isMobileMenuOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}>
            <div className="w-12 h-[2px] bg-pink-600 mx-auto mb-6" />
            <p className="text-3xl font-serif text-white tracking-tighter">
              <a href="tel:+49713142570" className="hover:text-[#e62e7a] transition-colors">
                0 71 31 - 42 57 - 0
              </a>
            </p>
            <p className="text-[11px] uppercase tracking-[0.1em] text-pink-600 font-bold">Direktkontakt</p>
          </div>
        </div>
      </div>
    </header>
  );
};