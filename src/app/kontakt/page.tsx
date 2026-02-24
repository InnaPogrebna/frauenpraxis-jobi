"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { InfoTextCard } from "@/components/InfoTextCard";
import { MapPin, Clock, Send, CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const contactSchema = z.object({
  name: z.string().min(2, { message: "Bitte geben Sie Ihren Namen ein" }),
  email: z.string().email({ message: "Ungültige E-Mail Adresse" }),
  phone: z.string().optional(),
  subject: z.string().min(1, { message: "Bitte wählen Sie einen Betreff" }),
  message: z.string().min(10, { message: "Die Nachricht muss mindestens 10 Zeichen lang sein" }),
});

type ContactFormData = z.infer<typeof contactSchema>;

export default function KontaktPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      subject: "termin"
    }
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      await new Promise((resolve) => setTimeout(resolve, 1500));

      if (!response.ok) {
        throw new Error();
      }

      setIsSuccess(true);
      reset();

      setTimeout(() => setIsSuccess(false), 5000);

    } catch (error) {
      console.error("Error sending message:", error);
      setErrorMessage("Entschuldigung, etwas ist schief gelaufen. Bitte versuchen Sie es später erneut.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const openingHours = [
    { d: "Montag, Dienstag", t: "09.00 – 13.00 | 15.00 – 18.00" },
    { d: "Mittwoch", t: "09.00 – 13.00" },
    { d: "Donnerstag", t: "09.00 – 13.00 | 15.00 – 18.00" },
    { d: "Freitag", t: "09.00 – 13.00" },
  ];

  return (
    <div className="min-h-screen bg-[#FCFBFA] flex flex-col selection:bg-[#e62e7a]/10">
      <Header forceScrolled />

      <main className="flex-1 pt-32 md:pt-44 pb-20">
        <div className="max-w-7xl mx-auto">

          {/* --- HERO SECTION --- */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16 md:mb-24 text-center lg:text-left"
          >
            <span className="text-[10px] sm:text-[12px] uppercase tracking-[0.5em] font-black text-[#e62e7a] block mb-4">
              Persönliche Beratung
            </span>
            <h1 className="font-serif italic text-slate-800 leading-[0.9] tracking-tighter text-5xl sm:text-6xl md:text-7xl">
              Kontakt <span className="text-[#e62e7a]">aufnehmen</span>
            </h1>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 items-start">

            {/* --- LEFT SIDE (5/12) --- */}
            <div className="lg:col-span-5 space-y-8 flex flex-col h-full">
              <div className="grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
                <InfoTextCard
                  icon={<MapPin className="w-5 h-5" />}
                  title="Anschrift"
                  className="!p-8 !rounded-[40px]"
                >
                  <p className="font-serif italic text-lg text-slate-700 leading-tight">
                    Staufenbergstraße 31 <br />
                    <span className="text-[#e62e7a] font-bold">74081 Heilbronn</span>
                  </p>
                </InfoTextCard>

                <div className="grid grid-cols-1 gap-4">
                  <div className="p-8 rounded-[40px] bg-white border border-rose-100 shadow-sm transition-hover hover:shadow-md">
                    <p className="text-[10px] uppercase tracking-widest font-black text-[#e62e7a] mb-2">Telefon</p>
                    <a href="tel:+49713142570" className="font-serif italic text-xl text-slate-800 hover:text-[#e62e7a] transition">
                      0 71 31 - 42 57 0
                    </a>
                  </div>
                  <div className="p-8 rounded-[40px] bg-white border border-rose-100 shadow-sm transition-hover hover:shadow-md">
                    <p className="text-[10px] uppercase tracking-widest font-black text-[#e62e7a] mb-2">E-Mail</p>
                    <a href="mailto:info@frauenpraxis-jobi.de" className="font-serif italic text-lg text-slate-800 break-all hover:text-[#e62e7a] transition">
                      info@frauenpraxis-jobi.de
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10 rounded-[50px] bg-white border border-rose-100 shadow-[0_20px_50px_-15px_rgba(230,46,122,0.05)] relative overflow-hidden flex-1">
                <Clock className="absolute -right-6 -top-6 w-32 h-32 text-rose-50/50" />
                <h3 className="text-sm uppercase tracking-[0.3em] font-black text-[#e62e7a] mb-10">
                  Sprechzeiten
                </h3>
                <div className="space-y-6 relative z-10">
                  {openingHours.map((item) => (
                    <div key={item.d} className="group border-b border-rose-50 pb-4 last:border-0 last:pb-0">
                      <span className="block text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 group-hover:text-[#e62e7a] transition-colors">
                        {item.d}
                      </span>
                      <span className="font-serif italic text-slate-900 text-lg md:text-xl tracking-tight">
                        {item.t}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- RIGHT SIDE / FORM (7/12) --- */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="lg:col-span-7 bg-white rounded-[50px] md:rounded-[70px] p-8 md:p-16 lg:p-20 border border-rose-100 shadow-[0_40px_100px_-20px_rgba(230,46,122,0.12)]"
            >
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                  >
                    <h2 className="font-serif italic text-4xl md:text-6xl text-slate-800 mb-6 tracking-tighter">
                      Haben Sie <span className="text-[#e62e7a]">Fragen?</span>
                    </h2>

                    <div className="space-y-2 mb-10">
                      <h3 className="text-sm md:text-base font-black uppercase tracking-[0.2em] text-slate-800">
                        Kontaktformular
                      </h3>
                      <p className="text-slate-500 font-serif italic text-base md:text-lg leading-relaxed max-w-xl">
                        Bei Fragen, Terminvergabe, Hilfe oder anderen Anliegen können Sie uns ganz einfach eine Nachricht zusenden.
                        Wir werden uns in Kürze bei Ihnen melden...
                      </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
                      <div className="grid gap-6 md:gap-10">
                        {/* Name */}
                        <div className="relative group">
                          <input
                            {...register("name")}
                            type="text"
                            placeholder=" "
                            className={`peer w-full bg-transparent border-b py-2 md:py-5 text-[14px] font-medium outline-none transition-all font-sans 
          ${errors.name ? "border-red-400" : "border-slate-300 focus:border-[#e62e7a]"}`}
                          />
                          <label className="absolute left-0 top-2 md:top-2 md:top-5 text-[12px] font-black tracking-widest uppercase text-slate-300 transition-all pointer-events-none
        peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#e62e7a]
        peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#e62e7a]">
                            Vor- und Nachname*
                          </label>
                          {errors.name && <p className="text-[10px] text-red-500 mt-2 font-sans font-bold uppercase">{errors.name.message}</p>}
                        </div>

                        <div className="grid md:grid-cols-1 gap-6 md:gap-10">
                          {/* Email */}
                          <div className="relative group">
                            <input
                              {...register("email")}
                              type="email"
                              placeholder=" "
                              className={`peer w-full bg-transparent border-b py-2 md:py-5 text-[14px] font-medium outline-none transition-all font-sans 
            ${errors.email ? "border-red-400" : "border-slate-300 focus:border-[#e62e7a]"}`}
                            />
                            <label className="absolute left-0 top-2 md:top-5 text-[12px] font-black tracking-widest uppercase text-slate-300 transition-all pointer-events-none
          peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#e62e7a]
          peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#e62e7a]">
                              E-Mail Adresse*
                            </label>
                            {errors.email && <p className="text-[10px] text-red-500 mt-2 font-sans font-bold uppercase">{errors.email.message}</p>}
                          </div>

                          {/* Telefon */}
                          <div className="relative group">
                            <input
                              {...register("phone")}
                              type="tel"
                              placeholder=" "
                              className="peer w-full bg-transparent border-b border-slate-300 py-2 md:py-5 text-[14px] font-medium outline-none focus:border-[#e62e7a] transition-all font-sans"
                            />
                            <label className="absolute left-0 top-2 md:top-5 text-[12px] font-black tracking-widest uppercase text-slate-300 transition-all pointer-events-none
          peer-focus:-top-4 peer-focus:text-[10px] peer-focus:text-[#e62e7a]
          peer-[:not(:placeholder-shown)]:-top-4 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#e62e7a]">
                              Telefon
                            </label>
                          </div>
                        </div>

                        {/* Subject (Shadcn Select) */}
                        <div className="relative space-y-2 font-sans pt-2">
                          <label className="text-[10px] font-black text-[#e62e7a] tracking-[0.2em] uppercase">
                            Betreff auswählen
                          </label>
                          <Select
                            onValueChange={(value) => {
                              setValue("subject", value);
                              trigger("subject");
                            }}
                            defaultValue="termin"
                          >
                            <SelectTrigger className="w-full bg-transparent border-none border-b border-slate-300 rounded-none px-0 py-6 text-[12px] font-black tracking-widest uppercase focus:ring-0">
                              <SelectValue placeholder="Bitte wählen..." />
                            </SelectTrigger>
                            <SelectContent className="bg-white/95 backdrop-blur-xl border-rose-100 rounded-2xl">
                              <SelectItem value="termin" className="text-[11px] font-bold uppercase py-3">Termin</SelectItem>
                              <SelectItem value="rezept" className="text-[11px] font-bold uppercase py-3">Rezept</SelectItem>
                              <SelectItem value="hilfe" className="text-[11px] font-bold uppercase py-3">Hilfe</SelectItem>
                              <SelectItem value="allgemein" className="text-[11px] font-bold uppercase py-3">Allgemeine Anfrage</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        {/* Nachricht */}
                        <div className="relative pt-4">
                          <textarea
                            {...register("message")}
                            rows={4}
                            placeholder=" "
                            className={`peer w-full bg-transparent border-b py-2 md:py-5 text-[14px] font-medium outline-none transition-all font-sans resize-none
          ${errors.message ? "border-red-400" : "border-slate-300 focus:border-[#e62e7a]"}`}
                          />
                          <label className="absolute left-0 top-8 text-[12px] font-black tracking-widest uppercase text-slate-300 transition-all pointer-events-none
        peer-focus:top-0 peer-focus:text-[10px] peer-focus:text-[#e62e7a]
        peer-[:not(:placeholder-shown)]:top-0 peer-[:not(:placeholder-shown)]:text-[10px] peer-[:not(:placeholder-shown)]:text-[#e62e7a]">
                            Ihre Nachricht*
                          </label>
                          {errors.message && <p className="text-[10px] text-red-500 mt-2 font-sans font-bold uppercase">{errors.message.message}</p>}
                        </div>
                      </div>

                      <div className="space-y-6">
                        <button
                          disabled={isSubmitting}
                          type="submit"
                          className="group max-w-5xl mx-auto py-5 md:py-6 px-5 md:px-10 rounded-full bg-slate-950 hover:bg-[#e62e7a] disabled:bg-slate-400 text-white transition-all duration-500 uppercase tracking-[0.4em] text-[11px] font-black flex items-center justify-center gap-4 shadow-2xl font-sans"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              Senden...
                            </>
                          ) : (
                            <>
                              Nachricht senden
                              <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </>
                          )}
                        </button>
                        <AnimatePresence>
                          {errorMessage && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: -10 }}
                            >
                              <Alert variant="destructive" className="bg-red-50 border-red-100 rounded-[25px] py-4">
                                <AlertCircle className="h-4 w-4" />
                                <AlertDescription className="text-[10px] font-bold uppercase tracking-widest ml-2">
                                  {errorMessage}
                                </AlertDescription>
                              </Alert>
                            </motion.div>
                          )}
                        </AnimatePresence>

                      <p className="text-[10px] text-slate-400 text-center uppercase tracking-[0.15em] leading-relaxed pt-4 font-sans font-bold">
                        * Pflichtfelder. Wir setzen uns so schnell wie möglich mit Ihnen in Verbindung.
                      </p>
                      </div>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-20 text-center space-y-6"
                  >
                    <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-green-500">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif italic text-4xl text-slate-800 tracking-tighter">Vielen Dank!</h3>
                      <p className="text-slate-500 font-sans uppercase text-[11px] tracking-widest font-black max-w-xs mx-auto">
                        Ihre Nachricht wurde erfolgreich versendet. Мы свяжемся с вами в ближайшее время.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* --- MAP SECTION --- */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-16 md:mt-24 h-[400px] md:h-[600px] rounded-[50px] md:rounded-[80px] overflow-hidden border-[12px] border-white shadow-2xl relative"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2616.438515093557!2d9.19110041219662!3d49.11865107125348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47982ed502e5ddcd%3A0x404d12375c9e417e!2sStaufenbergstra%C3%9Fe+31%2C+74081+Heilbronn!5e0!3m2!1sde!2sde!4v1710000000000!5m2!1sde!2sde"
              className="w-full h-full"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
            <div className="absolute inset-0 pointer-events-none ring-1 ring-inset ring-black/5 rounded-[50px] md:rounded-[80px]" />
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
}