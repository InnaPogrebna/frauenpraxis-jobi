"use client";

import { useState, useEffect } from "react";
import { supabase } from "@/lib/supabase";
import { motion } from "framer-motion";
import Image from "next/image";
import { InfoCards } from "@/components/InfoCards";

const staticTeam = [
  {
    name: "Nana Jobi",
    role: "Fachärztin für Frauenheilkunde & Geburtshilfe, Ärztin für Präventionsmedizin",
    image: "/images/team/frauenpraxis-nana-jobi-portrait-s.jpg"
  },
  {
    name: "Andrea Herrmann",
    role: "Medizinische Fachangestellte",
    image: "/images/team/frauenpraxis-nana-jobi-m2.jpg"
  },
  {
    name: "Gülcan Sarikaya",
    role: "Medizinische Fachangestellte",
    image: "/images/team/Sarikaya4.webp"
  }
];

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

export const TeamSection = () => {
  const [team, setTeam] = useState<TeamMember[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchTeam = async () => {
      try {
        const { data: res, error } = await supabase
          .from("team")
          .select("*")
          .order("sort_order", { ascending: true })

        if (error || !res || res.length === 0) {
          setTeam(staticTeam);
        } else {
          setTeam(res.map(m => ({
            name: m.name,
            role: m.role,
            image: m.image_url
          })));
        }
      } catch (err) {
        setTeam(staticTeam);
      } finally {
        setIsLoading(false);
      }
    };

    fetchTeam();
  }, []);

  return (
  <div className="space-y-24 md:space-y-32">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="max-w-2xl space-y-4"
    >
      <span className="text-[10px] md:text-[11px] uppercase tracking-[0.4em] font-black text-[#e62e7a]">
        Praxisteam
      </span>
      <h2 className="text-4xl md:text-6xl font-serif text-slate-800 tracking-tighter leading-tight">
        Expertise & Herzlichkeit <br />
        <span className="italic text-[#e62e7a]">Lernen Sie uns kennen...</span>
      </h2>
    </motion.div>

    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-10 lg:gap-16">
      {team.map((m, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: i * 0.1 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="relative aspect-[3/4] w-full max-w-[320px] mx-auto overflow-hidden rounded-[30px] md:rounded-[50px] border border-slate-100 shadow-sm bg-slate-50">
            <Image
              src={m.image}
              alt={m.name}
              fill
              className="object-cover object-top filter contrast-[1.05] brightness-[1.02]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-slate-900/10 mix-blend-overlay opacity-60" />
          </div>

          <div className="mt-10 space-y-4 text-center px-4">
            <div className="space-y-1">
              <h3 className="text-2xl md:text-3xl font-serif text-slate-900 tracking-tighter italic leading-none">
                {m.name}
              </h3>
              <div className="flex justify-center pt-2">
                <div className="h-[1px] w-8 bg-[#e62e7a]/30" />
              </div>
            </div>

            <p className="text-[9px] md:text-[10px] uppercase tracking-[0.25em] font-black text-slate-500 leading-relaxed max-w-[240px] mx-auto">
              {m.role}
            </p>
          </div>
        </motion.div>
      ))}
    </div>

    <InfoCards />
  </div>
  );
};
