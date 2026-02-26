"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { supabase } from "@/lib/supabase";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { Save, Check, Loader2 } from "lucide-react";
import { ErrorAlert } from "./ErrorAlert"

type Day = {
  id: number;
  day_name: string;
  am_open: string;
  am_close: string;
  pm_open: string;
  pm_close: string;
  is_closed: boolean;
};

export const SheduleManagment = () => {
  const [days, setDays] = useState<Day[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);
  const isFetchingRef = useRef(false);
  const autoSaveTimerRef = useRef<NodeJS.Timeout | null>(null);

const fetchSchedule = useCallback(async () => {
    if (isFetchingRef.current) return; // Проверка через реф

    isFetchingRef.current = true;
    setIsLoading(true);
    setError(null);
    try {
      const { data, error: sbError } = await supabase
        .from("schedule")
        .select("*")
        .order("day_index");

      if (sbError) throw sbError;
      if (data) setDays(data);
    } catch (err) {
      setError("Ups! Unsere Datenbank gönnt sich eine kurze Auszeit. Wir sind gleich wieder für Sie da!");
    } finally {
      setIsLoading(false);
      isFetchingRef.current = false;
    }
  }, []);

  useEffect(() => {
    fetchSchedule();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSave = useCallback(async () => {
    if (isSaving) return;

    setIsSaving(true);
    setError(null);

    try {
      const { error: sbError } = await supabase
        .from("schedule")
        .upsert(days, { onConflict: 'id' });

      if (sbError) throw sbError;

      setLastSaved(new Date());
      setHasChanges(false);
    } catch (err) {
      console.error(err);
      setError("Das Speichern hat nicht ganz geklappt – keine Sorge, Ihre Änderungen sind noch da. Versuchen wir es gleich noch mal?");
    } finally {
      setIsSaving(false);
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    }
  }, [days, isSaving]);


  useEffect(() => {
    if (hasChanges) {
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);

      autoSaveTimerRef.current = setTimeout(() => {
        handleSave();
      }, 3000);
    }
    return () => {
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    };
  }, [hasChanges, handleSave]);

  const handleChange = (id: string, field: string, value: string | boolean) => {
    setHasChanges(true);
    setDays(prev => prev.map(day => day.id.toString() === id ? { ...day, [field]: value } : day));
  };

  return (
    <div className="space-y-8">
      {error && <ErrorAlert error={error} onRetry={fetchSchedule} />}
      <div className="flex items-center justify-between bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-rose-50 sticky top-0 z-10 shadow-sm">
        <div className="text-xs font-black uppercase tracking-widest text-slate-400">
          {hasChanges ? (
            <span className="text-[#e62e7a] animate-pulse">Änderungen ungespeichert...</span>
          ) : lastSaved ? (
            <span className="text-emerald-500 flex items-center gap-1">
              <Check className="w-3 h-3" /> Gespeichert um {lastSaved.toLocaleTimeString()}
            </span>
          ) : (
            "Alle Daten aktuell"
          )}
        </div>
        <Button
          onClick={handleSave}
          disabled={!hasChanges || isSaving}
          className="bg-[#e62e7a] hover:bg-[#c02065] rounded-full px-8 transition-all shadow-lg shadow-[#e62e7a]/20"
        >
          {isSaving ? <Loader2 className="w-4 h-4 animate-spin mr-2" /> : <Save className="w-4 h-4 mr-2" />}
          Speichern
        </Button>
      </div>
      {isLoading && days.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 space-y-4">
          <Loader2 className="w-10 h-10 animate-spin text-[#e62e7a]" />
          <p className="text-xs font-black uppercase tracking-widest text-slate-400">Lade Öffnungszeiten...</p>
        </div>
      ) : (
      <div className="grid gap-4">
        {days.map((day) => (
          <div key={day.id} className="bg-white p-4 md:p-6 rounded-[15px] md:rounded-[25px] border border-slate-50 shadow-sm flex flex-col lg:flex-row lg:items-center gap-6 group hover:border-rose-100 transition-colors">
            <div className="min-w-[140px]">
              <span className="font-serif italic text-2xl text-slate-900 group-hover:text-[#e62e7a] transition-colors tracking-tighter">
                {day.day_name}
              </span>
            </div>

            <div className={`flex flex-wrap items-center gap-4 flex-grow transition-opacity ${day.is_closed ? 'opacity-30 pointer-events-none' : 'opacity-100'}`}>

              {/* Vormittag (AM) */}
              <div className="flex items-center gap-1 sm:gap-3 bg-slate-50 py-2 px-2 sm:px-4 rounded-2xl border border-transparent focus-within:border-rose-200 transition-all">
                <span className="text-[10px] w-[75px] font-black uppercase text-slate-400">Vormittag</span>
                <Input
                  type="time"
                  value={day.am_open || ""}
                  onChange={(e) => handleChange(day.id.toString(), "am_open", e.target.value)}
                  onClick={(e) => e.currentTarget.showPicker()}
                  className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer"
                />
                <span className="text-slate-300">bis</span>
                <Input
                  type="time"
                  value={day.am_close || ""}
                  onChange={(e) => handleChange(day.id.toString(), "am_close", e.target.value)}
                  onClick={(e) => e.currentTarget.showPicker()}
                  className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer"
                />
              </div>

              {/* Nachmittag (PM) */}
              <div className="flex items-center gap-1 sm:gap-3 bg-slate-50 py-2 px-2 sm:px-4 rounded-2xl border border-transparent focus-within:border-rose-200 transition-all">
                <span className="text-[10px] w-[75px] font-black uppercase text-slate-400">Nachmittag</span>
                <Input
                  type="time"
                  value={day.pm_open || ""}
                  onChange={(e) => handleChange(day.id.toString(), "pm_open", e.target.value)}
                  onClick={(e) => e.currentTarget.showPicker()}
                  className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer"
                />
                <span className="text-slate-300">bis</span>
                <Input
                  type="time"
                  value={day.pm_close || ""}
                  onChange={(e) => handleChange(day.id.toString(), "pm_close", e.target.value)}
                  onClick={(e) => e.currentTarget.showPicker()}
                  className="bg-transparent border-none text-sm font-bold focus:ring-0 cursor-pointer"
                />
              </div>
            </div>

            <div className="flex items-center gap-3 ml-auto bg-rose-50/30 p-3 px-5 rounded-2xl border border-rose-50">
              <span className="text-[10px] w-[75px] font-black uppercase tracking-widest text-[#e62e7a]">Geschlossen</span>
              <Switch
                checked={day.is_closed}
                onCheckedChange={(val) => handleChange(day.id.toString(), "is_closed", val)}
                className="data-[state=checked]:bg-[#e62e7a]"
              />
            </div>
          </div>
        ))}
      </div>
      )}
    </div>
  );
};