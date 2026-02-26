"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import { Lock, Eye, EyeOff, AlertCircle } from "lucide-react";

export const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) {
      setError("Ungültige E-Mail oder Passwort.");
      setLoading(false);
    } else {
      window.location.reload();
    }
  };

  return (<div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
    <motion.div 
      initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
      className="w-full max-w-[480px] bg-white rounded-[40px] sm:rounded-[60px] p-4 sm:p-12 md:p-16 border border-rose-50 shadow-2xl relative"
    >
      <div className="text-center space-y-4 mb-10">
        <div className="w-16 h-16 bg-slate-950 rounded-2xl flex items-center justify-center mx-auto shadow-lg rotate-3">
          <Lock className="text-white w-8 h-8" />
        </div>
        <h1 className="text-3xl font-serif italic text-slate-900 tracking-tighter">Admin-Login</h1>
        <p className="text-[10px] uppercase tracking-[0.3em] font-black text-[#e62e7a]">Nur für autorisierte Personen</p>
      </div>

      <form onSubmit={handleLogin} className="space-y-4">
        <Input 
          type="email" placeholder="E-Mail-Adresse" required
          className="h-14 rounded-2xl border-slate-100 px-6 focus:ring-[#e62e7a]"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div className="relative">
          <Input 
            type={showPassword ? "text" : "password"} placeholder="Passwort" required
            className="h-14 rounded-2xl border-slate-100 px-6 focus:ring-[#e62e7a]"
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 -translate-y-1/2 text-slate-400">
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {error && (
          <div className="bg-red-50 text-red-500 p-4 rounded-xl text-xs font-bold flex gap-2 border border-red-100">
            <AlertCircle size={16} /> {error}
          </div>
        )}

        <Button disabled={loading} className="w-full h-16 rounded-full bg-slate-950 hover:bg-[#e62e7a] text-white transition-all duration-500 uppercase tracking-widest text-[11px] font-black shadow-xl">
          {loading ? "Wird geladen..." : "Anmelden"}
        </Button>
      </form>
    </motion.div>
    </div>
  );
};