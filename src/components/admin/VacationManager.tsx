"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { supabase } from "@/lib/supabase";
import { format, isBefore } from "date-fns";
import { de } from "date-fns/locale";
import { Calendar as CalendarIcon, Save, Check, Loader2, CircleAlert } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import { ErrorAlert } from "./ErrorAlert";

const defaultMessage = "Liebe Patientinnen, unsere Praxis ist derzeit vorübergehend nicht besetzt.";

export const VacationManager = () => {
  const [data, setData] = useState({
    id: 1,
    is_active: false,
    start_date: "",
    end_date: "",
    message: defaultMessage
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [hasChanges, setHasChanges] = useState(false);
  const [lastSaved, setLastSaved] = useState<Date | null>(null);
  const [error, setError] = useState<string | null>(null);

  const autoSaveTimerRef = useRef<NodeJS.Timeout | null>(null);

  const loadData = useCallback(async () => {
    if (isLoading) return;
    setIsLoading(true);
    setError(null);
    try {
      const { data: res, error: sbError } = await supabase
        .from("vacation_status")
        .select("*")
        .single();

      if (sbError) throw sbError;
      if (res) setData(res);
    } catch (err) {
      console.error(err);
      setError("Urlaubsstatus konnte nicht geladen werden. Bitte versuchen Sie es erneut.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleSave = useCallback(async () => {
    if (isSaving) return;
    if (data.start_date && data.end_date) {
      if (isBefore(new Date(data.end_date), new Date(data.start_date))) {
        toast.error("Validierungsfehler", {
          description: "Das Enddatum darf nicht vor dem Anfangsdatum liegen."
        });
        return;
      }
    }

    setIsSaving(true);
    setError(null);

    try {
      const payload = {
        ...data,
        message: data.message.trim() === "" ? defaultMessage : data.message
      };

      const { error: sbError } = await supabase
        .from("vacation_status")
        .upsert(payload, { onConflict: 'id' });

      if (sbError) throw sbError;

      setLastSaved(new Date());
      setHasChanges(false);
      toast.success("Änderungen gespeichert");
    } catch (err) {
      console.error(err);
      setError("Fehler beim Speichern der Daten.");
      toast.error("Speichern fehlgeschlagen");
    } finally {
      setIsSaving(false);
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
    }
  }, [data, isSaving]);

  useEffect(() => {
    if (hasChanges) {
      if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current);
      autoSaveTimerRef.current = setTimeout(handleSave, 3000);
    }
    return () => { if (autoSaveTimerRef.current) clearTimeout(autoSaveTimerRef.current); };
  }, [hasChanges, handleSave]);

  const updateField = (field: string, value: unknown) => {
    setHasChanges(true);
    setData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="space-y-8">
      {error && <ErrorAlert error={error} onRetry={loadData} />}
      <div className="flex items-center justify-between bg-white/50 backdrop-blur-sm p-4 rounded-2xl border border-rose-50 sticky top-0 z-10 shadow-sm">
        <div className="text-xs font-black uppercase tracking-widest text-slate-400">
          {hasChanges ? (
            <span className="text-[#e62e7a] animate-pulse">Änderungen ungespeichert...</span>
          ) : lastSaved ? (
            <span className="text-emerald-500 flex items-center gap-1">
              <Check className="w-3 h-3" /> Gespeichert um {lastSaved.toLocaleTimeString()}
            </span>
          ) : (
            "Status aktuell"
          )}
        </div>
        <Button
          onClick={handleSave}
          disabled={!hasChanges || isSaving}
          className="bg-[#e62e7a] hover:bg-[#c02065] rounded-full px-8 h-10 transition-all shadow-lg uppercase tracking-widest text-[10px] font-black"
        >
          {isSaving ? <Loader2 className="w-3 h-3 animate-spin mr-2" /> : <Save className="w-3 h-3 mr-2" />}
          Speichern
        </Button>
      </div>

      <div className="max-w-3xl mx-auto bg-white p-8 md:p-12 rounded-[40px] border border-slate-100 shadow-sm relative overflow-hidden">
        {isLoading ? (
          <div className="flex flex-col items-center gap-4">
            <Loader2 className="w-8 h-8 animate-spin text-[#e62e7a]" />
            <p className="text-[10px] font-black uppercase text-slate-400">Urlaubsdaten prüfen...</p>
          </div>
        ) : (
        <div className="relative z-10 space-y-10">

          <div className="flex items-center justify-between gap-6 border-b border-slate-50 pb-8">
            <div className="space-y-1">
              <h3 className="text-2xl font-serif italic text-slate-900">Urlaubsmodus</h3>
              <p className="text-xs text-slate-400 italic">Banner auf der Website aktivieren</p>
            </div>
            <div className="flex items-center gap-4 bg-slate-50 p-4 rounded-3xl border border-slate-100">
              <span className={cn("text-[10px] font-black uppercase tracking-widest", !data.is_active ? "text-[#e62e7a]" : "text-slate-300")}>Inaktiv</span>
              <Switch
                checked={data.is_active}
                onCheckedChange={(val) => updateField("is_active", val)}
                className="data-[state=checked]:bg-[#e62e7a]"
              />
              <span className={cn("text-[10px] font-black uppercase tracking-widest", data.is_active ? "text-[#e62e7a]" : "text-slate-300")}>Aktiv</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-3">
              <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest ml-2 block text-left">Startdatum</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-full h-14 rounded-2xl border-slate-100 bg-slate-50/50 justify-start text-left font-serif italic text-lg", !data.start_date && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4 text-[#e62e7a]" />
                    {data.start_date ? format(new Date(data.start_date), "dd. MMMM yyyy", { locale: de }) : <span>Datum wählen</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 rounded-3xl border-rose-50 shadow-2xl">
                  <Calendar
                    mode="single"
                    selected={data.start_date ? new Date(data.start_date) : undefined}
                    onSelect={(date) => updateField("start_date", date?.toISOString())}
                    initialFocus
                    locale={de}
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest ml-2 block text-left">Enddatum</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button variant="outline" className={cn("w-full h-14 rounded-2xl border-slate-100 bg-slate-50/50 justify-start text-left font-serif italic text-lg", !data.end_date && "text-muted-foreground")}>
                    <CalendarIcon className="mr-2 h-4 w-4 text-[#e62e7a]" />
                    {data.end_date ? format(new Date(data.end_date), "dd. MMMM yyyy", { locale: de }) : <span>Datum wählen</span>}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0 rounded-3xl border-rose-50 shadow-2xl">
                  <Calendar
                    mode="single"
                    selected={data.end_date ? new Date(data.end_date) : undefined}
                    onSelect={(date) => updateField("end_date", date?.toISOString())}
                    initialFocus
                    locale={de}
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          <div className="space-y-3 text-left">
            <label className="text-[10px] uppercase font-black text-slate-400 tracking-widest ml-2">Urlaubsnachricht</label>
            <Textarea
              value={data.message}
              onChange={(e) => updateField("message", e.target.value)}
              placeholder={defaultMessage}
              className="min-h-[140px] rounded-3xl border-slate-100 bg-slate-50/50 p-6 font-serif italic text-lg focus:border-[#e62e7a]/30 focus:bg-white transition-all resize-none shadow-none leading-relaxed"
            />
            {!data.message && (
              <div className="flex items-center gap-2 mt-2 px-4 py-2 bg-rose-50/50 rounded-xl text-[10px] text-slate-500 italic">
                <CircleAlert size={12} className="text-[#e62e7a]" />
                <span>Hinweis: Wenn das Feld leer bleibt, wird automatisch ein Standardtext verwendet.</span>
              </div>
            )}
          </div>
        </div>
        )
        }
      </div>
    </div>
  );
};