"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import 'photoswipe/dist/photoswipe.css';

const images = [
  { src: "/images/frauenpraxis-nana-jobi-praxisbilder-1b.jpg", w: 1200, h: 800 },
  { src: "/images/frauenpraxis-nana-jobi-praxisbilder-2b.jpg", w: 1200, h: 1600 },
  { src: "/images/frauenpraxis-nana-jobi-praxisbilder-3b.jpg", w: 1200, h: 800 },
  { src: "/images/frauenpraxis-nana-jobi-praxisbilder-4b.jpg", w: 1200, h: 800 },
  { src: "/images/frauenpraxis-nana-jobi-praxisbilder-5b.jpg", w: 1200, h: 1600 },
  { src: "/images/frauenpraxis-nana-jobi-praxisbilder-6b.jpg", w: 1200, h: 800 },
];

export const AboutSection = () => (
                  <div className="grid lg:grid-cols-2 gap-16 md:gap-32 items-start">
                    <div className="lg:sticky lg:top-32 space-y-8 text-base md:text-lg text-slate-800 leading-relaxed">
                      <div className="space-y-6">
                        <motion.h2
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          className="text-3xl md:text-6xl font-serif leading-tight text-slate-900"
                        >
                          Wir über uns
                        </motion.h2>
                        <p>
                          Ihre Gesundheit ist unser wichtigstes Anliegen. Darüber hinaus möchten Sie sich bei uns
                          medizinisch und menschlich gut aufgehoben und ernst genommen fühlen. Wir nehmen uns daher
                          in einer persönlichen und vertrauensvollen Atmosphäre ausreichend Zeit für Sie.
                        </p>
                        <p>
                          Unsere Behandlung stimmen wir ganz auf Ihre individuellen Beschwerden und Bedürfnisse ab,
                          um über alle Lebensabschnitte hinweg das beste Ergebnis für Sie zu erzielen. Unsere Praxis
                          verfolgt dabei einen ganzheitlichen Ansatz. Neben den klassischen und modernen
                          schulmedizinischen Verfahren bieten wir Ihnen auch komplementäre bzw. alternative Therapieformen.
                        </p>
                      </div>
                      <div className="h-[1px] w-20 bg-rose-200" />
                    </div>

                    {/* Gallery */}
                    <div id="praxis-gallery" className="columns-1 md:columns-2 gap-4 space-y-4">
                      {images.map((img, idx) => (
                        <motion.a
                          key={idx}
                          href={img.src}
                          data-pswp-width={img.w}
                          data-pswp-height={img.h}
                          whileHover={{ y: -8, scale: 1.02 }}
                          transition={{ type: "spring", stiffness: 300 }}
                          className="block relative overflow-hidden rounded-[2rem] md:rounded-[3rem] group bg-slate-100"
                        >
                          <Image
                            src={img.src}
                            alt="Frauenpraxis Heilbronn"
                            width={img.w}
                            height={img.h}
                            className="w-full h-auto object-cover transition-transform duration-[3s] group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </motion.a>
                      ))}
                    </div>

                  </div>
);